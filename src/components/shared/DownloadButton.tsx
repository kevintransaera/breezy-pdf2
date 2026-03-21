'use client';

import { memo } from 'react';

interface DownloadButtonProps {
  onClick: () => void;
  label?: string;
  disabled?: boolean;
}

export default memo(function DownloadButton({ onClick, label = 'Download', disabled = false }: DownloadButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center gap-2.5 px-8 py-3.5
        text-sm font-medium tracking-wide rounded-full
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50
        ${disabled
          ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
          : 'bg-stone-900 text-stone-50 hover:bg-stone-800 active:scale-[0.98]'
        }
      `}
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {label}
    </button>
  );
});
