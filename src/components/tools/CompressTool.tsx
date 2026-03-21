'use client';

import { useState } from 'react';
import FileDropzone from '@/components/shared/FileDropzone';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { compressPdf, CompressionMode } from '@/lib/pdf/compress';
import { downloadUint8Array, formatFileSize } from '@/lib/utils/file-helpers';

export default function CompressTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [mode, setMode] = useState<CompressionMode>('light');
  const [quality, setQuality] = useState(0.7);

  const handleCompress = async () => {
    if (!file) return;
    setResult(null);
    processing.startProcessing('Compressing PDF...');

    try {
      const data = await compressPdf(file, mode, quality, (p) => {
        processing.setProgress(p, 'Compressing PDF...');
      });
      setResult(data);
      const reduction = ((1 - data.length / file.size) * 100).toFixed(1);
      processing.completeProcessing(
        `${formatFileSize(file.size)} → ${formatFileSize(data.length)} (${reduction}% smaller)`
      );
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  const handleReset = () => {
    clearFiles();
    setResult(null);
    processing.reset();
  };

  return (
    <div className="space-y-6">
      {!file && (
        <FileDropzone onFiles={addFiles} accept=".pdf" multiple={false} />
      )}

      {file && processing.status === 'idle' && (
        <>
          <div className="flex items-center gap-4 py-3 border-b border-stone-200">
            <span className="text-[10px] tracking-widest uppercase text-stone-500" aria-hidden="true">PDF</span>
            <span className="text-sm text-stone-900 truncate flex-1">{file.name}</span>
            <span className="text-xs text-stone-500">{formatFileSize(file.size)}</span>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-stone-500 mb-3">Compression mode</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200">
                <button
                  onClick={() => setMode('light')}
                  className={`p-5 text-left transition-colors ${
                    mode === 'light' ? 'bg-white' : 'bg-stone-50 hover:bg-white'
                  }`}
                >
                  <div className="text-sm font-medium text-stone-900">Lossless</div>
                  <div className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Strips unused data. No quality loss, modest reduction.
                  </div>
                </button>
                <button
                  onClick={() => setMode('heavy')}
                  className={`p-5 text-left transition-colors ${
                    mode === 'heavy' ? 'bg-white' : 'bg-stone-50 hover:bg-white'
                  }`}
                >
                  <div className="text-sm font-medium text-stone-900">Lossy</div>
                  <div className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Re-renders as images. Best for scanned PDFs.
                  </div>
                </button>
              </div>
            </div>

            {mode === 'heavy' && (
              <div>
                <label className="block text-xs tracking-widest uppercase text-stone-400 mb-3">
                  Quality — {Math.round(quality * 100)}%
                </label>
                <input
                  type="range"
                  min={0.3}
                  max={0.95}
                  step={0.05}
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-stone-300 mt-1">
                  <span>Smaller file</span>
                  <span>Better quality</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center pt-2">
            <button onClick={handleCompress} className="btn-primary">
              Compress PDF
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'compressed.pdf')} label="Download Compressed PDF" />
          <button onClick={handleReset} className="btn-ghost">
            Compress another file
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
