import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Breezy PDF terms of service.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Service Description</h2>
        <p>
          Breezy PDF provides free, browser-based PDF processing tools. All file processing occurs
          locally in your web browser — no files are uploaded to or stored on our servers.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Use at Your Own Risk</h2>
        <p>
          While we strive to provide reliable tools, Breezy PDF is provided &quot;as is&quot; without
          warranties of any kind. We are not responsible for any data loss or file corruption that may
          occur during processing. Always keep backup copies of your original files.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Acceptable Use</h2>
        <p>
          You agree to use Breezy PDF only for lawful purposes. You may not use our service to process
          files that you do not have the right to modify or distribute.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Intellectual Property</h2>
        <p>
          The Breezy PDF name, logo, and website design are our intellectual property. The tools
          themselves are built using open-source libraries and your processed files remain entirely yours.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of Breezy PDF constitutes
          acceptance of any changes.
        </p>
      </div>
    </div>
  );
}
