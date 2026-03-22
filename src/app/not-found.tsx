import Link from 'next/link';
import { tools } from '@/lib/tools';
import ToolIcon from '@/components/shared/ToolIcon';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">404</p>
      <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-3 tracking-tight">
        Page not found
      </h1>
      <p className="text-sm text-stone-500 mb-12 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist. Try one of our free PDF tools instead.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-200 border border-stone-200 max-w-2xl mx-auto">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className="group flex flex-col items-center p-6 bg-stone-50 hover:bg-white transition-colors"
          >
            <div className="text-stone-400 group-hover:text-stone-900 transition-colors mb-2">
              <ToolIcon name={tool.icon} className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-stone-900">{tool.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
