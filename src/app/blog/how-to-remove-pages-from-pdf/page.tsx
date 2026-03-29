import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Remove Pages From a PDF — Free & Private',
  description:
    'Delete unwanted pages from any PDF for free. Preview pages, select which to remove, and download the result — all in your browser. No upload required.',
  keywords: [
    'delete pages from pdf',
    'remove pages from pdf',
    'remove pdf pages online free',
    'delete pdf pages',
    'remove page from pdf',
    'pdf page remover',
  ],
  alternates: { canonical: '/blog/how-to-remove-pages-from-pdf' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Remove Pages From a PDF',
  description:
    'Delete unwanted pages from any PDF. Preview pages, select which to remove, and download — all in your browser.',
  datePublished: '2026-03-28',
  dateModified: '2026-03-28',
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
    '@id': 'https://breezy-pdf.com/blog/how-to-remove-pages-from-pdf',
  },
};

export default function HowToRemovePagesFromPdfPage() {
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
        <time className="text-xs text-stone-400 tabular-nums">2026-03-28</time>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight text-stone-900 leading-[1.15]">
          How to Remove Pages{' '}
          <em className="font-serif not-italic">From a PDF</em>
        </h1>
      </header>

      <div className="prose-breezy">
        <p>
          You have a PDF with 30 pages, but you only need to share 25 of them. Maybe there are
          blank pages that a scanner inserted. Maybe the first three pages are a cover sheet and
          table of contents that are irrelevant to the recipient. Maybe page 14 contains
          confidential information that should not be in the version you distribute. Whatever the
          reason, you need to remove pages from a PDF — and the format does not make it easy.
        </p>

        <p>
          Unlike a Word document where you can simply select text and hit delete, PDFs are not
          designed for casual editing. Most PDF viewers are exactly that — viewers. They let you
          read the document and maybe annotate it, but they do not let you modify its structure.
          Removing a page requires a tool that can rewrite the PDF&apos;s internal structure to
          exclude the unwanted pages.
        </p>

        <h2>Common Scenarios for Removing PDF Pages</h2>

        <p>
          <strong>Removing blank pages.</strong> Scanners frequently insert blank pages,
          especially when scanning double-sided documents. A 20-page original becomes 40 pages
          with every other page blank. Removing the blanks cuts the file size in half and makes
          the document far easier to read.
        </p>

        <p>
          <strong>Removing confidential content before sharing.</strong> A financial report might
          contain salary information on certain pages that should not be shared with the full team.
          A legal document might include privileged sections that need to be excluded from a filing.
          Rather than redacting individual lines, removing entire pages is sometimes the cleanest
          approach.
        </p>

        <p>
          <strong>Removing cover pages and boilerplate.</strong> Reports from automated systems
          often include cover pages, disclaimers, or appendices that the recipient does not need.
          Stripping these out before forwarding makes the document more focused and professional.
        </p>

        <p>
          <strong>Cleaning up merged documents.</strong> After{' '}
          <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            merging multiple PDFs
          </Link>, you might discover duplicate pages, unwanted separators, or sections from one
          document that do not belong in the combined result. Removing those pages cleans up the
          final product.
        </p>

        <h2>Why Most PDF Viewers Cannot Delete Pages</h2>

        <p>
          PDF stands for Portable Document Format — the emphasis is on portability and consistency,
          not editability. The format was designed so that a document looks the same on every
          device, every operating system, and every printer. Editing was an afterthought.
        </p>

        <p>
          Internally, a PDF is a structured binary file. Each page is defined by a page object
          that references its content streams, fonts, images, and annotations. These objects are
          indexed in a cross-reference table that maps them to byte positions in the file. Removing
          a page means removing its page object, updating the cross-reference table, adjusting the
          page tree structure, and rewriting the file. It is not as simple as deleting a paragraph
          in a word processor.
        </p>

        <p>
          This is why Adobe Acrobat Pro charges $20 or more per month for the privilege. And it
          is why free viewers like Preview, Chrome, and Edge cannot do it (Preview on Mac can
          delete pages in some cases, but the implementation is inconsistent and sometimes corrupts
          the file).
        </p>

        <h2>The Privacy Cost of Cloud-Based Page Removal</h2>

        <p>
          The irony of cloud-based PDF tools is sharp when it comes to page removal. The most
          common reason to remove pages is to exclude sensitive or confidential content. But to
          use a cloud-based tool, you must upload the entire document — including the pages you
          are trying to remove — to a third-party server.
        </p>

        <p>
          Think about that: to remove confidential pages from a document before sharing it, you
          first share the complete document with an unknown service provider. Their privacy
          policies typically grant broad rights to process and temporarily store your content.
          You are trusting them with the very information you are trying to protect.
        </p>

        <p>
          This is where browser-based tools offer a genuine advantage. The document never leaves
          your device. The pages you want to remove are never transmitted anywhere. The output —
          the cleaned document — is the only file that exists after the operation.
        </p>

        <h2>How Browser-Based Page Deletion Works</h2>

        <p>
          JavaScript libraries like <strong>pdf-lib</strong> can parse the internal structure of
          a PDF, identify individual page objects, and create a new PDF that includes only the
          pages you want to keep. The process happens entirely in your browser&apos;s memory:
        </p>

        <ol>
          <li>The tool loads your PDF file into browser memory from your local filesystem.</li>
          <li>It parses the page tree to identify each page and render previews.</li>
          <li>You select which pages to remove.</li>
          <li>The tool creates a new PDF containing only the retained pages, with a valid
            cross-reference table and page tree.</li>
          <li>The new file is offered as a download. Your original file is unchanged.</li>
        </ol>

        <p>
          Because the processing is local, there are no file size limits beyond your device&apos;s
          available memory. There is no upload time, no processing queue, and no need for an
          internet connection once the page has loaded.
        </p>

        <h2>Step-by-Step: Remove Pages With Breezy PDF</h2>

        <p>
          <Link href="/delete-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Breezy PDF&apos;s delete pages tool
          </Link>{' '}
          lets you remove unwanted pages without uploading your document. Here is the process:
        </p>

        <ol>
          <li>
            <strong>Open the tool.</strong> Go to the{' '}
            <Link href="/delete-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Delete Pages
            </Link>{' '}
            page. No account or signup required.
          </li>
          <li>
            <strong>Add your PDF.</strong> Drop your file into the browser or click to select it.
            The tool loads the document locally and displays page-by-page previews.
          </li>
          <li>
            <strong>Select pages to remove.</strong> Click on the pages you want to delete. They
            will be visually marked for removal. You can select multiple pages — consecutive or
            non-consecutive.
          </li>
          <li>
            <strong>Confirm and download.</strong> Click the action button. The tool creates a new
            PDF without the selected pages and offers it for download. Your original file remains
            untouched.
          </li>
        </ol>

        <h2>Tips for Removing PDF Pages</h2>

        <p>
          <strong>Preview carefully before deleting.</strong> Double-check the page previews to
          make sure you are removing the right pages. Page numbers in the tool may not match the
          numbers printed on the document if the PDF starts numbering from a page other than 1.
          Always rely on the visual preview, not the page number alone.
        </p>

        <p>
          <strong>Keep a backup.</strong> The delete operation creates a new file and leaves your
          original intact. But if you are working with a critical document, make sure you have the
          original saved in a known location before you start. It is easy to accidentally
          overwrite the original when downloading the modified version.
        </p>

        <p>
          <strong>Consider alternatives for complex removals.</strong> If you need to remove
          content from within a page (not the entire page), page deletion is not the right tool —
          you would need redaction instead. If you need to remove pages and rearrange the
          remainder, consider using the{' '}
          <Link href="/reorder-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            reorder pages tool
          </Link>{' '}
          or the{' '}
          <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            split tool
          </Link>{' '}
          combined with{' '}
          <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            merge
          </Link>{' '}
          for more control over the final document structure.
        </p>

        <h2>The Bottom Line</h2>

        <p>
          Removing pages from a PDF is one of the most common document tasks, yet most PDF viewers
          cannot do it. Paid software handles it but is overkill for occasional use. Cloud tools
          handle it but require uploading your entire document — including the sensitive pages you
          are trying to remove. Browser-based tools solve the problem cleanly: your document stays
          on your device, the unwanted pages are excluded locally, and the result downloads in
          seconds.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-16 border-t border-stone-200 pt-10">
        <p className="text-stone-500 text-sm leading-relaxed">
          Need to remove pages from a PDF?
        </p>
        <Link
          href="/delete-pages"
          className="inline-block mt-4 bg-stone-900 text-white text-sm px-6 py-3 hover:bg-stone-800 transition-colors"
        >
          Delete PDF Pages Now
        </Link>
      </div>
    </article>
  );
}
