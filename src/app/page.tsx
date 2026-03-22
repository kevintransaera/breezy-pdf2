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

      {/* Why Breezy PDF — keyword-rich content for SEO */}
      <section className="border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl text-stone-900 tracking-tight mb-8">
            The free PDF editor that{' '}
            <em className="font-serif not-italic">respects your privacy</em>
          </h2>
          <div className="space-y-6 text-sm text-stone-500 leading-relaxed">
            <p>
              Most online PDF tools require you to upload your files to a remote server.
              That means your contracts, tax returns, medical records, and personal documents
              pass through someone else&apos;s infrastructure — often without clear data retention policies.
            </p>
            <p>
              Breezy PDF is different. Every tool runs entirely in your web browser using
              client-side JavaScript. Your files are processed locally on your device and are
              never transmitted over the internet. There are no accounts to create, no file
              size limits imposed by a server, and no waiting for uploads or downloads.
            </p>
            <p>
              Whether you need to <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-2">merge PDF files</Link>,{' '}
              <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-2">compress a PDF for email</Link>,{' '}
              <Link href="/split-pdf" className="text-stone-900 underline underline-offset-2">split a PDF into separate pages</Link>, or{' '}
              <Link href="/pdf-to-images" className="text-stone-900 underline underline-offset-2">convert a PDF to images</Link> —
              every operation is instant, free, and completely private.
            </p>
            <p>
              Breezy PDF supports all modern browsers on desktop and mobile. No software to
              install, no plugins required. Just open a tool, drop in your file, and get your
              result in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Blog preview — drives traffic to long-form content */}
      <section className="border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl text-stone-900 tracking-tight">
              From the <em className="font-serif not-italic">blog</em>
            </h2>
            <Link href="/blog" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
              All posts &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
            {[
              {
                href: '/blog/how-to-merge-pdf-files',
                title: 'How to Merge PDF Files Without Uploading Them',
                excerpt: 'Most PDF merge tools upload your files to remote servers. Here\'s a safer way.',
              },
              {
                href: '/blog/pdf-privacy-why-it-matters',
                title: 'PDF Privacy: Why It Matters More Than You Think',
                excerpt: 'What really happens when you upload a PDF to a free online tool?',
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group p-8 bg-stone-50 hover:bg-white transition-colors"
              >
                <h3 className="text-sm font-medium text-stone-900 group-hover:underline mb-2">{post.title}</h3>
                <p className="text-xs text-stone-400 leading-relaxed">{post.excerpt}</p>
              </Link>
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
