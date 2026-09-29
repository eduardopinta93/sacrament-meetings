import { MeetingForm } from '@/components/MeetingForm';
import { getMeetingById } from '@/lib/meetings-db';
import { notFound } from 'next/navigation';

export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meetingId = Number(id);

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
  notFound();
}

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">
        Edit Meeting
      </h1>

      <MeetingForm meeting={meeting} />
    </main>
  );
}