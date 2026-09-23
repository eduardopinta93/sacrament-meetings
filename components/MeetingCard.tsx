import Link from 'next/link';

import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
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

        <Link
          href={`/meetings/${meeting.id}`}
          className="rounded-md bg-slate-800 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          View details
        </Link>
      </div>
    </article>
  );
}