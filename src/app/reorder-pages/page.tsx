import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const ReorderTool = dynamic(() => import('@/components/tools/ReorderTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Reorder PDF Pages Online Free',
  description: 'Rearrange pages in your PDF document. Free, private — all processing in your browser.',
};

export default function ReorderPagesPage() {
  return (
    <ToolPageLayout
      title="Reorder Pages"
      description="Rearrange the pages in your PDF document using simple arrow controls."
    >
      <ReorderTool />
    </ToolPageLayout>
  );
}
