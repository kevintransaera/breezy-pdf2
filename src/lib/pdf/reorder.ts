import { PDFDocument } from 'pdf-lib';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

/**
 * Reorder pages in a PDF. newOrder is an array of 1-indexed page numbers in desired order.
 */
export async function reorderPdf(
  file: File,
  newOrder: number[],
  onProgress?: (progress: number) => void
): Promise<Uint8Array> {
  const arrayBuffer = await readFileAsArrayBuffer(file);

  let sourcePdf: PDFDocument;
  try {
    sourcePdf = await PDFDocument.load(arrayBuffer);
  } catch {
    throw new Error('Failed to load PDF. It may be encrypted or corrupted.');
  }

  onProgress?.(20);

  const newPdf = await PDFDocument.create();
  const indices = newOrder.map(p => p - 1); // Convert to 0-indexed

  const pages = await newPdf.copyPages(sourcePdf, indices);
  for (const page of pages) {
    newPdf.addPage(page);
  }

  onProgress?.(80);
  const result = await newPdf.save();
  onProgress?.(100);

  return result;
}
