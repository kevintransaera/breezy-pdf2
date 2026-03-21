import type { Metadata } from 'next';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import MergeTool from '@/components/tools/MergeTool';

export const metadata: Metadata = {
  title: 'Merge PDF Files Online Free',
  description:
    'Combine multiple PDF files into one document. Free, private, no uploads — all processing happens in your browser.',
  keywords: ['merge pdf', 'combine pdf', 'join pdf files', 'free pdf merger', 'merge pdf online'],
};

export default function MergePdfPage() {
  return (
    <ToolPageLayout
      title="Merge PDF Files"
      description="Combine multiple PDF files into a single document. Drag and drop your files, reorder them, and merge — all in your browser."
    >
      <MergeTool />
    </ToolPageLayout>
  );
}
