'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  addMeeting,
  updateMeeting as updateMeetingInDb,
  deleteMeeting as deleteMeetingFromDb,
} from '@/lib/meetings-db';
import type { MeetingType } from '@/lib/types';

const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Please select a meeting date.'),
  meetingType: z.enum([
    'testimony',
    'regular',
    'stake',
    'general',
    'special',
  ]),
  presiding: z.string().trim().min(1, 'Presiding leader is required.'),
  conducting: z.string().trim().min(1, 'Conducting leader is required.'),
  openingHymnNumber: z.coerce
    .number()
    .int()
    .positive('Opening hymn number is required.'),
  openingHymnTitle: z.string().trim().min(1, 'Opening hymn title is required.'),
  openingPrayer: z.string().trim().min(1, 'Opening prayer is required.'),
  sacramentHymnNumber: z.coerce
    .number()
    .int()
    .positive('Sacrament hymn number is required.'),
  sacramentHymnTitle: z
    .string()
    .trim()
    .min(1, 'Sacrament hymn title is required.'),
  closingHymnNumber: z.coerce
    .number()
    .int()
    .positive('Closing hymn number is required.'),
  closingHymnTitle: z.string().trim().min(1, 'Closing hymn title is required.'),
  closingPrayer: z.string().trim().min(1, 'Closing prayer is required.'),
});

export type MeetingFormState = {
  errors?: Record<string, string[]>;
  message?: string;
};

export async function createMeeting(
  _prevState: MeetingFormState,
  formData: FormData
): Promise<MeetingFormState> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    openingPrayer: formData.get('openingPrayer'),
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
    closingPrayer: formData.get('closingPrayer'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields.',
    };
  }

  const data = validatedFields.data;

    try {
    await addMeeting({
      date: data.date,
      meetingType: data.meetingType as MeetingType,
      presiding: data.presiding,
      conducting: data.conducting,
      announcements: [],
      openingHymn: {
        number: data.openingHymnNumber,
        title: data.openingHymnTitle,
      },
      openingPrayer: data.openingPrayer,
      wardBusiness: [],
      stakeBusiness: false,
      sacramentHymn: {
        number: data.sacramentHymnNumber,
        title: data.sacramentHymnTitle,
      },
      speakers: [],
      closingHymn: {
        number: data.closingHymnNumber,
        title: data.closingHymnTitle,
      },
      closingPrayer: data.closingPrayer,
    });
  } catch (error) {
    console.error('Failed to create meeting:', error);
    throw new Error('Unable to create the meeting. Please try again.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeeting(
  id: number,
  _prevState: MeetingFormState,
  formData: FormData
): Promise<MeetingFormState> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    openingPrayer: formData.get('openingPrayer'),
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
    closingPrayer: formData.get('closingPrayer'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the highlighted fields.',
    };
  }

  const data = validatedFields.data;

    try {
    await updateMeetingInDb(id, {
      date: data.date,
      meetingType: data.meetingType as MeetingType,
      presiding: data.presiding,
      conducting: data.conducting,
      openingHymn: {
        number: data.openingHymnNumber,
        title: data.openingHymnTitle,
      },
      openingPrayer: data.openingPrayer,
      sacramentHymn: {
        number: data.sacramentHymnNumber,
        title: data.sacramentHymnTitle,
      },
      closingHymn: {
        number: data.closingHymnNumber,
        title: data.closingHymnTitle,
      },
      closingPrayer: data.closingPrayer,
    });
  } catch (error) {
    console.error(`Failed to update meeting ${id}:`, error);
    throw new Error('Unable to update the meeting. Please try again.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function deleteMeeting(id: number): Promise<void> {
  try {
    await deleteMeetingFromDb(id);
  } catch (error) {
    console.error(`Failed to delete meeting ${id}:`, error);
    throw new Error('Unable to delete the meeting. Please try again.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}