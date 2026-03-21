'use client';

import { useState, useMemo, useEffect } from 'react';
import FileDropzone from '@/components/shared/FileDropzone';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { pdfToImages, ImageFormat } from '@/lib/pdf/pdf-to-images';
import { downloadBlob, formatFileSize } from '@/lib/utils/file-helpers';

export default function PdfToImagesTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const processing = useProcessing();
  const [results, setResults] = useState<Blob[]>([]);
  const [format, setFormat] = useState<ImageFormat>('png');
  const [quality, setQuality] = useState(0.85);
  const [scale, setScale] = useState(2);

  // Create object URLs once and revoke on cleanup
  const imageUrls = useMemo(() => results.map(blob => URL.createObjectURL(blob)), [results]);

  useEffect(() => {
    return () => {
      imageUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);

  const handleConvert = async () => {
    if (!file) return;
    setResults([]);
    processing.startProcessing('Converting pages to images...');

    try {
      const blobs = await pdfToImages(file, { format, quality, scale }, (p) => {
        processing.setProgress(p, 'Converting pages to images...');
      });
      setResults(blobs);
      processing.completeProcessing(`Converted ${blobs.length} page${blobs.length !== 1 ? 's' : ''}`);
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  const handleDownloadAll = async () => {
    for (let i = 0; i < results.length; i++) {
      const ext = format === 'png' ? 'png' : 'jpg';
      downloadBlob(results[i], `page-${i + 1}.${ext}`);
    }
  };

  const handleDownloadOne = (index: number) => {
    const ext = format === 'png' ? 'png' : 'jpg';
    downloadBlob(results[index], `page-${index + 1}.${ext}`);
  };

  const handleReset = () => {
    clearFiles();
    setResults([]);
    processing.reset();
  };

  return (
    <div className="space-y-6">
      {!file && (
        <FileDropzone onFiles={addFiles} accept=".pdf" multiple={false} />
      )}

      {file && processing.status === 'idle' && results.length === 0 && (
        <>
          <div className="flex items-center gap-4 py-3 border-b border-stone-200">
            <span className="text-[10px] tracking-widest uppercase text-stone-500" aria-hidden="true">PDF</span>
            <span className="text-sm text-stone-900 truncate flex-1">{file.name}</span>
            <span className="text-xs text-stone-500">{formatFileSize(file.size)}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <label htmlFor="img-format" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Format</label>
              <select
                id="img-format"
                value={format}
                onChange={(e) => setFormat(e.target.value as ImageFormat)}
                className="select-field"
              >
                <option value="png">PNG (lossless)</option>
                <option value="jpeg">JPEG (smaller)</option>
              </select>
            </div>
            {format === 'jpeg' && (
              <div>
                <label htmlFor="img-quality" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">
                  Quality — {Math.round(quality * 100)}%
                </label>
                <input
                  id="img-quality"
                  type="range"
                  min={0.1}
                  max={1}
                  step={0.05}
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}
            <div>
              <label htmlFor="img-resolution" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Resolution</label>
              <select
                id="img-resolution"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="select-field"
              >
                <option value={1}>72 DPI</option>
                <option value={2}>144 DPI</option>
                <option value={3}>216 DPI</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button onClick={handleConvert} className="btn-primary">
              Convert to Images
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && results.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-center">
            <DownloadButton onClick={handleDownloadAll} label={`Download All ${results.length} Images`} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-stone-200">
            {imageUrls.map((url, i) => (
              <div key={i} className="flex flex-col items-center p-3 bg-stone-50">
                <img
                  src={url}
                  alt={`Page ${i + 1}`}
                  className="max-w-full h-auto border border-stone-200 max-h-[200px]"
                />
                <button
                  onClick={() => handleDownloadOne(i)}
                  className="btn-ghost mt-2 text-[10px]"
                >
                  Page {i + 1}
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button onClick={handleReset} className="btn-ghost">Convert another file</button>
          </div>
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
