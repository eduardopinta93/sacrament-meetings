import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Meeting not found
        </h1>

        <p className="mt-2 text-gray-600">
          The meeting you&apos;re trying to edit doesn&apos;t exist.
        </p>

        <Link
          href="/meetings"
          className="mt-6 inline-block rounded-lg bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700"
        >
          Back to Meetings
        </Link>
      </div>
    </main>
  );
}