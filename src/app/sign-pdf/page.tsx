import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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

const guide = (
  <>
    <h2>Sign Documents Without Printing</h2>
    <p>
      The print-sign-scan workflow is outdated. It wastes paper, requires hardware, and takes far
      longer than it should. Modern electronic signatures let you sign a PDF in seconds — draw
      your signature with a mouse or finger, place it on the document, and download the result.
      No printer, no scanner, no hassle.
    </p>
    <h2>Legal Validity of Electronic Signatures</h2>
    <p>
      In the United States, the <strong>ESIGN Act</strong> establishes that electronic signatures
      are legally valid for most transactions. The EU&apos;s <strong>eIDAS Regulation</strong> provides
      a similar framework. A drawn signature on a PDF is legally admissible and cannot be denied
      legal effect solely because it is electronic. Exceptions exist for certain documents like
      wills and notarized forms — check your jurisdiction&apos;s requirements for those.
    </p>
    <h2>Privacy Advantage</h2>
    <p>
      Cloud-based signing services like DocuSign and Adobe Sign upload your document to their
      servers. For a simple signature on a lease, permission form, or contract, that means
      trusting a third party with your data for a task that can be done locally. Breezy PDF
      processes everything in your browser — your document and signature never leave your device.
      After signing, you can{' '}
      <Link href="/compress-pdf" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        compress the signed PDF
      </Link>{' '}
      for emailing, or{' '}
      <Link href="/add-watermark" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
        add a watermark
      </Link>{' '}
      like &quot;SIGNED&quot; or &quot;CONFIDENTIAL&quot; to mark the document&apos;s status.
    </p>
  </>
);

export default function SignPdfPage() {
  return (
    <ToolPageLayout
      title="Sign PDF"
      slug="sign-pdf"
      description="Draw your signature and place it on any page of your PDF document."
      faq={faq}
      howTo={howTo}
      guide={guide}
    >
      <SignTool />
    </ToolPageLayout>
  );
}
