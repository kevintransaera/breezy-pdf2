'use client';

import { useState, useCallback } from 'react';
import { ProcessingState, ProcessingStatus } from '@/types';

export function useProcessing() {
  const [state, setState] = useState<ProcessingState>({
    status: 'idle',
    progress: 0,
    message: '',
  });

  const setProgress = useCallback((progress: number, message?: string) => {
    setState(prev => ({
      ...prev,
      status: 'processing',
      progress: Math.min(100, Math.max(0, progress)),
      message: message ?? prev.message,
    }));
  }, []);

  const startProcessing = useCallback((message = 'Processing...') => {
    setState({ status: 'processing', progress: 0, message });
  }, []);

  const completeProcessing = useCallback((message = 'Done!') => {
    setState({ status: 'done', progress: 100, message });
  }, []);

  const setError = useCallback((error: string) => {
    setState({ status: 'error', progress: 0, message: error, error });
  }, []);

  const reset = useCallback(() => {
    setState({ status: 'idle', progress: 0, message: '' });
  }, []);

  return {
    ...state,
    setProgress,
    startProcessing,
    completeProcessing,
    setError,
    reset,
  };
}
