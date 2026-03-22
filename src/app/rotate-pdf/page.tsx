import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const RotateTool = dynamic(() => import('@/components/tools/RotateTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Rotate PDF Pages Online Free',
  description: 'Rotate PDF pages 90, 180, or 270 degrees. Free, private — all processing in your browser.',
  keywords: ['rotate pdf', 'rotate pdf pages', 'pdf rotation', 'turn pdf pages', 'rotate pdf online free'],
  alternates: { canonical: '/rotate-pdf' },
};

const faq = [
  {
    question: 'How do I rotate a PDF?',
    answer: 'Upload your PDF, choose the rotation angle (90°, 180°, or 270°), and click Rotate. The rotated PDF downloads instantly.',
  },
  {
    question: 'Can I rotate just one page in a PDF?',
    answer: 'Yes. You can select specific pages to rotate while leaving the rest unchanged. This is useful for fixing a single sideways scan in a multi-page document.',
  },
  {
    question: 'Why is my PDF sideways?',
    answer: 'This commonly happens with scanned documents or photos taken in landscape orientation. The scanner or camera saves the content without adjusting the page rotation. Our tool fixes this in seconds.',
  },
  {
    question: 'Does rotating a PDF affect quality?',
    answer: 'No. Rotating changes only the page orientation metadata — the actual content is untouched. Text, images, and vector graphics remain at their original quality.',
  },
];

const howTo = {
  description: 'Fix sideways or upside-down PDFs in seconds. Common for scanned documents, photographed pages, or landscape-oriented files.',
  steps: [
    'Upload the PDF with pages that need rotating.',
    'Choose the rotation angle: 90° (clockwise), 180° (flip), or 270° (counter-clockwise).',
    'Select which pages to rotate, or apply to all.',
    'Click "Rotate" and download the corrected PDF.',
  ],
};

export default function RotatePdfPage() {
  return (
    <ToolPageLayout
      title="Rotate PDF"
      description="Rotate all pages in your PDF document by 90°, 180°, or 270°."
      faq={faq}
      howTo={howTo}
    >
      <RotateTool />
    </ToolPageLayout>
  );
}
