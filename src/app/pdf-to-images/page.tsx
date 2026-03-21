import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const PdfToImagesTool = dynamic(() => import('@/components/tools/PdfToImagesTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'PDF to Images Converter Free',
  description: 'Convert PDF pages to PNG or JPG images. Free, private — all processing in your browser.',
};

export default function PdfToImagesPage() {
  return (
    <ToolPageLayout
      title="PDF to Images"
      description="Convert each page of your PDF into high-quality PNG or JPG images."
    >
      <PdfToImagesTool />
    </ToolPageLayout>
  );
}
