import type { Metadata } from 'next';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import ImagesToPdfTool from '@/components/tools/ImagesToPdfTool';

export const metadata: Metadata = {
  title: 'Images to PDF Converter Free',
  description: 'Combine multiple images into a single PDF document. Free, private — all processing in your browser.',
};

export default function ImagesToPdfPage() {
  return (
    <ToolPageLayout
      title="Images to PDF"
      description="Combine multiple JPG or PNG images into a single PDF document. Reorder and choose page size."
    >
      <ImagesToPdfTool />
    </ToolPageLayout>
  );
}
