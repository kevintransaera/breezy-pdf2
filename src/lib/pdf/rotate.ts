import { PDFDocument, degrees } from 'pdf-lib';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

/**
 * Rotate pages in a PDF. rotations maps 1-indexed page number to rotation degrees (90, 180, 270).
 */
export async function rotatePdf(
  file: File,
  rotations: Map<number, number>,
  onProgress?: (progress: number) => void
): Promise<Uint8Array> {
  const arrayBuffer = await readFileAsArrayBuffer(file);

  let pdf: PDFDocument;
  try {
    pdf = await PDFDocument.load(arrayBuffer);
  } catch {
    throw new Error('Failed to load PDF. It may be encrypted or corrupted.');
  }

  onProgress?.(20);

  const pages = pdf.getPages();
  for (const [pageNum, rotation] of Array.from(rotations.entries())) {
    const page = pages[pageNum - 1];
    if (page) {
      const currentRotation = page.getRotation().angle;
      page.setRotation(degrees(currentRotation + rotation));
    }
  }

  onProgress?.(80);
  const result = await pdf.save();
  onProgress?.(100);

  return result;
}

/**
 * Rotate all pages by a given angle.
 */
export async function rotateAllPages(
  file: File,
  rotation: number,
  onProgress?: (progress: number) => void
): Promise<Uint8Array> {
  const arrayBuffer = await readFileAsArrayBuffer(file);

  let pdf: PDFDocument;
  try {
    pdf = await PDFDocument.load(arrayBuffer);
  } catch {
    throw new Error('Failed to load PDF. It may be encrypted or corrupted.');
  }

  onProgress?.(20);

  const pages = pdf.getPages();
  for (const page of pages) {
    const currentRotation = page.getRotation().angle;
    page.setRotation(degrees(currentRotation + rotation));
  }

  onProgress?.(80);
  const result = await pdf.save();
  onProgress?.(100);

  return result;
}
