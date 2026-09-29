'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="rounded-lg border border-red-200 bg-red-50 p-6">
        <h1 className="text-2xl font-bold text-red-900">
          Something went wrong
        </h1>

        <p className="mt-2 text-red-800">
          We couldn&apos;t complete your request. Please try again.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700"
          >
            Try Again
          </button>

          <Link
            href="/meetings"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 hover:bg-slate-50"
          >
            Back to Meetings
          </Link>
        </div>

        {error.digest && (
          <p className="mt-4 text-xs text-red-700">
            Error reference: {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}