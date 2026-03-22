'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { tools } from '@/lib/tools';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200" aria-label="Main navigation">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 rounded-sm">
          <svg className="w-6 h-6 text-stone-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M7 21h10a2 2 0 002-2V9l-6-6H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            <path d="M13 3v6h6" />
          </svg>
          <span className="font-serif text-lg tracking-tight text-stone-900">Breezy PDF</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 rounded-sm flex items-center gap-1"
            >
              Tools
              <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {open && (
              <div className="absolute right-0 top-full mt-3 w-64 bg-white border border-stone-200 shadow-sm py-2">
                {tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-medium">{tool.name}</span>
                    <span className="block text-xs text-stone-400 mt-0.5">{tool.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/blog" className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 rounded-sm">
            Blog
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs tracking-wide text-stone-500 border border-stone-300 px-3 py-1.5 rounded-full">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Private by design
          </div>
        </div>
      </div>
    </nav>
  );
}
