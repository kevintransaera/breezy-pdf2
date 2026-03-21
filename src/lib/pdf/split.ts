import { PDFDocument } from 'pdf-lib';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

/**
 * Split a PDF into a new PDF containing only the specified pages.
 * Pages are 1-indexed.
 */
export async function splitPdf(
  file: File,
  pageNumbers: number[],
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
  const indices = pageNumbers.map(p => p - 1); // Convert to 0-indexed

  const pages = await newPdf.copyPages(sourcePdf, indices);
  for (const page of pages) {
    newPdf.addPage(page);
  }

  onProgress?.(80);
  const result = await newPdf.save();
  onProgress?.(100);

  return result;
}
