import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const DeletePagesTool = dynamic(() => import('@/components/tools/DeletePagesTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Delete Pages from PDF Online Free',
  description: 'Remove unwanted pages from your PDF. Select pages to delete visually or by range. Free, private — all processing in your browser.',
  keywords: ['delete pdf pages', 'remove pages from pdf', 'delete pages from pdf online free', 'pdf page remover', 'remove pdf pages'],
  alternates: { canonical: '/delete-pages' },
};

const faq = [
  {
    question: 'How do I delete pages from a PDF?',
    answer: 'Upload your PDF, select the pages you want to remove by clicking them or entering a page range, then click Delete. A new PDF without those pages will be ready to download.',
  },
  {
    question: 'Can I delete multiple pages at once?',
    answer: 'Yes. You can select as many pages as you like by clicking them individually, or enter a range like "2-5, 8, 12-15" to mark multiple pages for deletion at once.',
  },
  {
    question: 'Will deleting pages affect the quality of remaining pages?',
    answer: 'No. The remaining pages are copied exactly as they are — no re-encoding or compression is applied. The output quality is identical to the original.',
  },
  {
    question: 'Is my PDF uploaded to a server?',
    answer: 'No. All processing happens entirely in your browser. Your file never leaves your device, so your documents stay completely private.',
  },
];

const howTo = {
  description: 'Remove unwanted pages from any PDF document. Everything runs locally in your browser.',
  steps: [
    'Upload your PDF file by clicking the upload area or dragging it in.',
    'Preview all pages and click the ones you want to delete, or enter a page range.',
    'Review your selection — pages marked for deletion are highlighted.',
    'Click "Delete" and download your PDF with the selected pages removed.',
  ],
};

export default function DeletePagesPage() {
  return (
    <ToolPageLayout
      title="Delete Pages"
      slug="delete-pages"
      description="Remove unwanted pages from your PDF. Select pages visually or enter a range — the rest is kept intact."
      faq={faq}
      howTo={howTo}
    >
      <DeletePagesTool />
    </ToolPageLayout>
  );
}
