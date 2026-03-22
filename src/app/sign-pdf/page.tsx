import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const SignTool = dynamic(() => import('@/components/tools/SignTool'), { ssr: false });

export const metadata: Metadata = {
  title: 'Sign PDF Online Free',
  description: 'Add your signature to any PDF document. Draw your signature, pick a page, and download. Free, private — all processing in your browser.',
  keywords: ['sign pdf', 'add signature to pdf', 'e-sign pdf free', 'sign pdf online free'],
  alternates: { canonical: '/sign-pdf' },
};

const faq = [
  {
    question: 'Is an electronic signature legally binding?',
    answer: 'In many jurisdictions, electronic signatures carry the same legal weight as handwritten ones under laws like the U.S. ESIGN Act and the EU eIDAS regulation. However, for highly regulated documents (wills, notarized forms), check your local requirements.',
  },
  {
    question: 'Is it secure to sign a PDF online?',
    answer: 'Yes. Breezy PDF processes everything locally in your browser. Your file and signature never leave your device — nothing is uploaded to a server.',
  },
  {
    question: 'What devices can I use to sign a PDF?',
    answer: 'Any device with a modern browser works — desktop, laptop, tablet, or phone. On touch devices, draw your signature with your finger; on desktop, use your mouse or trackpad.',
  },
  {
    question: 'Can I choose where the signature appears on the page?',
    answer: 'Currently, the signature is placed at the bottom-center of your selected page at a natural size. This is the most common placement for signed documents.',
  },
];

const howTo = {
  description: 'Add a handwritten signature to any PDF in seconds. No account required, no watermarks, completely free.',
  steps: [
    'Upload the PDF you need to sign.',
    'Draw your signature in the canvas area using your mouse or finger.',
    'Select which page should receive the signature.',
    'Click "Sign" and download the signed PDF.',
  ],
};

export default function SignPdfPage() {
  return (
    <ToolPageLayout
      title="Sign PDF"
      slug="sign-pdf"
      description="Draw your signature and place it on any page of your PDF document."
      faq={faq}
      howTo={howTo}
    >
      <SignTool />
    </ToolPageLayout>
  );
}
