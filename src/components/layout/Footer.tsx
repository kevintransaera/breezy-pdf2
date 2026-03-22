import Link from 'next/link';
import { tools } from '@/lib/tools';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xs tracking-widest uppercase text-stone-900 mb-4">Tools</h3>
            <ul className="space-y-2">
              {tools.slice(0, 4).map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/${tool.slug}`} className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-stone-900 mb-4">More Tools</h3>
            <ul className="space-y-2">
              {tools.slice(4).map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/${tool.slug}`} className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-stone-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-merge-pdf-files" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                  How to Merge PDFs
                </Link>
              </li>
              <li>
                <Link href="/blog/compress-pdf-for-email" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                  Compress PDF for Email
                </Link>
              </li>
              <li>
                <Link href="/blog/pdf-privacy-why-it-matters" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                  PDF Privacy Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase text-stone-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="space-y-1">
            <p className="font-serif text-sm text-stone-900">Breezy PDF</p>
            <p className="text-xs text-stone-400">
              Free, private PDF tools. All processing happens in your browser.
            </p>
          </div>
          <p className="text-xs text-stone-300">
            &copy; {new Date().getFullYear()} Breezy PDF
          </p>
        </div>
      </div>
    </footer>
  );
}
