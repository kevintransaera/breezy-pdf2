'use client';

import { useState, useCallback } from 'react';
import FileDropzone from '@/components/shared/FileDropzone';
import FileList from '@/components/shared/FileList';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { imagesToPdf, PageSizeMode } from '@/lib/pdf/images-to-pdf';
import { downloadUint8Array } from '@/lib/utils/file-helpers';

export default function ImagesToPdfTool() {
  const { files, addFiles, removeFile, moveFile, clearFiles } = useFileUpload({
    accept: '.jpg,.jpeg,.png',
    multiple: true,
  });
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [pageSize, setPageSize] = useState<PageSizeMode>('fit-image');

  const handleConvert = async () => {
    if (files.length === 0) return;
    setResult(null);
    processing.startProcessing('Converting images to PDF...');

    try {
      const data = await imagesToPdf(files, pageSize, (p) => {
        processing.setProgress(p, 'Converting images to PDF...');
      });
      setResult(data);
      processing.completeProcessing('Conversion complete');
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
      <FileDropzone
        onFiles={addFiles}
        accept=".jpg,.jpeg,.png"
        multiple
        label="Drop your images here"
        sublabel="JPG or PNG — add multiple to combine"
      />

      <FileList
        files={files}
        onRemove={removeFile}
        onMoveUp={useCallback((i: number) => i > 0 && moveFile(i, i - 1), [moveFile])}
        onMoveDown={useCallback((i: number) => i < files.length - 1 && moveFile(i, i + 1), [moveFile, files.length])}
        showOrder
      />

      {files.length > 0 && processing.status === 'idle' && (
        <>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xs tracking-widest uppercase text-stone-400">Page size</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(e.target.value as PageSizeMode)}
              className="select-field w-auto"
            >
              <option value="fit-image">Fit to Image</option>
              <option value="a4">A4</option>
              <option value="letter">US Letter</option>
            </select>
          </div>

          <div className="flex justify-center pt-2">
            <button onClick={handleConvert} className="btn-primary">
              Create PDF from {files.length} Image{files.length !== 1 ? 's' : ''}
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'images.pdf')} label="Download PDF" />
          <button onClick={handleReset} className="btn-ghost">
            Convert more images
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
