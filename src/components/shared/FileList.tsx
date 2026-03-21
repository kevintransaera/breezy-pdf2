'use client';

import { memo } from 'react';
import { formatFileSize } from '@/lib/utils/file-helpers';

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
  onMoveUp?: (index: number) => void;
  onMoveDown?: (index: number) => void;
  showOrder?: boolean;
}

export default memo(function FileList({ files, onRemove, onMoveUp, onMoveDown, showOrder = false }: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="w-full space-y-3">
      <p className="text-xs tracking-widest uppercase text-stone-500">
        {files.length} file{files.length !== 1 ? 's' : ''} selected
      </p>
      <ul className="divide-y divide-stone-200 border-y border-stone-200">
        {files.map((file, index) => (
          <li
            key={`${file.name}-${file.size}-${index}`}
            className="flex items-center gap-4 py-3"
          >
            {showOrder && (
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => onMoveUp?.(index)}
                  disabled={index === 0}
                  aria-label={`Move ${file.name} up`}
                  className="min-w-[44px] min-h-[22px] flex items-center justify-center text-stone-400 hover:text-stone-900 disabled:opacity-20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </button>
                <button
                  onClick={() => onMoveDown?.(index)}
                  disabled={index === files.length - 1}
                  aria-label={`Move ${file.name} down`}
                  className="min-w-[44px] min-h-[22px] flex items-center justify-center text-stone-400 hover:text-stone-900 disabled:opacity-20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            )}
            <span className="text-[10px] tracking-widest uppercase text-stone-500 font-medium w-8 flex-shrink-0" aria-hidden="true">PDF</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-stone-900 truncate">{file.name}</p>
            </div>
            <span className="text-xs text-stone-500 flex-shrink-0">{formatFileSize(file.size)}</span>
            <button
              onClick={() => onRemove(index)}
              aria-label={`Remove ${file.name}`}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
