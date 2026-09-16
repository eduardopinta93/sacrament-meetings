import { headers } from 'next/headers';

import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';

async function getMeetings(): Promise<SacramentMeeting[]> {
  const headerList = await headers();
  const host = headerList.get('host');

  if (!host) {
    throw new Error('Unable to determine application host');
  }

  const protocol =
    process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const response = await fetch(`${protocol}://${host}/api/meetings`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch meetings');
  }

  return (await response.json()) as SacramentMeeting[];
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Sacrament Meetings
        </h1>

        <p className="mt-2 text-gray-600">
          View current and past sacrament meeting programs.
        </p>
      </div>

      <div className="space-y-4">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}