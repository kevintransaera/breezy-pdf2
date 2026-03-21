import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

export type PageNumberPosition = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';

export interface PageNumberOptions {
  position: PageNumberPosition;
  fontSize: number;
  startNumber: number;
  format: 'number' | 'pageOfTotal'; // "1" vs "Page 1 of 10"
}

export async function addPageNumbers(
  file: File,
  options: PageNumberOptions,
  onProgress?: (progress: number) => void
): Promise<Uint8Array> {
  const { position, fontSize, startNumber, format } = options;
  const arrayBuffer = await readFileAsArrayBuffer(file);

  let pdf: PDFDocument;
  try {
    pdf = await PDFDocument.load(arrayBuffer);
  } catch {
    throw new Error('Failed to load PDF. It may be encrypted or corrupted.');
  }

  onProgress?.(20);

  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const pages = pdf.getPages();
  const totalPages = pages.length;
  const margin = 40;

  for (let i = 0; i < totalPages; i++) {
    const page = pages[i];
    const { width, height } = page.getSize();
    const pageNum = startNumber + i;

    const text = format === 'pageOfTotal'
      ? `Page ${pageNum} of ${startNumber + totalPages - 1}`
      : `${pageNum}`;

    const textWidth = font.widthOfTextAtSize(text, fontSize);

    let x: number;
    let y: number;

    switch (position) {
      case 'bottom-center':
        x = (width - textWidth) / 2;
        y = margin;
        break;
      case 'bottom-left':
        x = margin;
        y = margin;
        break;
      case 'bottom-right':
        x = width - textWidth - margin;
        y = margin;
        break;
      case 'top-center':
        x = (width - textWidth) / 2;
        y = height - margin;
        break;
      case 'top-left':
        x = margin;
        y = height - margin;
        break;
      case 'top-right':
        x = width - textWidth - margin;
        y = height - margin;
        break;
    }

    page.drawText(text, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });

    onProgress?.(20 + Math.round(((i + 1) / totalPages) * 60));
  }

  onProgress?.(90);
  const result = await pdf.save();
  onProgress?.(100);

  return result;
}
