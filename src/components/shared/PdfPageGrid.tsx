'use client';

import { useCallback } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import PdfThumbnail from './PdfThumbnail';

interface PdfPageGridProps {
  document: PDFDocumentProxy;
  pageCount: number;
  selectedPages?: Set<number>;
  onTogglePage?: (pageNumber: number) => void;
  renderOverlay?: (pageNumber: number) => React.ReactNode;
  thumbnailWidth?: number;
}

export default function PdfPageGrid({
  document,
  pageCount,
  selectedPages,
  onTogglePage,
  renderOverlay,
  thumbnailWidth = 120,
}: PdfPageGridProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, pageNum: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onTogglePage?.(pageNum);
    }
  }, [onTogglePage]);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-px bg-stone-200" role="group" aria-label="PDF pages">
      {pages.map((pageNum) => {
        const isSelected = selectedPages?.has(pageNum) ?? false;
        const isInteractive = !!onTogglePage;

        return (
          <div
            key={pageNum}
            role={isInteractive ? 'checkbox' : undefined}
            aria-checked={isInteractive ? isSelected : undefined}
            aria-label={isInteractive ? `Page ${pageNum}` : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            onClick={() => onTogglePage?.(pageNum)}
            onKeyDown={isInteractive ? (e) => handleKeyDown(e, pageNum) : undefined}
            className={`
              relative flex flex-col items-center p-3 transition-colors
              ${isSelected ? 'bg-white' : 'bg-stone-50 hover:bg-white'}
              ${isInteractive ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stone-900' : 'cursor-default'}
            `}
          >
            <PdfThumbnail
              document={document}
              pageNumber={pageNum}
              width={thumbnailWidth}
            />
            <span className="text-[10px] text-stone-500 mt-2 tabular-nums">Page {pageNum}</span>
            {renderOverlay?.(pageNum)}
            {selectedPages && (
              <div className={`
                absolute top-2 right-2 w-4 h-4 border flex items-center justify-center
                ${isSelected ? 'bg-stone-900 border-stone-900' : 'bg-transparent border-stone-300'}
              `} aria-hidden="true">
                {isSelected && (
                  <svg className="w-2.5 h-2.5 text-stone-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
