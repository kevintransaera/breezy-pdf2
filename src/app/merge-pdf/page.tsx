import type { Metadata } from 'next';
import Link from 'next/link';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import MergeTool from '@/components/tools/MergeTool';

export const metadata: Metadata = {
  title: 'Merge PDF Files Online Free',
  description:
    'Combine multiple PDF files into one document. Free, private, no uploads — all processing happens in your browser.',
  keywords: ['merge pdf', 'combine pdf', 'join pdf files', 'free pdf merger', 'merge pdf online', 'pdf combiner'],
  alternates: { canonical: '/merge-pdf' },
};

const faq = [
  {
    question: 'How do I merge PDF files for free?',
    answer: 'Upload your PDF files to Breezy PDF, arrange them in the order you want, and click Merge. The combined PDF downloads instantly. No account or payment required.',
  },
  {
    question: 'Is it safe to merge PDFs online?',
    answer: 'Yes. Breezy PDF processes everything in your browser using JavaScript. Your files are never uploaded to any server — they stay on your device the entire time.',
  },
  {
    question: 'Can I change the order of PDFs before merging?',
    answer: 'Absolutely. After uploading, drag and drop files to rearrange them. The final merged PDF will follow your chosen order.',
  },
  {
    question: 'Is there a file size limit?',
    answer: 'There is no hard limit. Since processing happens in your browser, performance depends on your device. Most users can merge files up to several hundred megabytes without issues.',
  },
];

const howTo = {
  description: 'Merging PDF files with Breezy PDF is fast and completely private. Here\'s how it works:',
  steps: [
    'Click the upload area or drag and drop your PDF files into the browser.',
    'Rearrange the files by dragging them into your preferred order.',
    'Click the "Merge" button to combine all files into one PDF.',
    'Download your merged PDF instantly — no waiting, no email required.',
  ],
};

const guide = (
  <>
    <h2>Why Merge PDFs?</h2>
    <p>
      Merging PDFs is one of the most common document tasks in both professional and personal
      settings. Whether you are assembling a report from multiple sections, combining invoices into
      a single billing package, or packaging scanned pages into one cohesive document, the ability
      to join PDF files quickly is essential.
    </p>
    <p>
      In business, merged documents are easier to email, archive, and reference. Instead of
      attaching five separate files to an email, you send one. Instead of storing a dozen individual
      receipts, you keep one consolidated expense report. Legal professionals merge discovery
      documents, exhibit packages, and brief sections. Accountants combine financial statements
      from different periods. Teachers merge worksheets into a single handout packet.
    </p>
    <h2>How Client-Side PDF Merging Works</h2>
    <p>
      Breezy PDF uses <strong>pdf-lib</strong>, an open-source JavaScript library, to merge your
      files entirely within your browser. When you drop files into the merge tool, the library
      reads each PDF&apos;s internal structure — its page tree, fonts, images, and annotations — and
      copies every page into a single new document. The result is a valid PDF with its own
      cross-reference table and metadata.
    </p>
    <p>
      Because this happens on your device, your files are never uploaded to any server. There is
      no file size limit imposed by a remote server, no processing queue, and no risk of your
      documents being stored or accessed by a third party. The only constraint is your device&apos;s
      available memory, which is more than sufficient for typical merge operations.
    </p>
    <h2>Tips for a Better Merge</h2>
    <p>
      <strong>Order matters.</strong> Before merging, arrange your files in the sequence you want
      them to appear. Drag and drop to reorder. If you need to rearrange individual pages after
      merging, use the{' '}
      <Link href="/reorder-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        reorder pages
      </Link>{' '}
      tool.
    </p>
    <p>
      <strong>Check for duplicates.</strong> When merging documents from different sources, it is
      common to accidentally include the same page twice. Preview your files before merging to
      catch duplicates. If the merged result has unwanted pages, the{' '}
      <Link href="/delete-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        delete pages
      </Link>{' '}
      tool can clean it up.
    </p>
    <p>
      <strong>Add page numbers after merging.</strong> If your merged document needs consistent
      page numbering, use the{' '}
      <Link href="/add-page-numbers" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        page numbers tool
      </Link>{' '}
      as a final step. This ensures sequential numbering across all sections regardless of the
      original documents&apos; numbering.
    </p>
  </>
);

export default function MergePdfPage() {
  return (
    <ToolPageLayout
      title="Merge PDF Files"
      slug="merge-pdf"
      description="Combine multiple PDF files into a single document. Drag and drop your files, reorder them, and merge — all in your browser."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <MergeTool />
    </ToolPageLayout>
  );
}
