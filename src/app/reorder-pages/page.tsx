import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const ReorderTool = dynamic(() => import('@/components/tools/ReorderTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Reorder PDF Pages Online Free',
  description: 'Rearrange pages in your PDF document. Free, private — all processing in your browser.',
  keywords: ['reorder pdf pages', 'rearrange pdf', 'move pdf pages', 'sort pdf pages', 'reorder pdf online free'],
  alternates: { canonical: '/reorder-pages' },
};

const faq = [
  {
    question: 'How do I rearrange pages in a PDF?',
    answer: 'Upload your PDF and you will see thumbnails of every page. Use the arrow controls to move pages up or down, then click Save to download the reordered PDF.',
  },
  {
    question: 'Can I delete pages while reordering?',
    answer: 'This tool focuses on reordering. To remove pages, use our Split PDF tool to extract only the pages you want to keep.',
  },
  {
    question: 'Does reordering affect the PDF content?',
    answer: 'No. Reordering only changes the sequence of pages. All text, images, links, and formatting on each page remain exactly the same.',
  },
  {
    question: 'Is there a page limit?',
    answer: 'No hard limit. Since processing runs in your browser, very large PDFs (500+ pages) may take a moment to load thumbnails, but the reordering itself is fast.',
  },
];

const howTo = {
  description: 'Rearrange pages in any PDF to get them in the right order. Works great for fixing page sequences in scanned documents or reorganizing reports.',
  steps: [
    'Upload the PDF whose pages you want to rearrange.',
    'Preview page thumbnails and use arrow controls to move pages.',
    'Continue reordering until all pages are in the correct sequence.',
    'Click "Save" to download your reordered PDF.',
  ],
};

export default function ReorderPagesPage() {
  return (
    <ToolPageLayout
      title="Reorder Pages"
      slug="reorder-pages"
      description="Rearrange the pages in your PDF document using simple arrow controls."
      faq={faq}
      howTo={howTo}
    >
      <ReorderTool />
    </ToolPageLayout>
  );
}
