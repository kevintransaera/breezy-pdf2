import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Breezy PDF terms of service — the rules and guidelines for using our free PDF tools.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl tracking-tight text-stone-900 leading-[1.1] mb-2">
        Terms of <em className="font-serif not-italic">Service</em>
      </h1>
      <p className="text-xs text-stone-400 tabular-nums mb-10">Last updated: March 2026</p>

      <div className="prose-breezy">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the Breezy PDF website at
          breezy-pdf.com and all tools and services available through it. By using Breezy PDF, you
          agree to these Terms. If you do not agree, please do not use our service.
        </p>

        <h2>1. Service Description</h2>
        <p>
          Breezy PDF provides free, browser-based PDF processing tools including (but not limited
          to) merging, splitting, compressing, rotating, signing, watermarking, converting, and
          editing PDF documents. All file processing occurs locally in your web browser using
          client-side JavaScript. No files are uploaded to or stored on our servers.
        </p>
        <p>
          Our service is provided free of charge and is supported by advertising. We reserve the
          right to modify, suspend, or discontinue any part of the service at any time without
          prior notice.
        </p>

        <h2>2. User Responsibilities</h2>
        <p>
          You agree to use Breezy PDF only for lawful purposes and in accordance with these Terms.
          Specifically, you agree not to:
        </p>
        <ul>
          <li>Use our tools to process files that you do not have the legal right to modify, copy, or distribute</li>
          <li>Attempt to reverse-engineer, decompile, or disassemble our software</li>
          <li>Use automated systems (bots, scrapers) to access our service in a manner that degrades performance for other users</li>
          <li>Interfere with or disrupt the integrity or performance of our website</li>
        </ul>

        <h2>3. No Warranty</h2>
        <p>
          Breezy PDF is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
          whether express or implied. We do not warrant that our tools will produce specific
          results, that the service will be uninterrupted or error-free, or that any defects will
          be corrected.
        </p>
        <p>
          While we strive to provide reliable and accurate tools, PDF processing involves complex
          file structures and we cannot guarantee perfect results for every file. We strongly
          recommend keeping backup copies of your original files before processing them with any
          tool.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Breezy PDF and its operators shall
          not be liable for any indirect, incidental, special, consequential, or punitive damages,
          including but not limited to loss of data, loss of profits, or business interruption,
          arising out of or in connection with your use of our service.
        </p>
        <p>
          Since all file processing occurs in your browser, we have no ability to access, recover,
          or restore any files or data. You are solely responsible for maintaining backups of your
          documents.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          The Breezy PDF name, logo, website design, and original content are our intellectual
          property and are protected by applicable copyright and trademark laws. Our PDF processing
          tools are built using open-source libraries (pdf-lib, pdfjs-dist) which are used under
          their respective licenses.
        </p>
        <p>
          Your files remain entirely yours. We do not claim any ownership, license, or rights over
          the documents you process with our tools. Since your files never leave your device, we
          never have access to them.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          Our website uses third-party services including Google AdSense (advertising) and Vercel
          (hosting and analytics). Your interaction with these services is governed by their
          respective terms and privacy policies. We are not responsible for the practices or
          content of third-party services.
        </p>

        <h2>7. Advertising</h2>
        <p>
          Breezy PDF is a free, ad-supported service. By using our website, you acknowledge that
          advertisements will be displayed. We work with Google AdSense to serve relevant ads.
          You may opt out of personalized advertising through Google&apos;s ad settings.
        </p>

        <h2>8. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective
          immediately upon posting to this page. We will update the &quot;Last updated&quot; date at the
          top of this page when modifications are made. Your continued use of Breezy PDF after
          changes are posted constitutes acceptance of the revised Terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable law, without
          regard to conflict of law principles. Any disputes arising from these Terms or your use
          of our service shall be resolved through good-faith negotiation or, if necessary, in the
          appropriate courts.
        </p>

        <h2>10. Contact</h2>
        <p>
          If you have questions about these Terms of Service, please contact us at{' '}
          <a href="mailto:hello@breezypdf.com" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            hello@breezypdf.com
          </a>.
        </p>
      </div>
    </div>
  );
}
