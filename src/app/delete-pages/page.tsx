import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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

const guide = (
  <>
    <h2>When to Delete PDF Pages</h2>
    <p>
      Removing pages from a PDF is more common than you might think. Scanners frequently insert
      blank pages when scanning double-sided documents. Reports from automated systems often
      include unnecessary cover pages or disclaimers. Before sharing a document externally, you
      might need to remove pages containing confidential information, internal notes, or
      irrelevant sections.
    </p>
    <h2>How Page Deletion Works</h2>
    <p>
      PDF viewers are typically read-only — they let you view and annotate, but not modify the
      document&apos;s structure. Deleting a page requires rewriting the PDF&apos;s internal page tree and
      cross-reference table. Breezy PDF uses <strong>pdf-lib</strong> to handle this entirely in
      your browser. The tool creates a new PDF containing only the pages you want to keep, with
      all content — text, images, links, and formatting — preserved exactly as it was.
    </p>
    <h2>Privacy Matters Here</h2>
    <p>
      The irony of cloud-based page deletion tools is that the most common reason to delete pages
      is to remove sensitive content — yet to use those tools, you must upload the <em>entire</em>{' '}
      document, including the sensitive pages, to a third-party server. Breezy PDF processes
      everything locally, so the content you are removing never leaves your device.
    </p>
    <p>
      For more complex document editing, you can also{' '}
      <Link href="/split-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        split the PDF
      </Link>{' '}
      into sections,{' '}
      <Link href="/reorder-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        reorder pages
      </Link>, or{' '}
      <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        merge
      </Link>{' '}
      multiple documents together — all with the same privacy-first approach.
    </p>
  </>
);

export default function DeletePagesPage() {
  return (
    <ToolPageLayout
      title="Delete Pages"
      slug="delete-pages"
      description="Remove unwanted pages from your PDF. Select pages visually or enter a range — the rest is kept intact."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <DeletePagesTool />
    </ToolPageLayout>
  );
}
