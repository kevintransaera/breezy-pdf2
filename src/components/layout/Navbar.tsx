import Link from 'next/link';

export default function Navbar() {
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
          <Link href="/" className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 rounded-sm">
            Tools
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
