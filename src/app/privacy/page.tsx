import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Breezy PDF privacy policy — how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Your Files Are Private</h2>
        <p>
          Breezy PDF processes all files entirely within your web browser. Your PDF files, images, and
          documents are <strong>never uploaded to our servers</strong>. We cannot see, access, or store
          your files at any point.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">What We Collect</h2>
        <p>
          We use analytics to understand how our tools are used (page views, tool usage counts). This
          data is anonymous and does not include any file content or personal information.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Advertising</h2>
        <p>
          We display advertisements via Google AdSense to support the free operation of this service.
          Google may use cookies to serve ads based on your browsing history. You can opt out of
          personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Google&apos;s Ad Settings
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Cookies</h2>
        <p>
          We use cookies only for analytics and advertising purposes. No cookies are used for tracking
          your file processing activities.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us at privacy@breezypdf.com.
        </p>
      </div>
    </div>
  );
}
