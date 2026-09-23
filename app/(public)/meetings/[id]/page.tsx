import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getMeeting(
  id: string
): Promise<SacramentMeeting | null> {
  const headerList = await headers();
  const host = headerList.get('host');

  if (!host) {
    throw new Error('Unable to determine application host');
  }

  const protocol =
    process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const response = await fetch(
    `${protocol}://${host}/api/meetings/${id}`,
    {
      cache: 'no-store',
    }
  );

  if (response.status === 404 || response.status === 400) {
    return null;
  }

  if (!response.ok) {
    throw new Error('Failed to fetch meeting');
  }

  return (await response.json()) as SacramentMeeting;
}

export default async function MeetingPage({
  params,
}: MeetingPageProps) {
  const { id } = await params;
  const meeting = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}