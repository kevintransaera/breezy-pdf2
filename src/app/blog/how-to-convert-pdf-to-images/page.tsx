import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Convert a PDF to Images (PNG or JPG) — Free & Private',
  description:
    'Convert PDF pages to high-quality PNG or JPG images. Choose resolution, format, and pages — all processing happens in your browser. Free, no upload required.',
  keywords: [
    'pdf to image',
    'convert pdf to jpg',
    'convert pdf to png',
    'pdf to image converter',
    'pdf to picture',
    'pdf to jpg free online',
  ],
  alternates: { canonical: '/blog/how-to-convert-pdf-to-images' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Convert a PDF to Images (PNG or JPG)',
  description:
    'Convert PDF pages to high-quality PNG or JPG images. Choose resolution, format, and pages — entirely in your browser.',
  datePublished: '2026-03-26',
  dateModified: '2026-03-26',
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
    '@id': 'https://breezy-pdf.com/blog/how-to-convert-pdf-to-images',
  },
};

export default function HowToConvertPdfToImagesPage() {
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
        <time className="text-xs text-stone-400 tabular-nums">2026-03-26</time>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight text-stone-900 leading-[1.15]">
          How to Convert a PDF{' '}
          <em className="font-serif not-italic">to Images</em> — PNG or JPG
        </h1>
      </header>

      <div className="prose-breezy">
        <p>
          PDFs are great for preserving document formatting, but they are not always the right
          format for every situation. When you need to embed a page in a presentation, post a
          document excerpt on social media, include a chart in a web page, or create a thumbnail
          preview, you need an image — not a PDF. Converting PDF pages to PNG or JPG is the
          bridge between these two worlds.
        </p>

        <p>
          The use cases are more common than you might expect. Designers extract pages from
          brochures to use in mockups. Teachers convert worksheet pages to images for embedding
          in Google Slides or learning management systems. Social media managers turn report
          highlights into shareable graphics. Developers create page thumbnails for document
          management systems. Real estate agents convert listing sheets to images for MLS uploads.
        </p>

        <h2>PNG vs. JPG: Which Format Should You Choose?</h2>

        <p>
          The two most common image formats serve different purposes, and choosing the right one
          affects both quality and file size.
        </p>

        <p>
          <strong>PNG (Portable Network Graphics)</strong> uses lossless compression. Every pixel
          in the original render is preserved exactly. PNG supports transparency, which means areas
          without content can be see-through rather than white. This makes PNG the right choice
          when you need precise text rendering, sharp lines, or when the image will be placed on
          top of other content. The tradeoff is file size — PNG images are typically 2 to 5 times
          larger than their JPG equivalents.
        </p>

        <p>
          <strong>JPG (JPEG)</strong> uses lossy compression. It discards visual information that
          the human eye is unlikely to notice, producing dramatically smaller files. JPG is ideal
          for photographic content, pages with large images, or situations where file size matters
          more than pixel-perfect accuracy. It does not support transparency — any transparent area
          will be filled with white. For most practical uses — email attachments, web uploads,
          social media posts — JPG is the better default.
        </p>

        <p>
          <strong>The simple rule:</strong> use PNG for text-heavy documents where sharpness
          matters (contracts, spreadsheets, diagrams). Use JPG for photo-heavy pages or when file
          size needs to stay small (presentations, social media, thumbnails).
        </p>

        <h2>Resolution and DPI: Getting the Right Quality</h2>

        <p>
          When converting a PDF page to an image, you need to decide on a resolution — typically
          expressed in DPI (dots per inch). This determines how many pixels the output image
          contains and directly affects both quality and file size.
        </p>

        <ul>
          <li>
            <strong>72 DPI</strong> — screen resolution. Suitable for web thumbnails, quick
            previews, and situations where file size is critical. Text may appear slightly soft
            at this resolution.
          </li>
          <li>
            <strong>150 DPI</strong> — a good balance between quality and file size. Suitable for
            most digital uses: embedding in documents, presentations, emails, and web content.
            Text is sharp and readable.
          </li>
          <li>
            <strong>300 DPI</strong> — print resolution. Produces large, high-quality images
            suitable for printing, detailed viewing, or archival purposes. File sizes will be
            significantly larger.
          </li>
        </ul>

        <p>
          For most people converting PDFs to images for digital use, 150 DPI hits the sweet spot.
          It produces clear, readable images without the bloated file sizes of 300 DPI. If you are
          preparing images for print or need to zoom in on fine details, go with 300 DPI.
        </p>

        <h2>Cloud Converters vs. Browser-Based Tools</h2>

        <p>
          Most online PDF-to-image converters follow the familiar pattern: upload your PDF, wait
          for the server to process it, download the images. This works, but it means your entire
          document — every page, every word — is transmitted to and processed on someone else&apos;s
          infrastructure.
        </p>

        <p>
          For a marketing flyer or a public report, the privacy risk is minimal. But for financial
          documents, legal filings, medical records, or anything containing personal information,
          uploading to a third-party server introduces unnecessary exposure. The document you are
          converting might contain exactly the kind of data you would not want on a stranger&apos;s
          server.
        </p>

        <p>
          Browser-based conversion eliminates this concern entirely. Using{' '}
          <strong>pdfjs-dist</strong> (Mozilla&apos;s PDF rendering library) and the HTML Canvas API,
          your browser can render each PDF page as a high-quality image without any server
          involvement. The PDF is loaded into memory, rendered at your chosen resolution, and the
          resulting pixels are encoded as PNG or JPG — all locally on your device.
        </p>

        <h2>Step-by-Step: Convert PDF to Images With Breezy PDF</h2>

        <p>
          <Link href="/pdf-to-images" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Breezy PDF&apos;s PDF-to-images tool
          </Link>{' '}
          converts your pages without uploading the document. Here is how:
        </p>

        <ol>
          <li>
            <strong>Open the converter.</strong> Go to the{' '}
            <Link href="/pdf-to-images" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
              PDF to Images
            </Link>{' '}
            page. No account or signup needed.
          </li>
          <li>
            <strong>Add your PDF.</strong> Drag and drop your file or click to select it. The tool
            loads the document locally in your browser.
          </li>
          <li>
            <strong>Choose your settings.</strong> Select the output format (PNG or JPG) and the
            quality or resolution level. Higher quality produces sharper images with larger file
            sizes.
          </li>
          <li>
            <strong>Convert.</strong> The tool renders each page as an image using your browser&apos;s
            rendering engine. There is no upload step — processing happens on your device.
          </li>
          <li>
            <strong>Download your images.</strong> Save individual page images or download all of
            them at once.
          </li>
        </ol>

        <h2>Practical Tips</h2>

        <p>
          <strong>Convert only the pages you need.</strong> If you have a 50-page document but
          only need images of pages 3 and 7, there is no reason to convert all 50. Select specific
          pages to save time and avoid cluttering your downloads folder. If you need to isolate
          pages first, use the{' '}
          <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            split tool
          </Link>{' '}
          to extract them before converting.
        </p>

        <p>
          <strong>Match resolution to your use case.</strong> Do not default to 300 DPI for
          everything. A thumbnail for a website needs 72 DPI at most. An image for a Google
          Slides presentation works well at 150 DPI. Reserve 300 DPI for print output or when
          you need to crop and enlarge specific sections.
        </p>

        <p>
          <strong>Going the other direction?</strong> If you need to convert images into a PDF
          rather than the other way around, Breezy PDF&apos;s{' '}
          <Link href="/images-to-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            images-to-PDF tool
          </Link>{' '}
          handles that with the same privacy-first approach. You can also{' '}
          <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            compress PDFs
          </Link>{' '}
          before converting if the original file is very large and you want faster processing.
        </p>

        <h2>The Bottom Line</h2>

        <p>
          Converting PDF pages to images is a common need with a simple solution. Whether you are
          preparing content for a presentation, a website, social media, or print, browser-based
          tools give you full control over format and resolution without the privacy tradeoff of
          cloud-based converters. Your documents stay on your device, and your images are ready
          in seconds.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 sm:mt-16 border-t border-stone-200 pt-10">
        <p className="text-stone-500 text-sm leading-relaxed">
          Ready to convert your PDF to images?
        </p>
        <Link
          href="/pdf-to-images"
          className="inline-block mt-4 bg-stone-900 text-white text-sm px-6 py-3 hover:bg-stone-800 transition-colors"
        >
          Convert PDF to Images Now
        </Link>
      </div>
    </article>
  );
}
