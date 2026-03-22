import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
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

export default function SplitPdfPage() {
  return (
    <ToolPageLayout
      title="Split PDF"
      slug="split-pdf"
      description="Extract specific pages or split your PDF into separate documents. Select pages visually or enter a range."
      faq={faq}
      howTo={howTo}
    >
      <SplitTool />
    </ToolPageLayout>
  );
}
