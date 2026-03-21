import { PDFDocument } from 'pdf-lib';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

export async function mergePdfs(
  files: File[],
  onProgress?: (progress: number) => void
): Promise<Uint8Array> {
  if (files.length === 0) throw new Error('No files provided');
  if (files.length === 1) {
    const buf = await readFileAsArrayBuffer(files[0]);
    return new Uint8Array(buf);
  }

  const mergedPdf = await PDFDocument.create();
  const total = files.length;

  for (let i = 0; i < total; i++) {
    const arrayBuffer = await readFileAsArrayBuffer(files[i]);

    let donorPdf: PDFDocument;
    try {
      donorPdf = await PDFDocument.load(arrayBuffer);
    } catch {
      throw new Error(`Failed to load "${files[i].name}". It may be encrypted or corrupted.`);
    }

    const pages = await mergedPdf.copyPages(donorPdf, donorPdf.getPageIndices());
    for (const page of pages) {
      mergedPdf.addPage(page);
    }

    onProgress?.(Math.round(((i + 1) / total) * 90));
  }

  onProgress?.(95);
  const mergedBytes = await mergedPdf.save();
  onProgress?.(100);

  return mergedBytes;
}
