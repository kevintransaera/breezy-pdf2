'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import FileDropzone from '@/components/shared/FileDropzone';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { usePdfDocument } from '@/lib/hooks/usePdfDocument';
import { reorderPdf } from '@/lib/pdf/reorder';
import { downloadUint8Array } from '@/lib/utils/file-helpers';

const PdfThumbnail = dynamic(() => import('@/components/shared/PdfThumbnail'), { ssr: false });

export default function ReorderTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const { document: pdfDoc, pageCount, loading, error: loadError } = usePdfDocument(file);
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [pageOrder, setPageOrder] = useState<number[]>([]);

  const initOrder = useCallback(() => {
    if (pageCount > 0 && pageOrder.length !== pageCount) {
      setPageOrder(Array.from({ length: pageCount }, (_, i) => i + 1));
    }
  }, [pageCount, pageOrder.length]);
  initOrder();

  const movePage = (fromIndex: number, direction: 'up' | 'down') => {
    const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= pageOrder.length) return;
    setPageOrder(prev => {
      const next = [...prev];
      [next[fromIndex], next[toIndex]] = [next[toIndex], next[fromIndex]];
      return next;
    });
  };

  const handleReorder = async () => {
    if (!file || pageOrder.length === 0) return;
    setResult(null);
    processing.startProcessing('Reordering pages...');

    try {
      const data = await reorderPdf(file, pageOrder, (p) => {
        processing.setProgress(p, 'Reordering pages...');
      });
      setResult(data);
      processing.completeProcessing('Reorder complete');
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  const handleReset = () => {
    clearFiles();
    setResult(null);
    setPageOrder([]);
    processing.reset();
  };

  return (
    <div className="space-y-6">
      {!file && (
        <FileDropzone onFiles={addFiles} accept=".pdf" multiple={false} />
      )}

      {loading && <p className="text-center text-sm text-stone-400">Loading PDF...</p>}
      {loadError && <p className="text-center text-sm text-stone-900">{loadError}</p>}

      {pdfDoc && pageOrder.length > 0 && processing.status === 'idle' && (
        <>
          <p className="text-xs text-stone-500 text-center">Use arrows to reorder pages</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-px bg-stone-200">
            {pageOrder.map((pageNum, index) => (
              <div key={`${pageNum}-${index}`} className="flex flex-col items-center p-3 bg-stone-50">
                <PdfThumbnail document={pdfDoc} pageNumber={pageNum} width={100} />
                <span className="text-[10px] text-stone-500 mt-2 tabular-nums">Page {pageNum}</span>
                <div className="flex gap-px mt-2">
                  <button
                    onClick={() => movePage(index, 'up')}
                    disabled={index === 0}
                    aria-label={`Move page ${pageNum} left`}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-400 hover:text-stone-900 disabled:opacity-20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => movePage(index, 'down')}
                    disabled={index === pageOrder.length - 1}
                    aria-label={`Move page ${pageNum} right`}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-400 hover:text-stone-900 disabled:opacity-20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button onClick={handleReorder} className="btn-primary">
              Apply New Order
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'reordered.pdf')} label="Download Reordered PDF" />
          <button onClick={handleReset} className="btn-ghost">
            Reorder another file
          </button>
        </div>
      )}

      {processing.status === 'error' && (
        <div className="flex justify-center">
          <button onClick={handleReset} className="btn-ghost">Try again</button>
        </div>
      )}
    </div>
  );
}
