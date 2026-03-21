'use client';

import { memo, useEffect, useRef } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';

interface PdfThumbnailProps {
  document: PDFDocumentProxy;
  pageNumber: number;
  width?: number;
  className?: string;
}

export default memo(function PdfThumbnail({ document, pageNumber, width = 150, className = '' }: PdfThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function renderPage() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      try {
        const page = await document.getPage(pageNumber);
        if (cancelled) return;

        const viewport = page.getViewport({ scale: 1 });
        const scale = width / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        const ctx = canvas.getContext('2d');
        if (!ctx || cancelled) return;

        await page.render({
          canvasContext: ctx,
          viewport: scaledViewport,
        }).promise;
      } catch {
        // Silently fail on render errors
      }
    }

    renderPage();
    return () => { cancelled = true; };
  }, [document, pageNumber, width]);

  return (
    <canvas
      ref={canvasRef}
      className={`border border-stone-200 ${className}`}
    />
  );
});
