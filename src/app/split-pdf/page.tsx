import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const SplitTool = dynamic(() => import('@/components/tools/SplitTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Split PDF Online Free',
  description: 'Extract specific pages or split a PDF into separate files. Free, private — all processing in your browser.',
  keywords: ['split pdf', 'extract pdf pages', 'separate pdf', 'pdf splitter', 'split pdf online free'],
  alternates: { canonical: '/split-pdf' },
};

const faq = [
  {
    question: 'How do I split a PDF into separate pages?',
    answer: 'Upload your PDF, select the pages you want to extract, and click Split. Each selected page (or range) becomes its own downloadable PDF file.',
  },
  {
    question: 'Can I extract specific pages from a PDF?',
    answer: 'Yes. You can select individual pages visually by clicking them, or type a page range like "1-3, 5, 8-10" to extract exactly the pages you need.',
  },
  {
    question: 'Is splitting a PDF free?',
    answer: 'Completely free with no limits. Breezy PDF is ad-supported so you never have to pay or create an account.',
  },
  {
    question: 'Will splitting a PDF reduce quality?',
    answer: 'No. Splitting extracts the original pages without any re-encoding or compression. The output pages are identical to the originals.',
  },
];

const howTo = {
  description: 'Extract the exact pages you need from any PDF document. Everything runs locally in your browser.',
  steps: [
    'Upload your PDF file by clicking the upload area or dragging it in.',
    'Preview all pages and select the ones you want to extract.',
    'Optionally enter a custom page range (e.g. "1-3, 7, 12-15").',
    'Click "Split" and download your extracted pages as a new PDF.',
  ],
};

const guide = (
  <>
    <h2>When You Need to Split a PDF</h2>
    <p>
      Splitting a PDF is the opposite of merging — you take one document and break it into smaller
      pieces. This comes up more often than most people expect. You might need to extract a single
      signature page from a contract, pull a specific chapter out of a report, or separate a
      scanned batch of receipts into individual files. File size is another common reason — a large
      PDF that exceeds email attachment limits can be split into smaller sections without losing
      any quality.
    </p>
    <h2>How PDF Splitting Works in Your Browser</h2>
    <p>
      When you split a PDF with Breezy PDF, the tool uses <strong>pdf-lib</strong> to parse your
      document&apos;s internal structure directly in your browser. It reads the page tree — the index
      that maps page numbers to their content — and creates new PDF documents containing only the
      pages you selected. Each output file is fully independent with its own fonts, images, and
      metadata. The original file is never modified.
    </p>
    <p>
      Because this runs on your device, there is no upload step, no server processing, and no
      waiting in a queue. The split happens instantly, and your document never leaves your machine.
      This is especially important for sensitive materials like legal documents, financial
      statements, and medical records.
    </p>
    <h2>Common Splitting Strategies</h2>
    <p>
      <strong>Extract a page range.</strong> Select a continuous block of pages (e.g., pages 5-12)
      to pull out a specific section. This is ideal for sharing one chapter of a report or one
      section of a contract without exposing the rest.
    </p>
    <p>
      <strong>Pick individual pages.</strong> Click specific pages to create a document with only
      those pages. Useful when you need non-consecutive pages — for example, the cover page, the
      summary, and the signature page from a 30-page document.
    </p>
    <p>
      <strong>Combine with other tools.</strong> After splitting, you can{' '}
      <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        merge
      </Link>{' '}
      the extracted pages with other documents,{' '}
      <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        compress
      </Link>{' '}
      them for emailing, or{' '}
      <Link href="/add-page-numbers" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        add page numbers
      </Link>{' '}
      to the result for a polished final document.
    </p>
  </>
);

export default function SplitPdfPage() {
  return (
    <ToolPageLayout
      title="Split PDF"
      slug="split-pdf"
      description="Extract specific pages or split your PDF into separate documents. Select pages visually or enter a range."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <SplitTool />
    </ToolPageLayout>
  );
}
