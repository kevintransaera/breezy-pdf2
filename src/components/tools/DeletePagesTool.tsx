'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import FileDropzone from '@/components/shared/FileDropzone';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { usePdfDocument } from '@/lib/hooks/usePdfDocument';
import { deletePages } from '@/lib/pdf/delete-pages';
import { parsePageRanges, expandPageRanges } from '@/lib/utils/page-ranges';
import { downloadUint8Array } from '@/lib/utils/file-helpers';

const PdfPageGrid = dynamic(() => import('@/components/shared/PdfPageGrid'), { ssr: false });

export default function DeletePagesTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const { document: pdfDoc, pageCount, loading, error: loadError } = usePdfDocument(file);
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [rangeInput, setRangeInput] = useState('');

  const togglePage = useCallback((pageNum: number) => {
    setSelectedPages(prev => {
      const next = new Set(prev);
      if (next.has(pageNum)) next.delete(pageNum);
      else next.add(pageNum);
      return next;
    });
  }, []);

  const applyRange = () => {
    if (!rangeInput.trim() || !pageCount) return;
    const ranges = parsePageRanges(rangeInput, pageCount);
    const pages = expandPageRanges(ranges);
    setSelectedPages(new Set(pages));
  };

  const handleDelete = async () => {
    if (!file || selectedPages.size === 0) return;
    if (pageCount && selectedPages.size >= pageCount) return;
    setResult(null);
    processing.startProcessing('Deleting pages...');

    try {
      const pages = Array.from(selectedPages).sort((a, b) => a - b);
      const data = await deletePages(file, pages, (p) => {
        processing.setProgress(p, 'Deleting pages...');
      });
      const remaining = pageCount! - pages.length;
      setResult(data);
      processing.completeProcessing(`Deleted ${pages.length} page${pages.length !== 1 ? 's' : ''} — ${remaining} page${remaining !== 1 ? 's' : ''} remaining`);
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  const handleReset = () => {
    clearFiles();
    setResult(null);
    setSelectedPages(new Set());
    setRangeInput('');
    processing.reset();
  };

  const renderDeleteOverlay = (pageNum: number) => {
    if (!selectedPages.has(pageNum)) return null;
    return (
      <div className="absolute inset-0 bg-red-500/10 pointer-events-none" aria-hidden="true" />
    );
  };

  return (
    <div className="space-y-6">
      {!file && (
        <FileDropzone onFiles={addFiles} accept=".pdf" multiple={false} />
      )}

      {loading && <p className="text-center text-sm text-stone-500" role="status">Loading PDF...</p>}
      {loadError && <p className="text-center text-sm text-stone-900" role="alert">{loadError}</p>}

      {pdfDoc && pageCount > 0 && processing.status === 'idle' && (
        <>
          <div className="flex flex-col sm:flex-row gap-3 items-end">
            <div className="flex-1">
              <label htmlFor="page-range" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">
                Pages to delete (e.g. &quot;1-3, 5, 7-10&quot;)
              </label>
              <input
                id="page-range"
                type="text"
                value={rangeInput}
                onChange={(e) => setRangeInput(e.target.value)}
                placeholder={`1-${pageCount}`}
                className="input-field"
              />
            </div>
            <button onClick={applyRange} className="btn-secondary text-xs px-4 py-2.5">
              Apply
            </button>
          </div>

          <p className="text-xs text-stone-500">
            Or click pages to mark for deletion — {selectedPages.size} selected
            {selectedPages.size > 0 && pageCount && (
              <span> ({pageCount - selectedPages.size} page{pageCount - selectedPages.size !== 1 ? 's' : ''} will remain)</span>
            )}
          </p>

          <PdfPageGrid
            document={pdfDoc}
            pageCount={pageCount}
            selectedPages={selectedPages}
            onTogglePage={togglePage}
            renderOverlay={renderDeleteOverlay}
          />

          {selectedPages.size > 0 && (
            <div className="flex justify-center pt-2">
              {selectedPages.size >= pageCount ? (
                <p className="text-sm text-stone-500">Cannot delete all pages. At least one page must remain.</p>
              ) : (
                <button onClick={handleDelete} className="btn-primary">
                  Delete {selectedPages.size} Page{selectedPages.size !== 1 ? 's' : ''}
                </button>
              )}
            </div>
          )}
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'deleted-pages.pdf')} label="Download PDF" />
          <button onClick={handleReset} className="btn-ghost">Delete pages from another file</button>
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
