import Link from 'next/link';
import AdUnit from '@/components/ads/AdUnit';
import { tools } from '@/lib/tools';
import ToolIcon from '@/components/shared/ToolIcon';

export interface FaqItem {
  question: string;
  answer: string;
}

interface ToolPageLayoutProps {
  title: string;
  slug: string;
  description: string;
  children: React.ReactNode;
  faq?: FaqItem[];
  howTo?: { description: string; steps: string[] };
}

export default function ToolPageLayout({ title, slug, description, children, faq, howTo }: ToolPageLayoutProps) {
  const relatedTools = tools.filter((t) => t.slug !== slug).slice(0, 3);

  const faqJsonLd = faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  const howToJsonLd = howTo
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to ${title}`,
        description: howTo.description,
        step: howTo.steps.map((step, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          text: step,
        })),
        tool: {
          '@type': 'HowToTool',
          name: 'Breezy PDF',
        },
      }
    : null;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://breezy-pdf.com' },
      { '@type': 'ListItem', position: 2, name: title, item: `https://breezy-pdf.com/${slug}` },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}

      <div className="text-center mb-14">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-3 tracking-tight">{title}</h1>
        <p className="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">{description}</p>
      </div>

      {/* Ad: below title */}
      <AdUnit slot="top-banner" format="horizontal" className="mb-8 w-full max-w-[728px] mx-auto h-[90px]" />

      <div className="space-y-8">
        {children}
      </div>

      {/* Ad: after processing */}
      <AdUnit slot="bottom-banner" format="horizontal" className="mt-8 w-full max-w-[728px] mx-auto h-[90px]" />

      <div className="mt-14 flex justify-center">
        <div className="inline-flex items-center gap-2 text-xs tracking-wide text-stone-500 border border-stone-200 px-4 py-2 rounded-full">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          Your files never leave your device
        </div>
      </div>

      {/* How to section — crawlable content for SEO */}
      {howTo && (
        <section className="mt-16 border-t border-stone-200 pt-12">
          <h2 className="text-lg font-medium text-stone-900 mb-4">
            How to {title}
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed mb-6">{howTo.description}</p>
          <ol className="space-y-3">
            {howTo.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-600">
                <span className="text-stone-300 tabular-nums text-xs mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* FAQ section — targets "People also ask" in Google */}
      {faq && faq.length > 0 && (
        <section className="mt-12 border-t border-stone-200 pt-12">
          <h2 className="text-lg font-medium text-stone-900 mb-6">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faq.map((item, i) => (
              <div key={i}>
                <dt className="text-sm font-medium text-stone-900 mb-1">{item.question}</dt>
                <dd className="text-sm text-stone-500 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Related tools — internal cross-linking for SEO */}
      <section className="mt-12 border-t border-stone-200 pt-12">
        <h2 className="text-lg font-medium text-stone-900 mb-6">Other PDF Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
          {relatedTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="group flex flex-col p-6 bg-stone-50 hover:bg-white transition-colors"
            >
              <div className="text-stone-400 group-hover:text-stone-900 transition-colors mb-3">
                <ToolIcon name={tool.icon} className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-stone-900">{tool.name}</span>
              <span className="text-xs text-stone-400 mt-1">{tool.description}</span>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/#tools" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">
            View all tools &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}
