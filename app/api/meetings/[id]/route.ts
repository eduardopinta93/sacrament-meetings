import { NextResponse } from 'next/server';

import { getMeetingById } from '@/lib/meetings-db';
import type { SacramentMeeting } from '@/lib/types';

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  context: RouteContext
) {
  const { id } = await context.params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    return NextResponse.json(
      { error: 'Invalid meeting ID' },
      { status: 400 }
    );
  }

  const meeting: SacramentMeeting | null =
    getMeetingById(meetingId);

  if (!meeting) {
    return NextResponse.json(
      { error: 'Meeting not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(meeting);
}