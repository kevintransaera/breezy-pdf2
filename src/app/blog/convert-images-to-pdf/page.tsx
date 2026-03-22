import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Convert Images to PDF: A Complete Guide',
  description:
    'Learn how to convert JPG, PNG, and other image formats to PDF. Covers format differences, quality settings, and a step-by-step walkthrough using free browser-based tools.',
  keywords: [
    'convert images to pdf',
    'jpg to pdf',
    'png to pdf free',
    'image to pdf converter',
    'photos to pdf',
    'combine images into pdf',
  ],
  alternates: { canonical: '/blog/convert-images-to-pdf' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Convert Images to PDF: A Complete Guide',
  description:
    'Learn how to convert JPG, PNG, and other image formats to PDF. Covers format differences, quality, and a step-by-step walkthrough.',
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
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
    '@id': 'https://breezy-pdf.com/blog/convert-images-to-pdf',
  },
};

export default function ConvertImagesToPdfPage() {
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
        <time className="text-xs text-stone-400 tabular-nums">2026-03-09</time>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight text-stone-900 leading-[1.15]">
          How to Convert Images to PDF:{' '}
          <em className="font-serif not-italic">A Complete Guide</em>
        </h1>
      </header>

      <div className="prose-breezy">
        <p>
          Converting images to PDF is one of those tasks that sounds simple but comes with
          surprising nuance. Whether you are packaging scanned receipts for an expense report,
          compiling a portfolio of design work, combining photographs into a shareable document, or
          digitizing paper forms, the process involves decisions about format, quality, page size,
          and ordering that affect the final result.
        </p>

        <p>
          This guide covers everything you need to know — from understanding image formats to
          choosing the right tool and getting the best output quality.
        </p>

        <h2>When You Need Image-to-PDF Conversion</h2>

        <p>
          The need arises more often than you might expect. Here are the most common scenarios:
        </p>

        <ul>
          <li>
            <strong>Scanned documents.</strong> Scanners and phone scanning apps often produce
            individual JPG or PNG files per page. Combining them into a single PDF makes the
            document easier to share, archive, and print.
          </li>
          <li>
            <strong>Photo portfolios.</strong> Photographers and designers package work samples
            as PDFs for clients, publishers, or galleries. A PDF maintains layout consistency
            across different devices and operating systems.
          </li>
          <li>
            <strong>Receipts and records.</strong> For expense reports, tax documentation, or
            insurance claims, converting receipt photos to a single PDF keeps everything organized
            in one file.
          </li>
          <li>
            <strong>Forms and applications.</strong> Many institutions require documents in PDF
            format. When your source material is photographs or screenshots, conversion is the
            necessary bridge.
          </li>
          <li>
            <strong>Presentations and handouts.</strong> Converting slide images or diagrams to
            PDF creates a portable document that anyone can open without specialized software.
          </li>
        </ul>

        <h2>Understanding Image Formats</h2>

        <p>
          The image format you start with affects the quality and size of your resulting PDF. Here
          is what you should know about the most common formats:
        </p>

        <p>
          <strong>JPG (JPEG)</strong> is the most widely used image format. It uses lossy
          compression, which means some image data is discarded to reduce file size. JPGs are
          excellent for photographs and complex images with many colors and gradients. The
          trade-off is that each time a JPG is saved, it loses a small amount of quality. For
          image-to-PDF conversion, JPG files produce reasonably sized PDFs with good visual
          quality.
        </p>

        <p>
          <strong>PNG</strong> uses lossless compression, preserving every pixel exactly as
          captured. PNGs are ideal for screenshots, text-heavy images, diagrams, and anything
          with sharp edges or flat colors. They tend to be larger than JPGs for photographic
          content but produce crisper results for non-photographic material. PNG also supports
          transparency, which can be useful for certain document layouts.
        </p>

        <p>
          <strong>WebP</strong> is a newer format developed by Google that offers both lossy and
          lossless compression with smaller file sizes than JPG or PNG. Browser support is now
          universal, and many modern tools can work with WebP files directly.
        </p>

        <p>
          For most image-to-PDF conversions, the source format matters less than you might think.
          The PDF will embed the image data, and the visual quality of the final document depends
          primarily on the resolution of the original image, not the format it was saved in.
        </p>

        <h2>Resolution and Quality Considerations</h2>

        <p>
          Resolution — measured in pixels per inch (PPI or DPI) — determines how sharp your images
          appear in the PDF. Here are practical guidelines:
        </p>

        <ul>
          <li>
            <strong>For screen viewing only:</strong> 72-150 DPI is sufficient. This produces
            smaller files that load quickly.
          </li>
          <li>
            <strong>For printing:</strong> 300 DPI is the standard for high-quality print output.
            This is the resolution most scanners default to.
          </li>
          <li>
            <strong>For archival purposes:</strong> 300-600 DPI ensures that fine details are
            preserved, even if the document is enlarged or reprinted later.
          </li>
        </ul>

        <p>
          When converting images to PDF, the tool needs to know what page size to use (A4, Letter,
          etc.) and how to scale the image to fit. A good converter maintains the image's aspect
          ratio and centers it on the page, avoiding distortion.
        </p>

        <h2>Step-by-Step: Convert Images to PDF With Breezy PDF</h2>

        <p>
          <Link href="/images-to-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Breezy PDF's image-to-PDF converter
          </Link>{' '}
          handles the entire process in your browser. No files are uploaded to any server. Here is
          how it works:
        </p>

        <ol>
          <li>
            <strong>Open the converter.</strong> Navigate to the{' '}
            <Link href="/images-to-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Images to PDF
            </Link>{' '}
            page. No account or installation is needed.
          </li>
          <li>
            <strong>Upload your images.</strong> Click the upload area or drag and drop your JPG,
            PNG, or WebP files into the browser. You can add multiple images at once.
          </li>
          <li>
            <strong>Arrange the order.</strong> Drag the image thumbnails to set the page order of
            your PDF. The first image becomes the first page, and so on.
          </li>
          <li>
            <strong>Choose a page size.</strong> Select from standard options like A4, Letter, or
            Legal. The tool scales each image to fit the chosen page size while preserving its
            aspect ratio.
          </li>
          <li>
            <strong>Click Convert.</strong> The PDF is generated instantly on your device. Each
            image becomes a full page in the resulting document.
          </li>
          <li>
            <strong>Download your PDF.</strong> Save the file to your computer. The original images
            are not modified.
          </li>
        </ol>

        <h2>Tips for Better Results</h2>

        <p>
          A few practical tips to get the best output from your image-to-PDF conversion:
        </p>

        <ul>
          <li>
            <strong>Start with the highest quality images available.</strong> Converting does not
            improve image quality — it can only preserve what is already there. If you have access
            to the original, uncompressed image, use that.
          </li>
          <li>
            <strong>Crop before converting.</strong> Remove unnecessary borders, backgrounds, or
            margins from your images before adding them to the PDF. This produces cleaner pages.
          </li>
          <li>
            <strong>Be consistent with orientation.</strong> If some images are landscape and
            others are portrait, the PDF will have mixed orientations. For a more professional
            result, rotate images to a consistent orientation before converting.
          </li>
          <li>
            <strong>Consider file size.</strong> If the resulting PDF is too large — common with
            high-resolution images — you can use the{' '}
            <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              PDF compression tool
            </Link>{' '}
            to reduce the size after conversion.
          </li>
        </ul>

        <h2>Beyond Conversion: Other PDF Operations</h2>

        <p>
          Once you have your images in PDF format, you may need to perform additional operations.
          Breezy PDF provides a complete set of browser-based tools for working with PDFs:
        </p>

        <ul>
          <li>
            <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Merge PDFs
            </Link>{' '}
            to combine your image PDF with other documents.
          </li>
          <li>
            <Link href="/add-page-numbers" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Add page numbers
            </Link>{' '}
            for easier navigation in multi-page documents.
          </li>
          <li>
            <Link href="/rotate-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Rotate pages
            </Link>{' '}
            if any images ended up in the wrong orientation.
          </li>
          <li>
            <Link href="/reorder-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              Reorder pages
            </Link>{' '}
            to rearrange your document after the fact.
          </li>
        </ul>

        <p>
          All of these tools work entirely in your browser, keeping your documents private
          throughout the entire workflow. No uploads, no accounts, no waiting.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-16 border-t border-stone-200 pt-10">
        <p className="text-stone-500 text-sm leading-relaxed">
          Ready to turn your images into a PDF?
        </p>
        <Link
          href="/images-to-pdf"
          className="inline-block mt-4 bg-stone-900 text-white text-sm px-6 py-3 hover:bg-stone-800 transition-colors"
        >
          Convert Images to PDF Now
        </Link>
      </div>
    </article>
  );
}
