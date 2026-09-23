'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
  type="search"
  placeholder="Search by speaker, leader, or meeting type..."
  defaultValue={searchParams.get('query')?.toString()}
  onChange={(e) => handleSearch(e.target.value)}
  aria-label="Search meetings"
  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none placeholder:text-gray-500 focus:border-slate-600 focus:ring-2 focus:ring-slate-200"
/>
  );
}