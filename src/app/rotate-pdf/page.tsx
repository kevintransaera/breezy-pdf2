import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const RotateTool = dynamic(() => import('@/components/tools/RotateTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Rotate PDF Pages Online Free',
  description: 'Rotate PDF pages 90, 180, or 270 degrees. Free, private — all processing in your browser.',
  keywords: ['rotate pdf', 'rotate pdf pages', 'pdf rotation', 'turn pdf pages', 'rotate pdf online free'],
  alternates: { canonical: '/rotate-pdf' },
};

const faq = [
  {
    question: 'How do I rotate a PDF?',
    answer: 'Upload your PDF, choose the rotation angle (90°, 180°, or 270°), and click Rotate. The rotated PDF downloads instantly.',
  },
  {
    question: 'Can I rotate just one page in a PDF?',
    answer: 'Yes. You can select specific pages to rotate while leaving the rest unchanged. This is useful for fixing a single sideways scan in a multi-page document.',
  },
  {
    question: 'Why is my PDF sideways?',
    answer: 'This commonly happens with scanned documents or photos taken in landscape orientation. The scanner or camera saves the content without adjusting the page rotation. Our tool fixes this in seconds.',
  },
  {
    question: 'Does rotating a PDF affect quality?',
    answer: 'No. Rotating changes only the page orientation metadata — the actual content is untouched. Text, images, and vector graphics remain at their original quality.',
  },
];

const howTo = {
  description: 'Fix sideways or upside-down PDFs in seconds. Common for scanned documents, photographed pages, or landscape-oriented files.',
  steps: [
    'Upload the PDF with pages that need rotating.',
    'Choose the rotation angle: 90° (clockwise), 180° (flip), or 270° (counter-clockwise).',
    'Select which pages to rotate, or apply to all.',
    'Click "Rotate" and download the corrected PDF.',
  ],
};

const guide = (
  <>
    <h2>Why PDFs End Up Rotated</h2>
    <p>
      Sideways or upside-down pages are one of the most common PDF annoyances. They happen
      frequently with scanned documents — a page fed through a scanner at the wrong angle, a
      landscape table in a portrait document, or a batch scan where orientation changes
      unpredictably. Mobile scanning apps are another culprit, as phone orientation sensors do not
      always detect the correct direction.
    </p>
    <h2>View Rotation vs. Permanent Rotation</h2>
    <p>
      Most PDF viewers let you rotate the <em>view</em> of a page, but this is temporary. When
      you close the document or share it, the rotation resets. What you need is a permanent
      rotation that modifies the PDF&apos;s internal page structure. Breezy PDF changes the actual
      Rotate property in each page&apos;s definition, producing a new file where the corrected
      orientation is permanent and visible in any viewer.
    </p>
    <h2>Tips for Fixing Orientation</h2>
    <p>
      <strong>Rotate only the pages that need it.</strong> In a multi-page document, often only
      some pages are sideways. Check each page preview before applying rotation. Rotating a page
      that is already correct will make it wrong.
    </p>
    <p>
      <strong>Know your angles.</strong> 90° clockwise fixes pages turned on their left side.
      270° fixes pages turned on their right side. 180° fixes upside-down pages. After correcting
      orientation, you can{' '}
      <Link href="/reorder-pages" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        reorder pages
      </Link>{' '}
      or{' '}
      <Link href="/merge-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        merge
      </Link>{' '}
      the corrected document with other files for a polished final result.
    </p>
  </>
);

export default function RotatePdfPage() {
  return (
    <ToolPageLayout
      title="Rotate PDF"
      slug="rotate-pdf"
      description="Rotate all pages in your PDF document by 90°, 180°, or 270°."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <RotateTool />
    </ToolPageLayout>
  );
}
