'use client';

import { useState } from 'react';
import FileDropzone from '@/components/shared/FileDropzone';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { addPageNumbers, PageNumberPosition } from '@/lib/pdf/page-numbers';
import { downloadUint8Array, formatFileSize } from '@/lib/utils/file-helpers';

export default function PageNumbersTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [position, setPosition] = useState<PageNumberPosition>('bottom-center');
  const [fontSize, setFontSize] = useState(12);
  const [startNumber, setStartNumber] = useState(1);
  const [format, setFormat] = useState<'number' | 'pageOfTotal'>('number');

  const handleProcess = async () => {
    if (!file) return;
    setResult(null);
    processing.startProcessing('Adding page numbers...');

    try {
      const data = await addPageNumbers(file, { position, fontSize, startNumber, format }, (p) => {
        processing.setProgress(p, 'Adding page numbers...');
      });
      setResult(data);
      processing.completeProcessing('Page numbers added');
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  const handleReset = () => {
    clearFiles();
    setResult(null);
    processing.reset();
  };

  const positions: { value: PageNumberPosition; label: string }[] = [
    { value: 'bottom-center', label: 'Bottom Center' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-right', label: 'Bottom Right' },
    { value: 'top-center', label: 'Top Center' },
    { value: 'top-left', label: 'Top Left' },
    { value: 'top-right', label: 'Top Right' },
  ];

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="pn-position" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Position</label>
              <select
                id="pn-position"
                value={position}
                onChange={(e) => setPosition(e.target.value as PageNumberPosition)}
                className="select-field"
              >
                {positions.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pn-format" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Format</label>
              <select
                id="pn-format"
                value={format}
                onChange={(e) => setFormat(e.target.value as 'number' | 'pageOfTotal')}
                className="select-field"
              >
                <option value="number">1, 2, 3...</option>
                <option value="pageOfTotal">Page 1 of N</option>
              </select>
            </div>
            <div>
              <label htmlFor="pn-fontsize" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">
                Font size — {fontSize}pt
              </label>
              <input
                id="pn-fontsize"
                type="range"
                min={8}
                max={24}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="pn-start" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Start number</label>
              <input
                id="pn-start"
                type="number"
                min={1}
                value={startNumber}
                onChange={(e) => setStartNumber(Math.max(1, Number(e.target.value)))}
                className="input-field"
              />
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button onClick={handleProcess} className="btn-primary">
              Add Page Numbers
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'numbered.pdf')} label="Download Numbered PDF" />
          <button onClick={handleReset} className="btn-ghost">Process another file</button>
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
