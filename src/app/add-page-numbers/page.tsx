import type { Metadata } from 'next';
import Link from 'next/link';
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

const guide = (
  <>
    <h2>Why Add Page Numbers?</h2>
    <p>
      Page numbers seem like a small detail, but they are essential for any document that will be
      printed, referenced, or navigated. Legal filings require sequential numbering. Academic
      papers need numbered pages for citations. Printed manuals need numbers so readers can follow
      a table of contents. Any document that has been{' '}
      <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        merged from multiple sources
      </Link>{' '}
      often loses its original numbering, making new sequential numbers necessary.
    </p>
    <h2>How It Works</h2>
    <p>
      Breezy PDF uses <strong>pdf-lib</strong> to draw page numbers directly onto each page as
      text. You choose the position (top or bottom, left, center, or right), the font size, and
      the number format. The numbers become a permanent part of the page content — they will
      appear in any PDF viewer and when printed. The process runs entirely in your browser, so
      your document never leaves your device.
    </p>
    <h2>Best Practices</h2>
    <p>
      <strong>Number after merging.</strong> If you are combining multiple documents, add page
      numbers as the final step. Numbering before merging produces conflicting or overlapping
      numbers in the combined result.
    </p>
    <p>
      <strong>Skip the title page.</strong> Most professional documents leave the first page
      unnumbered. Use the starting page option to begin numbering on page 2. You can also pair
      page numbering with a{' '}
      <Link href="/add-watermark" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        watermark
      </Link>{' '}
      (such as &quot;DRAFT&quot; or &quot;CONFIDENTIAL&quot;) for documents that need both.
    </p>
  </>
);

export default function AddPageNumbersPage() {
  return (
    <ToolPageLayout
      title="Add Page Numbers"
      slug="add-page-numbers"
      description="Add page numbers to your PDF with customizable position, size, and format."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <PageNumbersTool />
    </ToolPageLayout>
  );
}
