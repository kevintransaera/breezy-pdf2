import Link from 'next/link';
import { tools } from '@/lib/tools';
import ToolIcon from '@/components/shared/ToolIcon';
import AdUnit from '@/components/ads/AdUnit';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Breezy PDF',
  url: 'https://breezy-pdf.com',
  description:
    'Free online PDF tools that work entirely in your browser. Merge, split, compress, convert, rotate, and more. Your files never leave your device.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Merge PDF files',
    'Split PDF documents',
    'Compress PDF files',
    'Convert PDF to images',
    'Convert images to PDF',
    'Rotate PDF pages',
    'Add page numbers',
    'Reorder PDF pages',
  ],
  browserRequirements: 'Requires a modern web browser with JavaScript enabled',
};

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight text-stone-900 leading-[1.05]">
            Every PDF tool you need,{' '}
            <em className="font-serif not-italic">entirely private</em>
          </h1>
          <p className="mt-4 sm:mt-6 text-stone-500 text-sm sm:text-base leading-relaxed max-w-lg">
            Free browser-based tools for merging, splitting, compressing, and converting PDFs.
            Your files never leave your device.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="/merge-pdf" className="btn-primary">
              Get Started
            </Link>
            <a href="#tools" className="btn-secondary">
              View All Tools
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-3">
          {[
            { icon: 'lock', text: 'No server uploads' },
            { icon: 'zap', text: 'Instant processing' },
            { icon: 'user', text: 'No account required' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs tracking-wide text-stone-400">
              {item.icon === 'lock' && (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              )}
              {item.icon === 'zap' && (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              )}
              {item.icon === 'user' && (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              )}
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* Tool Grid */}
      <section id="tools" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight">
            Everything you need{' '}
            <em className="font-serif not-italic">to work with PDFs</em>
          </h2>
          <p className="mt-3 text-sm text-stone-400">
            Powerful tools, beautifully simple. All running locally in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="group flex flex-col p-8 bg-stone-50 hover:bg-white transition-colors duration-300"
            >
              <div className="text-stone-400 group-hover:text-stone-900 transition-colors duration-300 mb-6">
                <ToolIcon name={tool.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-medium text-stone-900 mb-1">{tool.name}</h3>
              <p className="text-xs text-stone-400 leading-relaxed">{tool.description}</p>
              <div className="mt-auto pt-6">
                <span className="text-xs text-stone-300 group-hover:text-stone-900 transition-colors duration-300">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16">
            {[
              {
                step: '01',
                title: 'Choose a tool',
                description: 'Select from our collection of PDF tools above.',
              },
              {
                step: '02',
                title: 'Add your files',
                description: 'Drag and drop files directly into your browser.',
              },
              {
                step: '03',
                title: 'Download the result',
                description: 'Get your processed file instantly. No waiting.',
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-xs text-stone-300 tabular-nums">{item.step}</span>
                <h3 className="text-stone-900 font-medium mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom ad */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <AdUnit slot="home-bottom" format="horizontal" className="w-full max-w-[728px] mx-auto h-[90px]" />
      </section>
    </div>
  );
}
