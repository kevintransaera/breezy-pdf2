'use client';

import { useCallback, useRef, useState } from 'react';

interface FileDropzoneProps {
  onFiles: (files: FileList | File[]) => void;
  accept?: string;
  multiple?: boolean;
  label?: string;
  sublabel?: string;
}

export default function FileDropzone({
  onFiles,
  accept = '.pdf',
  multiple = true,
  label = 'Drop your files here',
  sublabel = 'or click to browse',
}: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      onFiles(e.dataTransfer.files);
    }
  }, [onFiles]);

  const handleClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current?.click();
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFiles(e.target.files);
      e.target.value = '';
    }
  }, [onFiles]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${label}. ${sublabel}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        relative flex flex-col items-center justify-center w-full py-20
        border cursor-pointer transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50
        ${isDragging
          ? 'border-stone-900 bg-stone-100'
          : 'border-stone-300 bg-transparent hover:border-stone-500'
        }
      `}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="flex flex-col items-center gap-4 text-center">
        <svg className="w-8 h-8 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <div>
          <p className="text-sm text-stone-700">{label}</p>
          <p className="text-xs text-stone-500 mt-1">{sublabel}</p>
        </div>
      </div>
    </div>
  );
}
