import AdUnit from '@/components/ads/AdUnit';

interface ToolPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolPageLayout({ title, description, children }: ToolPageLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
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
    </article>
  );
}
