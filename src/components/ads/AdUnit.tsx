'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet
    }
  }, []);

  // Don't render in development
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className={`flex items-center justify-center border border-dashed border-stone-300 text-[10px] text-stone-400 tracking-widest uppercase ${className}`}>
        Ad Space
      </div>
    );
  }

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle block ${className}`}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
