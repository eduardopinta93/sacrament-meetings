import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid items-center gap-8 rounded-xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Sunday Meeting Planning
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Sacrament Meeting Planner
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Plan, review, and access sacrament meeting programs for current
            and past Sundays.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/meetings/current"
              className="rounded-md bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              View Current Meeting
            </Link>

            <Link
              href="/meetings"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-gray-50"
            >
              View All Meetings
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/globe.svg"
            alt="Globe illustration representing the ward community"
            width={300}
            height={300}
            priority
            className="h-auto w-full max-w-xs"
          />
        </div>
      </section>
    </div>
  );
}
