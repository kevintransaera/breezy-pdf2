import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const SplitTool = dynamic(() => import('@/components/tools/SplitTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Split PDF Online Free',
  description: 'Extract specific pages or split a PDF into separate files. Free, private — all processing in your browser.',
};

export default function SplitPdfPage() {
  return (
    <ToolPageLayout
      title="Split PDF"
      description="Extract specific pages or split your PDF into separate documents. Select pages visually or enter a range."
    >
      <SplitTool />
    </ToolPageLayout>
  );
}
