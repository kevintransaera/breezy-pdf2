import { PDFDocument } from 'pdf-lib';
import * as pdfjs from 'pdfjs-dist';
import { initPdfWorker } from '@/lib/utils/pdf-worker-setup';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

export type CompressionMode = 'light' | 'heavy';

/**
 * Compress a PDF.
 * - Light: reload into pdf-lib and re-save (strips unused objects, lossless)
 * - Heavy: render pages via PDF.js at reduced DPI, re-embed as JPEG (lossy)
 */
export async function compressPdf(
  file: File,
  mode: CompressionMode,
  quality: number = 0.7, // JPEG quality for heavy mode (0-1)
  onProgress?: (progress: number) => void
): Promise<Uint8Array> {
  const arrayBuffer = await readFileAsArrayBuffer(file);

  if (mode === 'light') {
    let pdf: PDFDocument;
    try {
      pdf = await PDFDocument.load(arrayBuffer);
    } catch {
      throw new Error('Failed to load PDF. It may be encrypted or corrupted.');
    }
    onProgress?.(50);
    const result = await pdf.save();
    onProgress?.(100);
    return result;
  }

  // Heavy mode: render pages to JPEG and rebuild
  initPdfWorker();

  const doc = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  const numPages = doc.numPages;
  const newPdf = await PDFDocument.create();

  for (let i = 1; i <= numPages; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: 1.5 }); // ~108 DPI (reduced from typical 300)

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d')!;

    await page.render({ canvasContext: ctx, viewport }).promise;

    // Convert to JPEG blob
    const jpegBlob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => b ? resolve(b) : reject(new Error('Canvas conversion failed')),
        'image/jpeg',
        quality
      );
    });

    const jpegArrayBuffer = await jpegBlob.arrayBuffer();
    const jpegImage = await newPdf.embedJpg(new Uint8Array(jpegArrayBuffer));

    const newPage = newPdf.addPage([viewport.width, viewport.height]);
    newPage.drawImage(jpegImage, {
      x: 0,
      y: 0,
      width: viewport.width,
      height: viewport.height,
    });

    onProgress?.(Math.round((i / numPages) * 95));
  }

  const result = await newPdf.save();
  onProgress?.(100);

  return result;
}
