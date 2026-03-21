import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const RotateTool = dynamic(() => import('@/components/tools/RotateTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Rotate PDF Pages Online Free',
  description: 'Rotate PDF pages 90, 180, or 270 degrees. Free, private — all processing in your browser.',
};

export default function RotatePdfPage() {
  return (
    <ToolPageLayout
      title="Rotate PDF"
      description="Rotate all pages in your PDF document by 90°, 180°, or 270°."
    >
      <RotateTool />
    </ToolPageLayout>
  );
}
