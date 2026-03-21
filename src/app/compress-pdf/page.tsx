import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const CompressTool = dynamic(() => import('@/components/tools/CompressTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Compress PDF Online Free',
  description: 'Reduce PDF file size while maintaining quality. Free, private — all processing in your browser.',
};

export default function CompressPdfPage() {
  return (
    <ToolPageLayout
      title="Compress PDF"
      description="Reduce your PDF file size. Choose lossless for text-heavy PDFs or lossy for maximum compression."
    >
      <CompressTool />
    </ToolPageLayout>
  );
}
