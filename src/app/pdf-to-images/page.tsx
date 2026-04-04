import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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

const guide = (
  <>
    <h2>Why Convert PDFs to Images?</h2>
    <p>
      PDFs are great for documents, but images are more versatile in many contexts. You might need
      to embed a PDF page in a PowerPoint presentation, post a document excerpt on social media,
      include a chart in a web page, or create thumbnail previews for a document management system.
      In all these cases, you need images — not PDFs.
    </p>
    <h2>Choosing Between PNG and JPG</h2>
    <p>
      <strong>PNG</strong> uses lossless compression, preserving every pixel exactly. It supports
      transparency and produces razor-sharp text and line art. Choose PNG for text-heavy documents,
      diagrams, spreadsheets, or any content where precise rendering matters. The tradeoff is
      larger file sizes — typically 2-5x larger than JPG.
    </p>
    <p>
      <strong>JPG</strong> uses lossy compression, discarding visual information the human eye is
      unlikely to notice. The result is dramatically smaller files. Choose JPG for photo-heavy
      pages, situations where file size matters (email, social media), or when pixel-perfect
      accuracy is not critical. JPG does not support transparency.
    </p>
    <h2>Resolution Considerations</h2>
    <p>
      The resolution you choose directly affects image quality and file size. For web use and
      screen viewing, 150 DPI produces clear, readable images at reasonable file sizes. For print
      output or when you need to zoom in on fine details, use 300 DPI. For quick thumbnails or
      previews, 72 DPI is sufficient.
    </p>
    <p>
      Breezy PDF renders pages using <strong>pdfjs-dist</strong>, Mozilla&apos;s PDF rendering library,
      directly in your browser. The rendering happens on your device — no upload required. For the
      reverse operation, converting images into a PDF, use the{' '}
      <Link href="/images-to-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        images-to-PDF tool
      </Link>.
    </p>
  </>
);

export default function PdfToImagesPage() {
  return (
    <ToolPageLayout
      title="PDF to Images"
      slug="pdf-to-images"
      description="Convert each page of your PDF into high-quality PNG or JPG images."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <PdfToImagesTool />
    </ToolPageLayout>
  );
}
