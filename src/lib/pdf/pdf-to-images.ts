import * as pdfjs from 'pdfjs-dist';
import { initPdfWorker } from '@/lib/utils/pdf-worker-setup';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

export type ImageFormat = 'png' | 'jpeg';

export interface PdfToImagesOptions {
  format: ImageFormat;
  quality: number; // 0-1, only for JPEG
  scale: number;   // 1 = 72dpi, 2 = 144dpi, 3 = 216dpi
}

/**
 * Convert all pages of a PDF to images.
 */
export async function pdfToImages(
  file: File,
  options: PdfToImagesOptions,
  onProgress?: (progress: number) => void
): Promise<Blob[]> {
  initPdfWorker();

  const arrayBuffer = await readFileAsArrayBuffer(file);
  const doc = await pdfjs.getDocument({ data: arrayBuffer }).promise;
  const numPages = doc.numPages;
  const blobs: Blob[] = [];

  for (let i = 1; i <= numPages; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: options.scale });

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const ctx = canvas.getContext('2d')!;
    await page.render({ canvasContext: ctx, viewport }).promise;

    const mimeType = options.format === 'png' ? 'image/png' : 'image/jpeg';
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => b ? resolve(b) : reject(new Error('Failed to convert page to image')),
        mimeType,
        options.format === 'jpeg' ? options.quality : undefined
      );
    });

    blobs.push(blob);
    onProgress?.(Math.round((i / numPages) * 100));
  }

  return blobs;
}
