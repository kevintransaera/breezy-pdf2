'use client';

import { useState, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { initPdfWorker } from '@/lib/utils/pdf-worker-setup';
import { readFileAsArrayBuffer } from '@/lib/utils/file-helpers';

interface PdfDocumentState {
  document: PDFDocumentProxy | null;
  pageCount: number;
  loading: boolean;
  error: string | null;
}

export function usePdfDocument(file: File | null) {
  const [state, setState] = useState<PdfDocumentState>({
    document: null,
    pageCount: 0,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!file) {
      setState({ document: null, pageCount: 0, loading: false, error: null });
      return;
    }

    let cancelled = false;

    async function loadDocument() {
      setState(prev => ({ ...prev, loading: true, error: null }));
      try {
        initPdfWorker();
        const arrayBuffer = await readFileAsArrayBuffer(file!);
        const doc = await pdfjs.getDocument({ data: arrayBuffer }).promise;
        if (!cancelled) {
          setState({
            document: doc,
            pageCount: doc.numPages,
            loading: false,
            error: null,
          });
        }
      } catch {
        if (!cancelled) {
          setState({
            document: null,
            pageCount: 0,
            loading: false,
            error: 'Failed to load PDF. It may be encrypted or corrupted.',
          });
        }
      }
    }

    loadDocument();
    return () => { cancelled = true; };
  }, [file]);

  return state;
}
