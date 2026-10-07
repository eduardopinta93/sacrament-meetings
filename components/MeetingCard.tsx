import Link from 'next/link';

import { auth } from '@/auth';
import { deleteMeeting } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default async function MeetingCard({ meeting }: MeetingCardProps) {
  const session = await auth();

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${meeting.date}T00:00:00Z`));

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            {meeting.meetingType} meeting
          </p>

          <h2 className="mt-1 text-lg font-semibold text-slate-800">
            {formattedDate}
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Conducting: {meeting.conducting}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href={`/meetings/${meeting.id}`}
            className="rounded-md bg-slate-800 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-slate-700"
          >
            View details
          </Link>

          {session?.user && (
            <>
              <Link
                href={`/meetings/${meeting.id}/edit`}
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Edit
              </Link>

              <form action={deleteMeeting.bind(null, meeting.id)}>
                <button
                  type="submit"
                  className="rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50"
                >
                  Delete
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </article>
  );
}