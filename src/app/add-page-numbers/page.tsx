import type { Metadata } from 'next';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import PageNumbersTool from '@/components/tools/PageNumbersTool';

export const metadata: Metadata = {
  title: 'Add Page Numbers to PDF Free',
  description: 'Add page numbers to your PDF document with customizable position and format. Free, private — all processing in your browser.',
  keywords: ['add page numbers to pdf', 'pdf page numbering', 'number pdf pages', 'pdf page numbers online free'],
  alternates: { canonical: '/add-page-numbers' },
};

const faq = [
  {
    question: 'How do I add page numbers to a PDF?',
    answer: 'Upload your PDF, choose the position (top or bottom, left/center/right), select a format, and click Add Numbers. The numbered PDF downloads instantly.',
  },
  {
    question: 'Can I customize the page number format?',
    answer: 'Yes. You can choose the position on the page, the font size, and number format (e.g. "1", "Page 1", "1 of N"). You can also set a starting number.',
  },
  {
    question: 'Can I skip numbering on certain pages?',
    answer: 'You can set a starting page for numbering, which is useful for skipping title pages or table of contents pages at the beginning of a document.',
  },
  {
    question: 'Does this work with scanned PDFs?',
    answer: 'Yes. Page numbers are added as an overlay on top of your existing PDF content, so they work with any PDF regardless of how it was created.',
  },
];

const howTo = {
  description: 'Add professional page numbers to any PDF document. Customize position, format, and starting number.',
  steps: [
    'Upload the PDF you want to number.',
    'Choose where page numbers should appear (top/bottom, left/center/right).',
    'Select the number format and font size.',
    'Click "Add Numbers" and download your numbered PDF.',
  ],
};

export default function AddPageNumbersPage() {
  return (
    <ToolPageLayout
      title="Add Page Numbers"
      slug="add-page-numbers"
      description="Add page numbers to your PDF with customizable position, size, and format."
      faq={faq}
      howTo={howTo}
    >
      <PageNumbersTool />
    </ToolPageLayout>
  );
}
