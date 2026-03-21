import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
          <div className="space-y-1">
            <p className="font-serif text-sm text-stone-900">Breezy PDF</p>
            <p className="text-xs text-stone-500">
              All processing happens in your browser. Your files never leave your device.
            </p>
          </div>
          <div className="flex items-center gap-4 sm:gap-8 text-xs tracking-widest uppercase text-stone-500">
            <Link href="/privacy" className="hover:text-stone-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-stone-900 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
