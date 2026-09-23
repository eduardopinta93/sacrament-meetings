'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex items-center justify-center gap-4"
    >
      {currentPage > 1 && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-lg bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Previous
        </Link>
      )}

      <span className="font-medium text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-lg bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Next
        </Link>
      )}
    </nav>
  );
}