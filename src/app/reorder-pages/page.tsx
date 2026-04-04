import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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

const guide = (
  <>
    <h2>When to Reorder PDF Pages</h2>
    <p>
      PDFs frequently arrive with pages in the wrong order. Scanned documents might have pages
      shuffled during the scanning process. A merged document might have sections that need
      rearranging. A report might need its executive summary moved to the front. Whatever the
      reason, reordering pages lets you fix the sequence without recreating the entire document.
    </p>
    <h2>How Page Reordering Works</h2>
    <p>
      Breezy PDF loads your document, renders thumbnail previews of every page, and lets you move
      pages using simple controls. When you save, the tool uses <strong>pdf-lib</strong> to create
      a new PDF with the pages in your chosen sequence. Each page retains all its content — text,
      images, links, and formatting — exactly as it was. Only the order changes.
    </p>
    <h2>Related Operations</h2>
    <p>
      If you need to remove pages entirely rather than just move them, use the{' '}
      <Link href="/delete-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        delete pages tool
      </Link>. If you need to pull out specific pages into a separate file, the{' '}
      <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        split tool
      </Link>{' '}
      is more appropriate. For combining pages from multiple documents, use{' '}
      <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        merge
      </Link>{' '}
      first, then reorder the combined result. All tools process your files locally in your
      browser — nothing is uploaded to any server.
    </p>
  </>
);

export default function ReorderPagesPage() {
  return (
    <ToolPageLayout
      title="Reorder Pages"
      slug="reorder-pages"
      description="Rearrange the pages in your PDF document using simple arrow controls."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <ReorderTool />
    </ToolPageLayout>
  );
}
