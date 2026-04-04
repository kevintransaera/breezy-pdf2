import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const CompressTool = dynamic(() => import('@/components/tools/CompressTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Compress PDF Online Free',
  description: 'Reduce PDF file size while maintaining quality. Free, private — all processing in your browser.',
  keywords: ['compress pdf', 'reduce pdf size', 'pdf compressor', 'shrink pdf', 'compress pdf online free'],
  alternates: { canonical: '/compress-pdf' },
};

const faq = [
  {
    question: 'How much can I compress a PDF?',
    answer: 'Results vary depending on the content. Image-heavy PDFs can often be reduced by 50-80%. Text-heavy documents may see smaller reductions since text is already compact.',
  },
  {
    question: 'Does compressing a PDF reduce quality?',
    answer: 'With lossless compression, quality is preserved exactly. Lossy compression reduces image quality slightly for much smaller file sizes — you can control the trade-off.',
  },
  {
    question: 'Why compress a PDF?',
    answer: 'Smaller PDFs are easier to email, upload to web forms, and store. Many services have file size limits (e.g. 10MB for email attachments) that compression helps you meet.',
  },
  {
    question: 'Is my PDF uploaded to a server for compression?',
    answer: 'No. Breezy PDF compresses your file entirely in your browser. The file never leaves your device, making it safe for sensitive documents.',
  },
];

const howTo = {
  description: 'Reduce your PDF file size in seconds without installing any software. Choose between lossless and lossy compression.',
  steps: [
    'Upload the PDF file you want to compress.',
    'Choose a compression mode: lossless (preserves quality) or lossy (maximum reduction).',
    'If using lossy compression, adjust the quality slider to your preference.',
    'Click "Compress" and download the smaller PDF file.',
  ],
};

const guide = (
  <>
    <h2>Understanding PDF Compression</h2>
    <p>
      PDF files can be surprisingly large, especially when they contain high-resolution images,
      embedded fonts, or scanned pages. A 10-page document with photographs can easily exceed
      50 MB — well beyond most email attachment limits. Compression reduces the file size so you
      can share, upload, and store documents more easily.
    </p>
    <p>
      There are two approaches to PDF compression. <strong>Lossless compression</strong> removes
      redundant data without touching the visual content — duplicate font subsets, unused objects,
      and inefficient encoding. The output looks identical to the original. <strong>Lossy
      compression</strong> goes further by reducing image quality. Photographs and scanned pages
      are re-encoded at lower resolution or higher compression ratios, which can dramatically
      reduce file size at the cost of some visual fidelity.
    </p>
    <h2>When to Compress</h2>
    <p>
      The most common reason to compress a PDF is email. Gmail, Outlook, and most corporate mail
      servers limit attachments to 10-25 MB. If your PDF exceeds that limit, compression is
      usually the fastest solution. It is also useful when uploading documents to web forms that
      impose file size caps, or when storing large volumes of documents where disk space matters.
    </p>
    <p>
      For text-heavy documents (contracts, articles, spreadsheets), lossless compression is
      usually sufficient and preserves every detail. For image-heavy documents (photo albums,
      scanned pages, brochures), lossy compression with a quality setting of 60-80% typically
      produces files that are 50-70% smaller with minimal visible difference.
    </p>
    <h2>Compression Alternatives</h2>
    <p>
      If compression alone does not reduce your file enough, consider{' '}
      <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        splitting the PDF
      </Link>{' '}
      into smaller sections. A 40 MB document split in half gives you two 20 MB files, both within
      typical email limits and with no quality loss. You can also{' '}
      <Link href="/delete-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        remove unnecessary pages
      </Link>{' '}
      before compressing to reduce the starting size.
    </p>
  </>
);

export default function CompressPdfPage() {
  return (
    <ToolPageLayout
      title="Compress PDF"
      slug="compress-pdf"
      description="Reduce your PDF file size. Choose lossless for text-heavy PDFs or lossy for maximum compression."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <CompressTool />
    </ToolPageLayout>
  );
}
