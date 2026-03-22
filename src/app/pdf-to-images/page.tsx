import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const PdfToImagesTool = dynamic(() => import('@/components/tools/PdfToImagesTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'PDF to Images Converter Free',
  description: 'Convert PDF pages to PNG or JPG images. Free, private — all processing in your browser.',
  keywords: ['pdf to image', 'pdf to png', 'pdf to jpg', 'convert pdf to image', 'pdf to images online free'],
  alternates: { canonical: '/pdf-to-images' },
};

const faq = [
  {
    question: 'How do I convert a PDF to images?',
    answer: 'Upload your PDF to Breezy PDF, choose PNG or JPG format, and click Convert. Each page becomes a separate image file that you can download.',
  },
  {
    question: 'Should I choose PNG or JPG?',
    answer: 'Use PNG for documents with text, diagrams, or transparency — it preserves sharp edges. Use JPG for photo-heavy PDFs where smaller file size matters more than pixel-perfect quality.',
  },
  {
    question: 'What resolution are the output images?',
    answer: 'Images are rendered at high resolution (typically 150-300 DPI equivalent) to ensure text remains readable and graphics stay sharp.',
  },
  {
    question: 'Can I convert a specific page instead of the whole PDF?',
    answer: 'Yes. After uploading, you can select which pages to convert rather than converting the entire document.',
  },
];

const howTo = {
  description: 'Convert any PDF into high-quality PNG or JPG images. Useful for presentations, social media, or embedding PDF content in other documents.',
  steps: [
    'Upload your PDF file to the converter.',
    'Choose your output format: PNG (lossless) or JPG (smaller files).',
    'Select which pages you want to convert.',
    'Click "Convert" and download your images.',
  ],
};

export default function PdfToImagesPage() {
  return (
    <ToolPageLayout
      title="PDF to Images"
      description="Convert each page of your PDF into high-quality PNG or JPG images."
      faq={faq}
      howTo={howTo}
    >
      <PdfToImagesTool />
    </ToolPageLayout>
  );
}
