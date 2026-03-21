import * as pdfjs from 'pdfjs-dist';

let workerInitialized = false;

export function initPdfWorker() {
  if (workerInitialized) return;
  pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
  workerInitialized = true;
}
