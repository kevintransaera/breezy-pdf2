'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import FileDropzone from '@/components/shared/FileDropzone';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { usePdfDocument } from '@/lib/hooks/usePdfDocument';
import { addWatermark } from '@/lib/pdf/watermark';
import { downloadUint8Array } from '@/lib/utils/file-helpers';

const PdfPageGrid = dynamic(() => import('@/components/shared/PdfPageGrid'), { ssr: false });

const FONT_SIZES = [24, 36, 48, 60, 72, 96, 120];
const OPACITY_OPTIONS = [
  { label: '5%', value: 0.05 },
  { label: '10%', value: 0.1 },
  { label: '15%', value: 0.15 },
  { label: '20%', value: 0.2 },
  { label: '30%', value: 0.3 },
  { label: '50%', value: 0.5 },
];

export default function WatermarkTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const { document: pdfDoc, pageCount, loading, error: loadError } = usePdfDocument(file);
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [text, setText] = useState('CONFIDENTIAL');
  const [fontSize, setFontSize] = useState(60);
  const [opacity, setOpacity] = useState(0.15);

  const handleWatermark = async () => {
    if (!file) return;
    setResult(null);
    processing.startProcessing('Adding watermark...');

    try {
      const data = await addWatermark(
        file,
        { text, fontSize, opacity, color: { r: 0.5, g: 0.5, b: 0.5 } },
        (p) => { processing.setProgress(p); }
      );
      setResult(data);
      processing.completeProcessing('Watermark added');
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  const handleReset = () => {
    clearFiles();
    setResult(null);
    setText('CONFIDENTIAL');
    setFontSize(60);
    setOpacity(0.15);
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
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-lg">
              <span className="text-xs tracking-widest uppercase text-stone-500">Text</span>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Watermark text"
                className="flex-1 w-full sm:w-auto px-4 py-2.5 text-sm border border-stone-300 rounded-full bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-inset"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-xs tracking-widest uppercase text-stone-500">Font Size</span>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="px-4 py-2.5 text-sm border border-stone-300 rounded-full bg-transparent text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-inset"
              >
                {FONT_SIZES.map((size) => (
                  <option key={size} value={size}>{size}px</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-xs tracking-widest uppercase text-stone-500">Opacity</span>
              <select
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="px-4 py-2.5 text-sm border border-stone-300 rounded-full bg-transparent text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-inset"
              >
                {OPACITY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          <PdfPageGrid document={pdfDoc} pageCount={pageCount} />

          <div className="flex justify-center pt-2">
            <button onClick={handleWatermark} disabled={!text.trim()} className="btn-primary">
              Add Watermark
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'watermarked.pdf')} label="Download Watermarked PDF" />
          <button onClick={handleReset} className="btn-ghost">
            Watermark another file
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
