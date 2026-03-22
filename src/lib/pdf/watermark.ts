import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

export interface WatermarkOptions {
  text: string;
  fontSize: number;
  opacity: number;
  color: { r: number; g: number; b: number };
}

export async function addWatermark(
  file: File,
  options: WatermarkOptions,
  onProgress?: (progress: number) => void
): Promise<Uint8Array> {
  const { text, fontSize, opacity, color } = options;
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

  for (let i = 0; i < totalPages; i++) {
    const page = pages[i];
    const { width, height } = page.getSize();

    const textWidth = font.widthOfTextAtSize(text, fontSize);
    const textHeight = font.heightAtSize(fontSize);

    // Center the rotated text on the page
    const x = (width - textWidth * Math.cos(Math.PI / 4) + textHeight * Math.sin(Math.PI / 4)) / 2;
    const y = (height - textWidth * Math.sin(Math.PI / 4) - textHeight * Math.cos(Math.PI / 4)) / 2;

    page.drawText(text, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(color.r, color.g, color.b),
      rotate: degrees(45),
      opacity,
    });

    onProgress?.(20 + Math.round(((i + 1) / totalPages) * 60));
  }

  onProgress?.(90);
  const result = await pdf.save();
  onProgress?.(100);

  return result;
}
