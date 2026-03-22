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
    'free pdf tools blog',
  ],
  alternates: { canonical: '/blog' },
};

const posts = [
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

export default function BlogPage() {
  return (
    <div>
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
