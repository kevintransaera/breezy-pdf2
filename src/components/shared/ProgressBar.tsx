'use client';

import { memo } from 'react';
import { ProcessingStatus } from '@/types';

interface ProgressBarProps {
  status: ProcessingStatus;
  progress: number;
  message: string;
}

export default memo(function ProgressBar({ status, progress, message }: ProgressBarProps) {
  if (status === 'idle') return null;

  return (
    <div className="w-full py-6" role="status" aria-live="polite">
      <div className="flex justify-between items-center mb-3">
        <span className={`text-sm truncate ${status === 'error' ? 'text-stone-900' : 'text-stone-600'}`}>
          {message}
        </span>
        {status === 'processing' && (
          <span className="text-xs text-stone-500 tabular-nums ml-3 flex-shrink-0">{Math.round(progress)}%</span>
        )}
      </div>
      <div className="w-full h-px bg-stone-200 overflow-hidden">
        <div
          className="h-full bg-stone-900 transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {status === 'error' && (
        <p className="text-xs text-stone-500 mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  );
});
