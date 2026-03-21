'use client';

import { useState, useCallback } from 'react';
import FileDropzone from '@/components/shared/FileDropzone';
import FileList from '@/components/shared/FileList';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { mergePdfs } from '@/lib/pdf/merge';
import { downloadUint8Array } from '@/lib/utils/file-helpers';

export default function MergeTool() {
  const { files, addFiles, removeFile, moveFile, clearFiles } = useFileUpload({ accept: '.pdf', multiple: true });
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);

  const handleMerge = async () => {
    if (files.length < 2) return;
    setResult(null);
    processing.startProcessing('Merging PDF files...');

    try {
      const merged = await mergePdfs(files, (p) => {
        processing.setProgress(p, 'Merging PDF files...');
      });
      setResult(merged);
      processing.completeProcessing('Merge complete');
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred while merging.');
    }
  };

  const handleDownload = () => {
    if (!result) return;
    downloadUint8Array(result, 'merged.pdf');
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
        accept=".pdf"
        multiple
        label="Drop your PDF files here"
        sublabel="or click to browse — add multiple files to merge"
      />

      <FileList
        files={files}
        onRemove={removeFile}
        onMoveUp={useCallback((i: number) => i > 0 && moveFile(i, i - 1), [moveFile])}
        onMoveDown={useCallback((i: number) => i < files.length - 1 && moveFile(i, i + 1), [moveFile, files.length])}
        showOrder
      />

      {files.length >= 2 && processing.status === 'idle' && (
        <div className="flex justify-center pt-2">
          <button onClick={handleMerge} className="btn-primary">
            Merge {files.length} Files
          </button>
        </div>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={handleDownload} label="Download Merged PDF" />
          <button onClick={handleReset} className="btn-ghost">
            Merge more files
          </button>
        </div>
      )}

      {processing.status === 'error' && (
        <div className="flex justify-center">
          <button onClick={handleReset} className="btn-ghost">
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
