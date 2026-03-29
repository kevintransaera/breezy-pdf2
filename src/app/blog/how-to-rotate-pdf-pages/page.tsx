import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Rotate PDF Pages and Save the Result — Free & Private',
  description:
    'Fix sideways or upside-down PDF pages in seconds. Rotate individual pages or the entire document — free, private, and entirely in your browser.',
  keywords: [
    'rotate pdf',
    'rotate pdf pages',
    'rotate pdf online free',
    'fix pdf orientation',
    'rotate pdf and save',
    'flip pdf pages',
  ],
  alternates: { canonical: '/blog/how-to-rotate-pdf-pages' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Rotate PDF Pages and Save the Result',
  description:
    'Fix sideways or upside-down PDF pages in seconds. Rotate individual pages or the entire document.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
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
    '@id': 'https://breezy-pdf.com/blog/how-to-rotate-pdf-pages',
  },
};

export default function HowToRotatePdfPagesPage() {
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
        <time className="text-xs text-stone-400 tabular-nums">2026-03-25</time>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight text-stone-900 leading-[1.15]">
          How to Rotate PDF Pages{' '}
          <em className="font-serif not-italic">and Save the Result</em>
        </h1>
      </header>

      <div className="prose-breezy">
        <p>
          Few things are more annoying than opening a PDF and finding half the pages sideways.
          It happens constantly with scanned documents — a page fed into the scanner at the wrong
          angle, a landscape table embedded in a portrait document, or a multi-page scan where the
          orientation flips unpredictably. The document is technically readable if you tilt your
          head, but sending it to someone else in that state is unprofessional at best.
        </p>

        <p>
          The problem also appears when combining documents from different sources. A report might
          have portrait text pages mixed with landscape charts. Presentation slides exported as PDF
          might be rotated 90 degrees. Legal filings sometimes include exhibits scanned at
          different orientations. The content is fine — the orientation just needs fixing.
        </p>

        <h2>Rotating the View vs. Rotating the Page</h2>

        <p>
          Most PDF viewers — including Preview on Mac, the Edge browser, and Chrome&apos;s built-in PDF
          reader — let you rotate the view of a page. This changes how the page appears on your
          screen, but it does not change the actual file. When you close and reopen the document,
          the rotation resets. If you share the file with someone else, they see the original
          (wrong) orientation.
        </p>

        <p>
          What you actually need is to rotate the page within the PDF file itself and save the
          result as a new document. This is a permanent change — the rotation becomes part of the
          file&apos;s structure. Anyone who opens the modified PDF will see the corrected orientation
          regardless of which viewer they use.
        </p>

        <p>
          The distinction matters because people frequently &quot;rotate&quot; a page in their viewer,
          assume the problem is fixed, and send the file — only to hear back that the pages are
          still sideways. A proper rotation tool modifies the PDF&apos;s internal page definitions,
          not just the display settings of your current viewer session.
        </p>

        <h2>Why PDF Orientation Goes Wrong</h2>

        <p>
          Understanding why pages end up rotated helps you fix them efficiently. The most common
          causes are:
        </p>

        <ul>
          <li>
            <strong>Scanner orientation.</strong> Flatbed and sheet-fed scanners sometimes produce
            pages rotated 90 or 180 degrees, especially when scanning mixed page sizes or when
            pages are fed in different orientations.
          </li>
          <li>
            <strong>Mobile scanning apps.</strong> Phone-based document scanners rely on the
            phone&apos;s orientation sensor and do not always get it right, particularly with
            landscape-format documents.
          </li>
          <li>
            <strong>Mixed content.</strong> Documents that combine portrait text with landscape
            tables or charts often have inconsistent orientation when exported or merged.
          </li>
          <li>
            <strong>Export errors.</strong> Some applications produce PDFs with unexpected rotation
            values, particularly when converting from PowerPoint, CAD drawings, or image formats.
          </li>
        </ul>

        <h2>The Paid Software Approach</h2>

        <p>
          Adobe Acrobat Pro — the industry standard PDF editor — can rotate pages and save the
          result. But it costs $20 per month or more. For something as simple as fixing page
          orientation, a subscription to professional editing software is hard to justify. You
          might use the feature once every few weeks.
        </p>

        <p>
          Free alternatives like cloud-based rotation tools work, but they require uploading your
          document to a remote server. For a scanned contract, financial statement, or medical
          form, that means trusting a third party with your data just to fix which direction the
          pages face. The privacy tradeoff is disproportionate to the simplicity of the task.
        </p>

        <h2>How Browser-Based PDF Rotation Works</h2>

        <p>
          Every page in a PDF has a <strong>Rotate</strong> property — a numerical value
          (0, 90, 180, or 270) that tells viewers how to display the page. When you rotate a page
          in a browser-based tool, the tool modifies this property in the PDF&apos;s internal
          structure. The page content itself does not change — only the instruction for how to
          render it.
        </p>

        <p>
          JavaScript libraries like <strong>pdf-lib</strong> make this possible entirely in the
          browser. The tool loads your PDF locally, lets you adjust rotation values for individual
          pages, and writes a new PDF with the updated properties. No server involved, no upload,
          no waiting. The processing is nearly instantaneous because modifying a rotation property
          is one of the simplest operations you can perform on a PDF.
        </p>

        <h2>Step-by-Step: Rotate PDF Pages With Breezy PDF</h2>

        <p>
          <Link href="/rotate-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Breezy PDF&apos;s rotate tool
          </Link>{' '}
          lets you fix page orientation without uploading your document. Here is the process:
        </p>

        <ol>
          <li>
            <strong>Open the rotate tool.</strong> Go to the{' '}
            <Link href="/rotate-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Rotate PDF
            </Link>{' '}
            page. No account needed.
          </li>
          <li>
            <strong>Add your PDF.</strong> Drop your file into the browser or click to select it.
            The tool loads the document locally and shows page previews.
          </li>
          <li>
            <strong>Rotate individual pages or all pages.</strong> Click the rotation control on
            any page to rotate it 90 degrees clockwise. Click again for 180 or 270 degrees. You
            can also rotate all pages at once if the entire document is oriented incorrectly.
          </li>
          <li>
            <strong>Download the corrected PDF.</strong> Click the download button. The tool writes
            a new PDF with the corrected orientations. Your original file is untouched.
          </li>
        </ol>

        <p>
          The entire process takes seconds. Because the rotation modifies only a small property
          in each page definition, even large documents are processed almost instantly.
        </p>

        <h2>Tips for Rotating PDFs</h2>

        <p>
          <strong>Check every page before saving.</strong> In a multi-page document, it is common
          for only some pages to be rotated incorrectly. Scroll through the previews and rotate
          only the pages that need it. Rotating a page that is already correct will make it wrong.
        </p>

        <p>
          <strong>Know your angles.</strong> 90 degrees clockwise fixes a page that is turned on
          its left side. 270 degrees (or 90 counterclockwise) fixes a page turned on its right
          side. 180 degrees fixes an upside-down page. If you are unsure, click once and see if
          the preview looks correct — if not, click again.
        </p>

        <p>
          <strong>Handle mixed-orientation documents.</strong> If you have a document with both
          portrait and landscape pages, and you want all pages to be portrait, you will need to
          rotate only the landscape pages. Be careful not to rotate pages that are intentionally
          landscape — wide tables or charts may be designed to be viewed that way.
        </p>

        <p>
          After fixing orientation, you might want to{' '}
          <Link href="/reorder-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            reorder pages
          </Link>{' '}
          or{' '}
          <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            merge
          </Link>{' '}
          the corrected document with other files. If you are preparing a document from scanned
          pages,{' '}
          <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            splitting
          </Link>{' '}
          can help you separate sections before or after rotation.
        </p>

        <h2>The Bottom Line</h2>

        <p>
          Fixing rotated PDF pages is one of the simplest document tasks — and it should not
          require paid software or uploading your files to a remote server. Browser-based tools
          modify the page rotation property directly, producing a permanently corrected file in
          seconds. The next time a scanned document comes in sideways, fix it locally and move on.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-16 border-t border-stone-200 pt-10">
        <p className="text-stone-500 text-sm leading-relaxed">
          Need to fix rotated PDF pages?
        </p>
        <Link
          href="/rotate-pdf"
          className="inline-block mt-4 bg-stone-900 text-white text-sm px-6 py-3 hover:bg-stone-800 transition-colors"
        >
          Rotate PDF Pages Now
        </Link>
      </div>
    </article>
  );
}
