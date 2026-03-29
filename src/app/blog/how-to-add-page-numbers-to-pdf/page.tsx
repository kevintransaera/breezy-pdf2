import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Add Page Numbers to a PDF — Free & Private',
  description:
    'Add page numbers to any PDF document for free. Choose position, format, and starting number — all processing happens in your browser with no uploads.',
  keywords: [
    'add page numbers to pdf',
    'pdf page numbering',
    'number pdf pages',
    'add page numbers to pdf free',
    'insert page numbers pdf',
    'pdf page numbers online',
  ],
  alternates: { canonical: '/blog/how-to-add-page-numbers-to-pdf' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Add Page Numbers to a PDF',
  description:
    'Add page numbers to any PDF document. Choose position, format, and starting number — all in your browser.',
  datePublished: '2026-03-27',
  dateModified: '2026-03-27',
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
    '@id': 'https://breezy-pdf.com/blog/how-to-add-page-numbers-to-pdf',
  },
};

export default function HowToAddPageNumbersToPdfPage() {
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
        <time className="text-xs text-stone-400 tabular-nums">2026-03-27</time>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight text-stone-900 leading-[1.15]">
          How to Add Page Numbers{' '}
          <em className="font-serif not-italic">to a PDF</em>
        </h1>
      </header>

      <div className="prose-breezy">
        <p>
          A PDF without page numbers is a document waiting to cause confusion. It might look fine
          on screen, but the moment someone prints it and the pages scatter, or a colleague
          references &quot;the table on page 12&quot; and there are no page numbers to find it, the lack
          becomes a real problem. Page numbers are one of those invisible features that you only
          notice when they are missing.
        </p>

        <p>
          The need comes up in predictable situations. You merged several PDFs together and the
          original numbering is gone or inconsistent. You scanned a physical document and the
          resulting PDF has no numbers at all. You are preparing a document for a legal filing or
          academic submission that requires sequential page numbering. You are printing a manual
          or handbook and need numbers for the table of contents to work.
        </p>

        <h2>When Page Numbers Matter Most</h2>

        <p>
          <strong>Legal documents.</strong> Courts and regulatory bodies routinely require page-
          numbered filings. A brief, exhibit package, or discovery document without page numbers
          may be rejected or, worse, misread. When opposing counsel cites &quot;page 47 of the
          exhibit,&quot; everyone needs to be looking at the same page 47.
        </p>

        <p>
          <strong>Academic submissions.</strong> Dissertations, theses, and research papers
          typically require specific page numbering formats — often Roman numerals for front
          matter and Arabic numerals for the body. PDFs exported from word processors usually
          have this built in, but scanned or merged documents often do not.
        </p>

        <p>
          <strong>Printed materials.</strong> Any document that will be printed and physically
          handled — training manuals, user guides, meeting packets — needs page numbers. Without
          them, reassembling dropped or shuffled pages becomes a guessing game.
        </p>

        <p>
          <strong>Merged documents.</strong> When you{' '}
          <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            combine multiple PDFs
          </Link>{' '}
          into one, the original page numbers from each source document may conflict or disappear.
          Adding new sequential numbers to the merged result creates a consistent reference system.
        </p>

        <h2>Positioning Options</h2>

        <p>
          Where you place page numbers affects both readability and professionalism. The standard
          options are:
        </p>

        <ul>
          <li>
            <strong>Bottom center</strong> — the most common placement. Unobtrusive, easy to find,
            and works with any document layout. This is the safe default for most use cases.
          </li>
          <li>
            <strong>Bottom right</strong> — common in business documents. Easy to spot when
            flipping through a printed document because your thumb naturally rests on the bottom
            corner.
          </li>
          <li>
            <strong>Bottom left</strong> — less common but used in some academic and legal
            formatting styles where the left margin is wider.
          </li>
          <li>
            <strong>Top positions</strong> — less conventional for page numbers alone, but useful
            when the bottom of the page is already occupied by footnotes or other content.
          </li>
        </ul>

        <h2>Why Not Just Use Adobe Acrobat?</h2>

        <p>
          Adobe Acrobat Pro can add page numbers, along with headers, footers, and Bates numbering.
          But it costs $20 or more per month. If adding page numbers is something you do
          occasionally — which it is for most people — a monthly subscription for professional PDF
          editing software is overkill.
        </p>

        <p>
          Free cloud-based tools can add page numbers, but they require uploading your document to
          a remote server. For a legal filing, a financial report, or any document containing
          sensitive information, this means trusting a third party with your data for a task that
          should be trivially simple. The document you are numbering might be confidential — the
          act of adding numbers to it should not compromise that confidentiality.
        </p>

        <h2>How Browser-Based Page Numbering Works</h2>

        <p>
          Adding page numbers to a PDF is conceptually simple: draw a text string (the page number)
          at a specific position on each page. Libraries like <strong>pdf-lib</strong> make this
          possible entirely in the browser. The tool loads your PDF, iterates through each page,
          calculates the correct position based on your chosen placement, and draws the number
          using an embedded font. The result is a new PDF with numbers permanently part of the
          page content.
        </p>

        <p>
          Because this happens entirely in JavaScript running in your browser, your document never
          leaves your device. The tool is delivered as code; your data stays local.
        </p>

        <h2>Step-by-Step: Add Page Numbers With Breezy PDF</h2>

        <p>
          <Link href="/add-page-numbers" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Breezy PDF&apos;s page number tool
          </Link>{' '}
          adds numbers to any PDF without uploading it. Here is how:
        </p>

        <ol>
          <li>
            <strong>Open the tool.</strong> Go to the{' '}
            <Link href="/add-page-numbers" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Add Page Numbers
            </Link>{' '}
            page. No account needed.
          </li>
          <li>
            <strong>Add your PDF.</strong> Drop your file into the browser or click to upload.
            The document loads locally.
          </li>
          <li>
            <strong>Choose your options.</strong> Select the position (bottom center, bottom right,
            etc.) and the starting page number. If your document has a title page that should not
            be numbered, you can start numbering from page 2.
          </li>
          <li>
            <strong>Apply and download.</strong> The tool adds numbers to every page and generates
            your updated PDF. Download it instantly.
          </li>
        </ol>

        <h2>Tips for Page Numbering</h2>

        <p>
          <strong>Skip the title page.</strong> Most professional documents leave the first page
          (the cover or title page) unnumbered. If your tool supports a starting page option, set
          it to begin numbering on page 2 — or start the count at page 2 so the first numbered
          page displays &quot;2&quot; rather than &quot;1.&quot;
        </p>

        <p>
          <strong>Number after merging, not before.</strong> If you are combining multiple
          documents, add page numbers as the final step. Numbering individual documents first and
          then merging will produce overlapping or inconsistent numbers.{' '}
          <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Merge first
          </Link>, then number the combined result.
        </p>

        <p>
          <strong>Consider your margins.</strong> Page numbers need enough margin space to be
          visible without overlapping the main content. Most tools place numbers in the standard
          margin area, but if your document has unusually narrow margins, check that the numbers
          are not colliding with the body text.
        </p>

        <p>
          After numbering, you might want to{' '}
          <Link href="/reorder-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            reorder pages
          </Link>{' '}
          or{' '}
          <Link href="/add-watermark" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            add a watermark
          </Link>{' '}
          like &quot;DRAFT&quot; or &quot;CONFIDENTIAL&quot; to mark the document&apos;s status. Both tools work the
          same way — entirely in your browser, with no file uploads.
        </p>

        <h2>The Bottom Line</h2>

        <p>
          Page numbers are a small detail that makes a big difference in document usability. Whether
          you are preparing a legal filing, printing a manual, or just making a merged PDF easier
          to navigate, adding page numbers should be fast and private. Browser-based tools handle
          it in seconds without requiring paid software or trusting your document to a remote
          server.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-16 border-t border-stone-200 pt-10">
        <p className="text-stone-500 text-sm leading-relaxed">
          Need to add page numbers to your PDF?
        </p>
        <Link
          href="/add-page-numbers"
          className="inline-block mt-4 bg-stone-900 text-white text-sm px-6 py-3 hover:bg-stone-800 transition-colors"
        >
          Add Page Numbers Now
        </Link>
      </div>
    </article>
  );
}
