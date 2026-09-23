import { redirect } from 'next/navigation';

import { getMeetingsByDate } from '@/lib/meetings-db';

export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const sundayDate = [
    sunday.getFullYear(),
    String(sunday.getMonth() + 1).padStart(2, '0'),
    String(sunday.getDate()).padStart(2, '0'),
  ].join('-');

  const meetings = await getMeetingsByDate(sundayDate);
  const currentMeeting = meetings[0];

  if (!currentMeeting) {
    redirect('/meetings');
  }

  redirect(`/meetings/${currentMeeting.id}`);
}