import type { Metadata } from 'next';
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

export default function MergePdfPage() {
  return (
    <ToolPageLayout
      title="Merge PDF Files"
      description="Combine multiple PDF files into a single document. Drag and drop your files, reorder them, and merge — all in your browser."
      faq={faq}
      howTo={howTo}
    >
      <MergeTool />
    </ToolPageLayout>
  );
}
