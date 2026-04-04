import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Breezy PDF privacy policy — how we handle your data, files, and browsing information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl tracking-tight text-stone-900 leading-[1.1] mb-2">
        Privacy <em className="font-serif not-italic">Policy</em>
      </h1>
      <p className="text-xs text-stone-400 tabular-nums mb-10">Last updated: March 2026</p>

      <div className="prose-breezy">
        <p>
          This Privacy Policy explains how Breezy PDF (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles your
          information when you use our website at breezy-pdf.com and the tools and services
          available through it. We are committed to protecting your privacy and being transparent
          about our practices.
        </p>

        <h2>1. Your Files Are Private</h2>
        <p>
          All PDF processing on Breezy PDF happens entirely within your web browser using
          client-side JavaScript. When you use any of our tools — merge, split, compress, rotate,
          sign, convert, or any other — your files are processed on your device using your
          computer&apos;s own processor and memory. <strong>Your files are never uploaded to our
          servers or any third-party servers.</strong>
        </p>
        <p>
          We do not have the technical capability to access, view, store, or transmit your files.
          Our website delivers the tool code (JavaScript) to your browser, but the actual document
          processing is performed locally on your device. If you disconnect from the internet
          after the page loads, the tools will continue to work.
        </p>
        <p>
          This applies to all file types you use with our tools, including PDFs, images (JPG, PNG,
          WebP), and signature data. None of this data leaves your device at any point during
          processing.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          While we do not collect any file data, we do collect limited information about how our
          website is used:
        </p>
        <ul>
          <li>
            <strong>Analytics data.</strong> We use Vercel Analytics to understand general usage
            patterns such as page views, tool usage frequency, and traffic sources. This data is
            anonymous and aggregated — it does not include any personally identifiable information
            or any content from your files.
          </li>
          <li>
            <strong>Technical information.</strong> When you visit our site, our hosting provider
            (Vercel) may automatically collect standard server logs including your IP address,
            browser type, operating system, referring URL, and pages visited. This information is
            used for security monitoring and service reliability, not for tracking individual users.
          </li>
        </ul>
        <p>
          We do not collect your name, email address, or any other personal information unless you
          voluntarily provide it by contacting us via email.
        </p>

        <h2>3. Advertising</h2>
        <p>
          Breezy PDF displays advertisements through Google AdSense to support the free operation
          of our service. Google and its advertising partners may use cookies and similar
          technologies to serve ads based on your browsing history across the web.
        </p>
        <p>
          Google&apos;s use of advertising cookies is governed by the{' '}
          <a href="https://policies.google.com/privacy" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors" target="_blank" rel="noopener noreferrer">
            Google Privacy Policy
          </a>. You can opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors" target="_blank" rel="noopener noreferrer">
            Google&apos;s Ad Settings
          </a>{' '}
          or by using the{' '}
          <a href="https://optout.aboutads.info/" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors" target="_blank" rel="noopener noreferrer">
            Digital Advertising Alliance opt-out page
          </a>.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Breezy PDF itself does not set any cookies for tracking or functionality purposes. Our
          tools work without cookies and do not require any local storage of user preferences.
        </p>
        <p>
          However, third-party services that we use — specifically Google AdSense and Vercel
          Analytics — may set their own cookies. These cookies are used for advertising
          personalization and anonymous usage analytics, respectively. You can control cookie
          behavior through your browser settings.
        </p>

        <h2>5. Data Sharing</h2>
        <p>
          We do not sell, rent, or share your personal information with third parties. The only
          third-party services that receive any data from your visit are:
        </p>
        <ul>
          <li><strong>Vercel</strong> — our hosting provider, which processes standard web requests</li>
          <li><strong>Google AdSense</strong> — our advertising partner, which may use cookies for ad personalization</li>
          <li><strong>Vercel Analytics</strong> — for anonymous, aggregated usage statistics</li>
        </ul>
        <p>
          None of these services have access to the files you process with our tools.
        </p>

        <h2>6. Data Security</h2>
        <p>
          Our website is served over HTTPS, ensuring that all communication between your browser
          and our servers is encrypted. Since file processing happens entirely in your browser,
          your document data is never transmitted and therefore cannot be intercepted.
        </p>

        <h2>7. Children&apos;s Privacy</h2>
        <p>
          Breezy PDF is not directed at children under the age of 13. We do not knowingly collect
          personal information from children. If you believe a child has provided us with personal
          information, please contact us so we can take appropriate action.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices
          or for legal, operational, or regulatory reasons. We will update the &quot;Last updated&quot;
          date at the top of this page when we make changes. Your continued use of Breezy PDF
          after any changes constitutes acceptance of the updated policy.
        </p>

        <h2>9. Contact</h2>
        <p>
          If you have questions or concerns about this Privacy Policy or our data practices,
          please contact us at{' '}
          <a href="mailto:privacy@breezypdf.com" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            privacy@breezypdf.com
          </a>.
        </p>
      </div>
    </div>
  );
}
