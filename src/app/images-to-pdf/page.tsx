import type { Metadata } from 'next';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import ImagesToPdfTool from '@/components/tools/ImagesToPdfTool';

export const metadata: Metadata = {
  title: 'Images to PDF Converter Free',
  description: 'Combine multiple images into a single PDF document. Free, private — all processing in your browser.',
  keywords: ['images to pdf', 'jpg to pdf', 'png to pdf', 'convert images to pdf', 'image to pdf online free'],
  alternates: { canonical: '/images-to-pdf' },
};

const faq = [
  {
    question: 'How do I convert images to a PDF?',
    answer: 'Upload your JPG, PNG, or other image files, arrange them in order, choose a page size, and click Convert. You get a single PDF with each image on its own page.',
  },
  {
    question: 'What image formats are supported?',
    answer: 'Breezy PDF supports JPG, JPEG, PNG, and WebP images. These cover the vast majority of image files you will encounter.',
  },
  {
    question: 'Can I reorder images before creating the PDF?',
    answer: 'Yes. After uploading, drag and drop images to arrange them in any order. The PDF pages will follow your chosen sequence.',
  },
  {
    question: 'What page sizes are available?',
    answer: 'You can choose standard sizes like A4, Letter, or Legal. Images are automatically scaled to fit the selected page size while maintaining their aspect ratio.',
  },
];

const howTo = {
  description: 'Turn your photos and scans into a clean PDF document. Perfect for creating portfolios, combining scanned pages, or packaging images for sharing.',
  steps: [
    'Upload your images (JPG, PNG, or WebP) by clicking or dragging them in.',
    'Drag to reorder the images into your preferred sequence.',
    'Select a page size (A4, Letter, etc.).',
    'Click "Convert" and download your new PDF.',
  ],
};

export default function ImagesToPdfPage() {
  return (
    <ToolPageLayout
      title="Images to PDF"
      slug="images-to-pdf"
      description="Combine multiple JPG or PNG images into a single PDF document. Reorder and choose page size."
      faq={faq}
      howTo={howTo}
    >
      <ImagesToPdfTool />
    </ToolPageLayout>
  );
}
