'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import FileDropzone from '@/components/shared/FileDropzone';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { usePdfDocument } from '@/lib/hooks/usePdfDocument';
import { rotateAllPages } from '@/lib/pdf/rotate';
import { downloadUint8Array } from '@/lib/utils/file-helpers';

const PdfPageGrid = dynamic(() => import('@/components/shared/PdfPageGrid'), { ssr: false });

export default function RotateTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const { document: pdfDoc, pageCount, loading, error: loadError } = usePdfDocument(file);
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [rotation, setRotation] = useState(90);

  const handleRotate = async () => {
    if (!file) return;
    setResult(null);
    processing.startProcessing(`Rotating all pages ${rotation}°...`);

    try {
      const data = await rotateAllPages(file, rotation, (p) => {
        processing.setProgress(p);
      });
      setResult(data);
      processing.completeProcessing('Rotation complete');
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  const handleReset = () => {
    clearFiles();
    setResult(null);
    setRotation(90);
    processing.reset();
  };

  return (
    <div className="space-y-6">
      {!file && (
        <FileDropzone onFiles={addFiles} accept=".pdf" multiple={false} />
      )}

      {loading && <p className="text-center text-sm text-stone-400">Loading PDF...</p>}
      {loadError && <p className="text-center text-sm text-stone-900">{loadError}</p>}

      {pdfDoc && pageCount > 0 && processing.status === 'idle' && (
        <>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-xs tracking-widest uppercase text-stone-500">Rotation</span>
            <div className="flex w-full sm:w-auto">
              {[90, 180, 270].map((deg) => (
                <button
                  key={deg}
                  onClick={() => setRotation(deg)}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 text-sm border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-inset ${
                    rotation === deg
                      ? 'bg-stone-900 text-stone-50 border-stone-900'
                      : 'bg-transparent text-stone-600 border-stone-300 hover:border-stone-900'
                  } ${deg === 90 ? 'rounded-l-full' : ''} ${deg === 270 ? 'rounded-r-full' : ''} ${deg === 180 ? 'border-x-0' : ''}`}
                >
                  {deg}°
                </button>
              ))}
            </div>
          </div>

          <PdfPageGrid document={pdfDoc} pageCount={pageCount} />

          <div className="flex justify-center pt-2">
            <button onClick={handleRotate} className="btn-primary">
              Rotate {pageCount} Page{pageCount !== 1 ? 's' : ''}
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'rotated.pdf')} label="Download Rotated PDF" />
          <button onClick={handleReset} className="btn-ghost">
            Rotate another file
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
