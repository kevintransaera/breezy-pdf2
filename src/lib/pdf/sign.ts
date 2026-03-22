import { PDFDocument } from 'pdf-lib';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

/**
 * Embed a signature image onto a specific page of a PDF at given coordinates.
 */
export async function signPdf(
  file: File,
  signatureDataUrl: string,
  pageIndex: number,
  x: number,
  y: number,
  width: number,
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

  // Convert data URL to Uint8Array
  const base64 = signatureDataUrl.replace(/^data:image\/png;base64,/, '');
  const binaryString = atob(base64);
  const signatureBytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    signatureBytes[i] = binaryString.charCodeAt(i);
  }

  onProgress?.(40);

  const pngImage = await pdf.embedPng(signatureBytes);
  const aspectRatio = pngImage.height / pngImage.width;

  onProgress?.(60);

  const pages = pdf.getPages();
  const page = pages[pageIndex];
  if (!page) {
    throw new Error(`Page ${pageIndex + 1} not found in the PDF.`);
  }

  const { width: pageWidth, height: pageHeight } = page.getSize();
  const sigWidth = width * pageWidth;
  const sigHeight = sigWidth * aspectRatio;
  const sigX = x * pageWidth - sigWidth / 2;
  const sigY = pageHeight - y * pageHeight - sigHeight / 2;

  page.drawImage(pngImage, {
    x: sigX,
    y: sigY,
    width: sigWidth,
    height: sigHeight,
  });

  onProgress?.(80);

  const result = await pdf.save();
  onProgress?.(100);

  return result;
}
