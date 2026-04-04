import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const WatermarkTool = dynamic(() => import('@/components/tools/WatermarkTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Add Watermark to PDF Online Free',
  description: 'Add a text watermark to every page of your PDF. Free, private — all processing in your browser.',
  keywords: ['watermark pdf', 'add watermark to pdf', 'pdf watermark online free', 'pdf watermark tool', 'stamp pdf'],
  alternates: { canonical: '/add-watermark' },
};

const faq = [
  {
    question: 'How do I add a watermark to a PDF?',
    answer: 'Upload your PDF, enter your watermark text (e.g. "CONFIDENTIAL" or "DRAFT"), adjust the font size and opacity, then click Add Watermark. The watermarked PDF downloads instantly.',
  },
  {
    question: 'Will the watermark appear on every page?',
    answer: 'Yes. The watermark is applied diagonally across the center of every page in your document.',
  },
  {
    question: 'Can I customize the watermark appearance?',
    answer: 'You can change the watermark text, font size, and opacity. Lower opacity values make the watermark more subtle, while higher values make it more prominent.',
  },
  {
    question: 'Does adding a watermark affect PDF quality?',
    answer: 'No. The watermark is drawn as a transparent text overlay. The original content — text, images, and vector graphics — remains at full quality.',
  },
];

const howTo = {
  description: 'Add a diagonal text watermark to every page of your PDF. Ideal for marking documents as confidential, draft, or with your company name.',
  steps: [
    'Upload the PDF you want to watermark.',
    'Enter your watermark text and adjust font size and opacity.',
    'Preview your pages and click "Add Watermark".',
    'Download the watermarked PDF.',
  ],
};

const guide = (
  <>
    <h2>Why Watermark a PDF?</h2>
    <p>
      Watermarks serve as a visible indicator of a document&apos;s status or ownership. The most
      common uses include marking documents as <strong>DRAFT</strong> to prevent premature
      distribution, <strong>CONFIDENTIAL</strong> to discourage unauthorized sharing, or adding
      a company name to branded materials. Watermarks do not prevent copying, but they make
      the document&apos;s intended status immediately clear to anyone who views it.
    </p>
    <h2>How Watermarking Works</h2>
    <p>
      Breezy PDF draws your watermark text diagonally across the center of every page as a
      semi-transparent overlay. The text is rendered using <strong>pdf-lib</strong> directly in
      your browser — your document is never uploaded anywhere. You control the text content, font
      size, and opacity level. Lower opacity creates a subtle background mark; higher opacity
      makes the watermark more prominent and harder to ignore.
    </p>
    <h2>Common Watermark Text</h2>
    <p>
      <strong>DRAFT</strong> — for documents still under review. <strong>CONFIDENTIAL</strong> —
      for sensitive materials with restricted distribution. <strong>SAMPLE</strong> — for example
      documents or templates. <strong>DO NOT COPY</strong> — for materials that should not be
      reproduced. You can also use your company name, a date, or any custom text.
    </p>
    <p>
      After watermarking, you might want to{' '}
      <Link href="/add-page-numbers" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        add page numbers
      </Link>{' '}
      for professional formatting, or{' '}
      <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        compress the result
      </Link>{' '}
      before distributing. All tools process your files locally with no uploads.
    </p>
  </>
);

export default function AddWatermarkPage() {
  return (
    <ToolPageLayout
      title="Add Watermark"
      slug="add-watermark"
      description="Add a diagonal text watermark to every page of your PDF document."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <WatermarkTool />
    </ToolPageLayout>
  );
}
