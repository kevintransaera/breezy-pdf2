import { PageRange } from '@/types';

/**
 * Parse a page range string like "1-3, 5, 7-10" into an array of PageRange objects.
 * Pages are 1-indexed. Returns sorted, de-duplicated ranges clamped to totalPages.
 */
export function parsePageRanges(input: string, totalPages: number): PageRange[] {
  const ranges: PageRange[] = [];
  const parts = input.split(',').map(s => s.trim()).filter(Boolean);

  for (const part of parts) {
    if (part.includes('-')) {
      const [startStr, endStr] = part.split('-').map(s => s.trim());
      const start = Math.max(1, parseInt(startStr, 10));
      const end = Math.min(totalPages, parseInt(endStr, 10));
      if (!isNaN(start) && !isNaN(end) && start <= end) {
        ranges.push({ start, end });
      }
    } else {
      const page = parseInt(part, 10);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        ranges.push({ start: page, end: page });
      }
    }
  }

  return ranges;
}

/**
 * Expand PageRange[] into a flat sorted array of unique 1-indexed page numbers.
 */
export function expandPageRanges(ranges: PageRange[]): number[] {
  const pages = new Set<number>();
  for (const range of ranges) {
    for (let i = range.start; i <= range.end; i++) {
      pages.add(i);
    }
  }
  return Array.from(pages).sort((a, b) => a - b);
}
