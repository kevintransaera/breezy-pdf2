import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Split a PDF Into Separate Pages — Free & Private',
  description:
    'Learn how to split a PDF into individual pages or extract specific page ranges. Free browser-based tool — your files never leave your device.',
  keywords: [
    'split pdf',
    'split pdf online free',
    'extract pages from pdf',
    'separate pdf pages',
    'split pdf into individual pages',
    'split pdf by page range',
  ],
  alternates: { canonical: '/blog/how-to-split-a-pdf' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Split a PDF Into Separate Pages',
  description:
    'Learn how to split a PDF into individual pages or extract specific page ranges without uploading your file.',
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
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
    '@id': 'https://breezy-pdf.com/blog/how-to-split-a-pdf',
  },
};

export default function HowToSplitAPdfPage() {
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
        <time className="text-xs text-stone-400 tabular-nums">2026-03-22</time>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight text-stone-900 leading-[1.15]">
          How to Split a PDF{' '}
          <em className="font-serif not-italic">Into Separate Pages</em>
        </h1>
      </header>

      <div className="prose-breezy">
        <p>
          PDFs are designed to keep documents intact. That is their strength — and their
          frustration. When you need just one chapter from a textbook, a handful of pages from a
          contract, or a single receipt from a bundled statement, the format works against you.
          There is no built-in way to pull pages out of a PDF the way you would tear a page from
          a notebook. You need a tool to split it.
        </p>

        <p>
          The reasons people split PDFs are varied but predictable. You might need to extract a
          signature page from a legal agreement. Teachers routinely split exam papers into
          per-student sections. Accountants extract individual invoices from consolidated monthly
          statements. File size is another common driver — a 200-page PDF with embedded images can
          easily exceed email attachment limits, and splitting it into smaller sections is often
          faster than compression.
        </p>

        <h2>The Problem With Cloud-Based PDF Splitters</h2>

        <p>
          Search for &quot;split PDF online&quot; and you will find dozens of tools that promise to do it
          for free. The workflow is always the same: upload your file, choose your split options,
          wait for the server to process it, then download the result. It works, but the
          convenience obscures what is actually happening to your document.
        </p>

        <p>
          When you upload a PDF to a cloud-based splitter, your file is transmitted to a remote
          server. That server reads every page of your document, processes it, and stores the
          result — often keeping copies for hours or days. Their privacy policies typically grant
          broad rights to process and store your content. For documents containing financial terms,
          medical records, tax filings, or confidential business reports, this is a real risk that
          most people take without thinking about it.
        </p>

        <p>
          Beyond privacy, cloud tools introduce friction. File size limits are common — many free
          tiers cap uploads at 10 or 25 megabytes. Processing queues can mean waiting minutes for
          a result. And the experience is typically cluttered with upsell prompts, account creation
          walls, and ads designed to look like download buttons.
        </p>

        <h2>How Browser-Based PDF Splitting Works</h2>

        <p>
          There is a better approach that eliminates the privacy problem entirely: processing the
          PDF in your browser, on your own device, with no upload step at all.
        </p>

        <p>
          Modern browsers can do far more than display web pages. Thanks to JavaScript libraries
          like <strong>pdf-lib</strong>, a browser can read a PDF file, parse its internal
          structure, extract specific pages, and assemble new PDF documents — all using your
          computer&apos;s processor and memory. The website delivers the tool (the code), but your
          file never travels over the network.
        </p>

        <p>
          This is called <strong>client-side processing</strong>. When you select a file in a
          browser-based PDF splitter, the tool reads it directly from your local filesystem
          into your browser&apos;s memory. It creates new PDF documents containing only the pages
          you selected. The output files are generated locally and offered as downloads. At no
          point does any data leave your machine.
        </p>

        <p>
          Because the processing happens locally, there are no arbitrary file size limits. Your
          only constraint is your device&apos;s available RAM, which comfortably handles PDFs of
          several hundred megabytes on any modern computer or phone. There is also no processing
          queue — the split starts the instant you click the button.
        </p>

        <h2>Step-by-Step: Split a PDF With Breezy PDF</h2>

        <p>
          <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Breezy PDF&apos;s split tool
          </Link>{' '}
          lets you extract pages from any PDF without uploading it anywhere. Here is how to use it:
        </p>

        <ol>
          <li>
            <strong>Open the split tool.</strong> Go to the{' '}
            <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Split PDF
            </Link>{' '}
            page. No account or signup required.
          </li>
          <li>
            <strong>Select your PDF.</strong> Click the upload area or drag and drop your file
            into the browser. The tool reads the file locally and displays a preview of each page.
          </li>
          <li>
            <strong>Choose which pages to extract.</strong> Select individual pages by clicking
            them, or specify a page range. You can pick a contiguous block (pages 5 through 12),
            a scattered selection (pages 1, 4, 7, and 15), or split the entire document into
            single-page files.
          </li>
          <li>
            <strong>Click Split.</strong> The tool assembles your new PDF instantly. No upload
            progress bar, no waiting on a remote server.
          </li>
          <li>
            <strong>Download your result.</strong> Save the extracted pages as a new PDF. Your
            original file is completely untouched.
          </li>
        </ol>

        <h2>Practical Tips for Splitting PDFs</h2>

        <p>
          <strong>Extracting a single page.</strong> This is the most common use case — a signature
          page, a particular chart, a single receipt. Select just that page and split. Rather than
          sending an entire document and hoping the recipient finds the right page, send exactly
          what they need.
        </p>

        <p>
          <strong>Splitting by page range.</strong> When you need a continuous section — say,
          chapter 4 of a book that spans pages 47 to 82 — select that range and split. This is
          common in academic and legal settings where you need to share a specific section without
          exposing the rest of the document.
        </p>

        <p>
          <strong>Splitting to reduce file size.</strong> If your goal is to get a large PDF under
          an email attachment limit, splitting is often more effective than compression. A 50-page
          document with high-resolution images might compress from 40 MB to 30 MB — still too
          large. But splitting it into two 25-page sections gives you files well within limits,
          with no quality loss. You can also combine splitting with{' '}
          <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            compression
          </Link>{' '}
          for even smaller files.
        </p>

        <p>
          <strong>Removing unwanted pages.</strong> If you need to remove pages 8 through 12 from
          a 20-page document, you can split out pages 1-7 and 13-20, then{' '}
          <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            merge them back together
          </Link>. Or use Breezy PDF&apos;s dedicated{' '}
          <Link href="/delete-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            delete pages tool
          </Link>{' '}
          to handle it in a single step.
        </p>

        <h2>The Bottom Line</h2>

        <p>
          Splitting a PDF should be simple, fast, and private. You should not have to create an
          account, wait in a processing queue, or upload sensitive documents to a stranger&apos;s server
          just to extract a few pages. Browser-based tools make this possible by doing all the work
          on your own device. The next time you need to pull pages out of a PDF, skip the cloud
          upload — your documents are your business.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-16 border-t border-stone-200 pt-10">
        <p className="text-stone-500 text-sm leading-relaxed">
          Ready to split your PDF privately?
        </p>
        <Link
          href="/split-pdf"
          className="inline-block mt-4 bg-stone-900 text-white text-sm px-6 py-3 hover:bg-stone-800 transition-colors"
        >
          Split PDF Files Now
        </Link>
      </div>
    </article>
  );
}
