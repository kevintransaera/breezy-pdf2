import { PDFDocument } from 'pdf-lib';
import { readFileAsArrayBuffer, getFileExtension } from '@/lib/utils/file-helpers';

export type PageSizeMode = 'fit-image' | 'a4' | 'letter';

const PAGE_SIZES = {
  a4: { width: 595.28, height: 841.89 },
  letter: { width: 612, height: 792 },
};

/**
 * Combine multiple images into a single PDF.
 */
export async function imagesToPdf(
  files: File[],
  pageSizeMode: PageSizeMode = 'fit-image',
  onProgress?: (progress: number) => void
): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const arrayBuffer = await readFileAsArrayBuffer(file);
    const ext = getFileExtension(file.name);
    const bytes = new Uint8Array(arrayBuffer);

    let image;
    try {
      if (ext === 'png') {
        image = await pdf.embedPng(bytes);
      } else {
        // Treat everything else as JPEG (jpg, jpeg, webp via canvas conversion if needed)
        image = await pdf.embedJpg(bytes);
      }
    } catch {
      throw new Error(`Failed to embed image "${file.name}". Supported formats: JPG, PNG.`);
    }

    let pageWidth: number;
    let pageHeight: number;

    if (pageSizeMode === 'fit-image') {
      pageWidth = image.width;
      pageHeight = image.height;
    } else {
      const size = PAGE_SIZES[pageSizeMode];
      pageWidth = size.width;
      pageHeight = size.height;
    }

    const page = pdf.addPage([pageWidth, pageHeight]);

    if (pageSizeMode === 'fit-image') {
      page.drawImage(image, { x: 0, y: 0, width: pageWidth, height: pageHeight });
    } else {
      // Scale image to fit within page with padding
      const padding = 40;
      const maxW = pageWidth - padding * 2;
      const maxH = pageHeight - padding * 2;
      const scale = Math.min(maxW / image.width, maxH / image.height, 1);
      const drawW = image.width * scale;
      const drawH = image.height * scale;
      const x = (pageWidth - drawW) / 2;
      const y = (pageHeight - drawH) / 2;
      page.drawImage(image, { x, y, width: drawW, height: drawH });
    }

    onProgress?.(Math.round(((i + 1) / files.length) * 100));
  }

  return await pdf.save();
}
