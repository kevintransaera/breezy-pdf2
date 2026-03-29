import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Free PDF Tips & Guides',
  description:
    'Practical guides on working with PDFs privately and efficiently. Learn how to merge, compress, convert, and protect your PDF files without uploading them online.',
  keywords: [
    'pdf tips',
    'pdf guides',
    'how to merge pdf',
    'compress pdf guide',
    'pdf privacy',
    'convert images to pdf',
    'split pdf guide',
    'sign pdf online',
    'rotate pdf pages',
    'pdf to images',
    'add page numbers to pdf',
    'remove pages from pdf',
    'free pdf tools blog',
  ],
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    slug: 'how-to-remove-pages-from-pdf',
    title: 'How to Remove Pages From a PDF',
    date: '2026-03-28',
    excerpt:
      'Delete unwanted pages from any PDF — blank pages, confidential sections, or unnecessary cover sheets. Preview pages, select which to remove, and download the cleaned result privately.',
  },
  {
    slug: 'how-to-add-page-numbers-to-pdf',
    title: 'How to Add Page Numbers to a PDF',
    date: '2026-03-27',
    excerpt:
      'Page numbers are invisible until they are missing. Learn how to add sequential numbering to any PDF — choose position, starting number, and format — without paid software or uploads.',
  },
  {
    slug: 'how-to-convert-pdf-to-images',
    title: 'How to Convert a PDF to Images (PNG or JPG)',
    date: '2026-03-26',
    excerpt:
      'Need PDF pages as images for a presentation, website, or social media? Learn the difference between PNG and JPG, choose the right resolution, and convert entirely in your browser.',
  },
  {
    slug: 'how-to-rotate-pdf-pages',
    title: 'How to Rotate PDF Pages and Save the Result',
    date: '2026-03-25',
    excerpt:
      'Sideways scans and mixed orientations are a constant frustration. Learn how to permanently rotate PDF pages — not just the view — and save a corrected document in seconds.',
  },
  {
    slug: 'how-to-sign-a-pdf',
    title: 'How to Sign a PDF Without Printing It',
    date: '2026-03-24',
    excerpt:
      'Skip the print-sign-scan routine. Draw or upload your signature, place it on any page, and download the signed document — all in your browser, with no cloud uploads.',
  },
  {
    slug: 'how-to-split-a-pdf',
    title: 'How to Split a PDF Into Separate Pages',
    date: '2026-03-22',
    excerpt:
      'Extract specific pages, split by range, or break a large PDF into individual files. Browser-based splitting keeps your documents private and handles files of any size.',
  },
  {
    slug: 'how-to-merge-pdf-files',
    title: 'How to Merge PDF Files Without Uploading Them to the Internet',
    date: '2026-03-18',
    excerpt:
      'Cloud-based PDF tools require you to upload sensitive files to unknown servers. Learn how browser-based merging keeps your documents private while combining PDFs in seconds.',
  },
  {
    slug: 'compress-pdf-for-email',
    title: 'How to Compress a PDF for Email Attachments',
    date: '2026-03-15',
    excerpt:
      'Email attachment limits can be frustrating. Discover practical techniques for reducing PDF file size — from lossless compression to image optimization — so your documents always go through.',
  },
  {
    slug: 'pdf-privacy-why-it-matters',
    title: 'PDF Privacy: Why You Should Think Twice Before Uploading Files Online',
    date: '2026-03-12',
    excerpt:
      'Every time you upload a PDF to a free online tool, you hand over your data. Explore the real risks of cloud-based PDF processing and why client-side tools are the safer choice.',
  },
  {
    slug: 'convert-images-to-pdf',
    title: 'How to Convert Images to PDF: A Complete Guide',
    date: '2026-03-09',
    excerpt:
      'Whether you need to combine scanned documents or package photos for sharing, converting images to PDF is a common task. This guide covers formats, quality settings, and the fastest workflow.',
  },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://breezy-pdf.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://breezy-pdf.com/blog' },
  ],
};

export default function BlogPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-stone-900 leading-[1.1]">
            Tips &{' '}
            <em className="font-serif not-italic">Guides</em>
          </h1>
          <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed max-w-lg">
            Practical advice on working with PDFs — privately, efficiently, and without unnecessary complexity.
          </p>
        </div>
      </section>

      {/* Post list */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="border-t border-stone-200">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-stone-200 py-8 sm:py-10">
              <Link href={`/blog/${post.slug}`} className="group block">
                <time className="text-xs text-stone-400 tabular-nums">{post.date}</time>
                <h2 className="mt-2 text-lg sm:text-xl text-stone-900 tracking-tight group-hover:underline underline-offset-4 decoration-stone-300">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed max-w-xl">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-xs tracking-widest uppercase text-stone-400 group-hover:text-stone-900 transition-colors">
                  Read more &rarr;
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
