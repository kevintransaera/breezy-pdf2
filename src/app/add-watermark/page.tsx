import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
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

export default function AddWatermarkPage() {
  return (
    <ToolPageLayout
      title="Add Watermark"
      slug="add-watermark"
      description="Add a diagonal text watermark to every page of your PDF document."
      faq={faq}
      howTo={howTo}
    >
      <WatermarkTool />
    </ToolPageLayout>
  );
}
