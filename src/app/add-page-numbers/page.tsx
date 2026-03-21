import type { Metadata } from 'next';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import PageNumbersTool from '@/components/tools/PageNumbersTool';

export const metadata: Metadata = {
  title: 'Add Page Numbers to PDF Free',
  description: 'Add page numbers to your PDF document with customizable position and format. Free, private — all processing in your browser.',
};

export default function AddPageNumbersPage() {
  return (
    <ToolPageLayout
      title="Add Page Numbers"
      description="Add page numbers to your PDF with customizable position, size, and format."
    >
      <PageNumbersTool />
    </ToolPageLayout>
  );
}
