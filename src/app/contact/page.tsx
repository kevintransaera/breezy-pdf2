import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Breezy PDF team. Questions, suggestions, or issues — we are here to help.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl tracking-tight text-stone-900 leading-[1.1] mb-8">
        Get in <em className="font-serif not-italic">Touch</em>
      </h1>

      <div className="prose-breezy">
        <p>
          We would love to hear from you. Whether you have a question about how a tool works, a
          suggestion for a new feature, or an issue to report, we are here to help.
        </p>

        <h2>Email</h2>
        <p>
          The best way to reach us is by email at{' '}
          <a href="mailto:hello@breezypdf.com" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            hello@breezypdf.com
          </a>. We read every message and typically respond within one business day.
        </p>

        <h2>Privacy Concerns</h2>
        <p>
          For questions related to privacy or data handling, contact us at{' '}
          <a href="mailto:privacy@breezypdf.com" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            privacy@breezypdf.com
          </a>. As a reminder, Breezy PDF processes all files entirely in your browser — your
          documents are never uploaded to our servers. You can read more about our approach in our{' '}
          <a href="/privacy" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Privacy Policy
          </a>.
        </p>

        <h2>Feature Requests</h2>
        <p>
          Have an idea for a new tool or an improvement to an existing one? We are always looking
          to expand our toolkit based on what users actually need. Send us your suggestion at{' '}
          <a href="mailto:hello@breezypdf.com" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            hello@breezypdf.com
          </a>{' '}
          and we will consider it for a future update.
        </p>

        <h2>Bug Reports</h2>
        <p>
          If a tool is not working as expected, please include the following details in your email
          so we can investigate efficiently:
        </p>
        <ul>
          <li>Which tool you were using</li>
          <li>What browser and device you were on</li>
          <li>What happened versus what you expected</li>
          <li>The approximate size and page count of the file (no need to send the file itself)</li>
        </ul>
        <p>
          Since all processing happens in your browser, issues are sometimes caused by browser
          version, device memory, or specific PDF structures. The more details you provide, the
          faster we can help.
        </p>
      </div>
    </div>
  );
}
