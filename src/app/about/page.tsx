import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Breezy PDF',
  description:
    'Breezy PDF is a free, privacy-first PDF toolkit. All processing happens in your browser — your files never leave your device.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl tracking-tight text-stone-900 leading-[1.1] mb-8">
        About <em className="font-serif not-italic">Breezy PDF</em>
      </h1>

      <div className="prose-breezy">
        <h2>What We Do</h2>
        <p>
          Breezy PDF is a free online toolkit for working with PDF files. We provide tools to{' '}
          <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            merge
          </Link>,{' '}
          <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            split
          </Link>,{' '}
          <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            compress
          </Link>,{' '}
          <Link href="/rotate-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            rotate
          </Link>,{' '}
          <Link href="/sign-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            sign
          </Link>,{' '}
          <Link href="/pdf-to-images" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            convert
          </Link>, and edit PDF documents — all completely free and without any account or
          registration required.
        </p>

        <h2>Privacy First</h2>
        <p>
          What makes Breezy PDF different from other online PDF tools is our approach to privacy.
          Every tool runs entirely in your web browser using client-side JavaScript. When you add
          a file to any of our tools, the file is processed on your device using your computer&apos;s
          own processor and memory. Your documents are <strong>never uploaded to any server</strong>.
        </p>
        <p>
          This is not a marketing claim — it is a technical fact. Our tools are built with{' '}
          <strong>pdf-lib</strong> and <strong>pdfjs-dist</strong>, open-source JavaScript libraries
          that run natively in the browser. There is no backend server that handles file processing.
          If you disconnect from the internet after loading the page, the tools will still work.
        </p>
        <p>
          We believe this is how online tools should work. Your tax returns, contracts, medical
          records, and personal documents should not have to pass through someone else&apos;s
          infrastructure just because you need to merge two files or add a page number.
        </p>

        <h2>How We Stay Free</h2>
        <p>
          Breezy PDF is supported by advertising through Google AdSense. This allows us to offer
          every tool for free, with no file size limits, no watermarks on output files, and no
          paywalls. We do not sell user data, and we do not have access to your files in the first
          place.
        </p>

        <h2>Our Tools</h2>
        <p>
          Breezy PDF currently offers 11 tools covering the most common PDF tasks:
        </p>
        <ul>
          <li><strong>Merge PDF</strong> — combine multiple files into one document</li>
          <li><strong>Split PDF</strong> — extract specific pages or page ranges</li>
          <li><strong>Compress PDF</strong> — reduce file size for email and storage</li>
          <li><strong>PDF to Images</strong> — convert pages to PNG or JPG</li>
          <li><strong>Images to PDF</strong> — combine images into a single PDF</li>
          <li><strong>Rotate PDF</strong> — fix sideways or upside-down pages</li>
          <li><strong>Add Page Numbers</strong> — add sequential numbering to any document</li>
          <li><strong>Reorder Pages</strong> — rearrange pages in any order</li>
          <li><strong>Sign PDF</strong> — add your signature to any page</li>
          <li><strong>Add Watermark</strong> — stamp text across every page</li>
          <li><strong>Delete Pages</strong> — remove unwanted pages</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          Breezy PDF is built with Next.js and Tailwind CSS. PDF processing is handled by
          pdf-lib (for document manipulation) and pdfjs-dist (for rendering page previews).
          The application is deployed as a static site, meaning there is no server-side processing
          infrastructure — further reinforcing our privacy commitment. All tools work in any
          modern browser on desktop and mobile devices.
        </p>

        <h2>Contact</h2>
        <p>
          Have a question, suggestion, or issue? Reach us at{' '}
          <a href="mailto:hello@breezypdf.com" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            hello@breezypdf.com
          </a>. We read every message and typically respond within one business day.
        </p>
      </div>
    </div>
  );
}
