import { PDFDocument } from 'pdf-lib';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

/**
 * Delete specified pages from a PDF, returning a new PDF with the remaining pages.
 * Pages are 1-indexed.
 */
export async function deletePages(
  file: File,
  pagesToDelete: number[],
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

  const totalPages = sourcePdf.getPageCount();
  const deleteSet = new Set(pagesToDelete);

  // Keep all pages NOT in the delete set
  const pagesToKeep = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter(p => !deleteSet.has(p));

  if (pagesToKeep.length === 0) {
    throw new Error('Cannot delete all pages. At least one page must remain.');
  }

  const newPdf = await PDFDocument.create();
  const indices = pagesToKeep.map(p => p - 1); // Convert to 0-indexed

  const pages = await newPdf.copyPages(sourcePdf, indices);
  for (const page of pages) {
    newPdf.addPage(page);
  }

  onProgress?.(80);
  const result = await newPdf.save();
  onProgress?.(100);

  return result;
}
