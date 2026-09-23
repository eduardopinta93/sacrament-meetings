import { NextRequest, NextResponse } from 'next/server';

import { getMeetings, getMeetingsByDate } from '@/lib/meetings-db';
import type { SacramentMeeting } from '@/lib/types';

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date');

  const meetings: SacramentMeeting[] = date
    ? await getMeetingsByDate(date)
    : await getMeetings();

  return NextResponse.json(meetings);
}