import Link from 'next/link';
import MeetingCard from '@/components/MeetingCard';
import { MeetingSearch } from '@/components/MeetingSearch';
import { Pagination } from '@/components/Pagination';
import {
  getMeetings,
  getMeetingsTotalPages,
} from '@/lib/meetings-db';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sacrament Meetings | Sacrament Meeting Planner',
  description:
    'View current and past sacrament meeting programs and schedules.',
};

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
  getMeetings(query, currentPage),
  getMeetingsTotalPages(query),
]);

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Sacrament Meetings
          </h1>

          <p className="mt-2 text-gray-600">
            View current and past sacrament meeting programs.
          </p>
        </div>

        <Link
          href="/meetings/new"
          className="rounded-lg bg-slate-800 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Create Meeting
        </Link>
      </div>

      <div className="mb-6">
        <MeetingSearch />
      </div>

      <div className="space-y-4">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </section>
  );
}