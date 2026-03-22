import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
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

export default function CompressPdfPage() {
  return (
    <ToolPageLayout
      title="Compress PDF"
      description="Reduce your PDF file size. Choose lossless for text-heavy PDFs or lossy for maximum compression."
      faq={faq}
      howTo={howTo}
    >
      <CompressTool />
    </ToolPageLayout>
  );
}
