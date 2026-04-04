import type { Metadata } from 'next';
import Link from 'next/link';
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

const guide = (
  <>
    <h2>Common Use Cases</h2>
    <p>
      Converting images to PDF is essential for organizing visual content into a shareable,
      printable format. Photographers create portfolio PDFs from their best shots. Students
      compile scanned handwritten notes into a single document. Businesses package product photos,
      receipts, or whiteboard captures into organized files. Real estate agents combine property
      photos into listing documents.
    </p>
    <h2>Supported Formats and Quality</h2>
    <p>
      Breezy PDF accepts <strong>JPG</strong>, <strong>PNG</strong>, and <strong>WebP</strong>{' '}
      images. Each image is placed on its own page and automatically scaled to fit the selected
      page size (A4, Letter, or Legal) while maintaining its original aspect ratio. The image
      data is embedded directly in the PDF without re-compression, so the quality of your output
      matches the quality of your input images.
    </p>
    <h2>Tips for Better Results</h2>
    <p>
      <strong>Use consistent image sizes.</strong> If your images are all the same dimensions, the
      resulting PDF will look more uniform and professional. Mixing portrait and landscape images
      is fine — each will be centered on its page — but documents look cleaner with consistent
      orientation.
    </p>
    <p>
      <strong>Order before converting.</strong> Drag and drop your images into the sequence you
      want before clicking Convert. Once the PDF is created, you can also use the{' '}
      <Link href="/reorder-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        reorder pages tool
      </Link>{' '}
      to rearrange, or the{' '}
      <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        compress tool
      </Link>{' '}
      to reduce the file size if the resulting PDF is too large. For the reverse operation —
      converting a PDF into images — use the{' '}
      <Link href="/pdf-to-images" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        PDF-to-images tool
      </Link>.
    </p>
  </>
);

export default function ImagesToPdfPage() {
  return (
    <ToolPageLayout
      title="Images to PDF"
      slug="images-to-pdf"
      description="Combine multiple JPG or PNG images into a single PDF document. Reorder and choose page size."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <ImagesToPdfTool />
    </ToolPageLayout>
  );
}
