import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Compress a PDF for Email Attachments',
  description:
    'Learn practical techniques to reduce PDF file size for email. Understand lossless vs lossy compression and get your attachments under the size limit every time.',
  keywords: [
    'compress pdf for email',
    'reduce pdf file size',
    'pdf too large for email',
    'shrink pdf',
    'compress pdf online free',
    'pdf compressor',
  ],
  alternates: { canonical: '/blog/compress-pdf-for-email' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Compress a PDF for Email Attachments',
  description:
    'Learn practical techniques to reduce PDF file size for email. Understand lossless vs lossy compression.',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  author: {
    '@type': 'Organization',
    name: 'Breezy PDF',
    url: 'https://breezy-pdf.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Breezy PDF',
    url: 'https://breezy-pdf.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://breezy-pdf.com/blog/compress-pdf-for-email',
  },
};

export default function CompressPdfForEmailPage() {
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 transition-colors mb-8 sm:mb-12"
      >
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      <header className="mb-10">
        <time className="text-xs text-stone-400 tabular-nums">2026-03-15</time>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight text-stone-900 leading-[1.15]">
          How to Compress a PDF{' '}
          <em className="font-serif not-italic">for Email Attachments</em>
        </h1>
      </header>

      <div className="prose-breezy">
        <p>
          You have a PDF ready to send, but your email client rejects it. The file is too large.
          Gmail caps attachments at 25 MB. Outlook limits you to 20 MB. Many corporate mail
          servers set even stricter thresholds. When a PDF exceeds these limits, you need to
          reduce its file size — and you need to do it without destroying the document's content
          or readability.
        </p>

        <h2>Why PDFs Become So Large</h2>

        <p>
          PDF files can grow unexpectedly large for several reasons. The most common culprit is
          embedded images. A single high-resolution photograph can add several megabytes to a
          document. Scanned documents are particularly heavy because each page is essentially a
          full-page image at print resolution (300 DPI or higher).
        </p>

        <p>
          Embedded fonts also contribute to file size. When a PDF embeds complete font families
          rather than subsets, it carries weight that most viewers never need. Additionally, PDFs
          created by certain applications include redundant metadata, duplicate objects, and
          unoptimized content streams that inflate the file without adding visible value.
        </p>

        <p>
          Understanding what makes your PDF large helps you choose the right compression approach.
          A text-heavy report with a few charts will respond differently to compression than a
          photo album exported as PDF.
        </p>

        <h2>Lossless vs. Lossy Compression</h2>

        <p>
          PDF compression comes in two flavors, and the distinction matters.
        </p>

        <p>
          <strong>Lossless compression</strong> reduces file size without changing the document's
          content in any way. It works by removing redundant data structures, deduplicating
          repeated objects, and applying more efficient encoding to content streams. The result is
          a smaller file that is bit-for-bit identical in appearance to the original. Lossless
          compression typically achieves modest size reductions — anywhere from 10% to 40%
          depending on how well the original was optimized.
        </p>

        <p>
          <strong>Lossy compression</strong> goes further by reducing the quality of embedded
          images. It downsamples high-resolution images to a lower DPI and applies JPEG
          compression with adjustable quality settings. This can dramatically reduce file size —
          50% to 80% or more — but at the cost of some visual fidelity. For most business
          documents, the quality difference is imperceptible. For photography or detailed
          technical diagrams, you may want to be more conservative with the quality setting.
        </p>

        <p>
          The best approach depends on your situation. If you need the PDF to look exactly like
          the original, start with lossless. If you need aggressive size reduction and the
          document is image-heavy, lossy compression will get you there.
        </p>

        <h2>Step-by-Step: Compress a PDF With Breezy PDF</h2>

        <p>
          <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Breezy PDF's compress tool
          </Link>{' '}
          runs entirely in your browser, so your document stays private throughout the process.
          Here is how to use it:
        </p>

        <ol>
          <li>
            <strong>Open the compression tool.</strong> Go to the{' '}
            <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Compress PDF
            </Link>{' '}
            page. No account or login is required.
          </li>
          <li>
            <strong>Upload your PDF.</strong> Click the upload area or drag your file into the
            browser. The file loads locally — nothing is sent to a server.
          </li>
          <li>
            <strong>Choose your compression mode.</strong> Select lossless for quality-preserving
            compression, or lossy for maximum file size reduction. If you choose lossy, adjust
            the quality slider to balance size and appearance.
          </li>
          <li>
            <strong>Click Compress.</strong> The tool processes your file instantly on your device.
            You will see the original and compressed file sizes so you can judge the improvement.
          </li>
          <li>
            <strong>Download the result.</strong> Save the compressed PDF and attach it to your
            email.
          </li>
        </ol>

        <h2>Practical Tips for Smaller PDFs</h2>

        <p>
          Beyond using a compression tool, there are habits that help keep PDFs small from the
          start:
        </p>

        <ul>
          <li>
            <strong>Scan at appropriate resolution.</strong> For text documents, 150-200 DPI is
            sufficient. Only use 300+ DPI when you need archival quality or will be printing at
            large scale.
          </li>
          <li>
            <strong>Use PDF export settings wisely.</strong> When exporting from Word, PowerPoint,
            or design tools, look for a "web" or "small file size" preset. These downsample
            images during export rather than embedding full-resolution versions.
          </li>
          <li>
            <strong>Remove unnecessary pages.</strong> If your PDF has pages the recipient does
            not need, use a{' '}
            <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              PDF splitting tool
            </Link>{' '}
            to extract only the relevant pages before compressing.
          </li>
          <li>
            <strong>Avoid re-saving repeatedly.</strong> Each save cycle through some applications
            can add overhead. Work from the original source file when possible.
          </li>
        </ul>

        <h2>Common Email Attachment Limits</h2>

        <p>
          Knowing the limits helps you set a target file size before compressing:
        </p>

        <ul>
          <li><strong>Gmail:</strong> 25 MB per email (total, across all attachments)</li>
          <li><strong>Outlook.com:</strong> 20 MB</li>
          <li><strong>Yahoo Mail:</strong> 25 MB</li>
          <li><strong>Apple iCloud Mail:</strong> 20 MB (with Mail Drop for larger files)</li>
          <li><strong>Corporate Exchange servers:</strong> Often 10-15 MB, varies by organization</li>
        </ul>

        <p>
          If your compressed PDF still exceeds the limit, consider splitting it into smaller parts
          and sending multiple emails, or using your email provider's file sharing integration
          (like Google Drive or OneDrive links).
        </p>

        <h2>Why Compress Locally Instead of Online?</h2>

        <p>
          Cloud-based compression tools require you to upload your file to a third-party server.
          For sensitive documents — financial records, contracts, medical forms — this introduces
          unnecessary risk. A browser-based tool like Breezy PDF processes everything on your
          device. Your file never touches the internet. This is not just a privacy nicety; for
          professionals handling confidential information, it is a practical requirement. Read more
          about{' '}
          <Link href="/blog/pdf-privacy-why-it-matters" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            why PDF privacy matters
          </Link>{' '}
          in our companion article.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-16 border-t border-stone-200 pt-10">
        <p className="text-stone-500 text-sm leading-relaxed">
          Need to shrink a PDF for email right now?
        </p>
        <Link
          href="/compress-pdf"
          className="inline-block mt-4 bg-stone-900 text-white text-sm px-6 py-3 hover:bg-stone-800 transition-colors"
        >
          Compress a PDF Now
        </Link>
      </div>
    </article>
  );
}
