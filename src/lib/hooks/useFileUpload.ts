'use client';

import { useState, useCallback } from 'react';

interface UseFileUploadOptions {
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
}

export function useFileUpload(options: UseFileUploadOptions = {}) {
  const { accept = '.pdf', multiple = true, maxSizeMB = 100 } = options;
  const [files, setFiles] = useState<File[]>([]);

  const addFiles = useCallback((newFiles: FileList | File[]) => {
    const fileArray = Array.from(newFiles);
    const maxBytes = maxSizeMB * 1024 * 1024;

    const validFiles = fileArray.filter(f => {
      if (f.size > maxBytes) {
        alert(`${f.name} exceeds ${maxSizeMB}MB limit.`);
        return false;
      }
      return true;
    });

    if (multiple) {
      setFiles(prev => [...prev, ...validFiles]);
    } else {
      setFiles(validFiles.slice(0, 1));
    }
  }, [multiple, maxSizeMB]);

  const removeFile = useCallback((index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  const moveFile = useCallback((fromIndex: number, toIndex: number) => {
    setFiles(prev => {
      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  }, []);

  const clearFiles = useCallback(() => {
    setFiles([]);
  }, []);

  return {
    files,
    addFiles,
    removeFile,
    moveFile,
    clearFiles,
    accept,
    multiple,
  };
}
