'use client';

import { useActionState } from 'react';

import {
  createMeeting,
  updateMeeting,
  type MeetingFormState,
} from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

const initialState: MeetingFormState = {
  errors: {},
  message: '',
};

type MeetingFormProps = {
  meeting?: SacramentMeeting;
};

export function MeetingForm({ meeting }: MeetingFormProps) {
  const isEditing = Boolean(meeting);

  const action = meeting
    ? updateMeeting.bind(null, meeting.id)
    : createMeeting;

  const [state, formAction, pending] = useActionState(
    action,
    initialState
  );

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="date" className="block font-medium">
          Meeting date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          defaultValue={meeting?.date ?? ''}
          aria-describedby="date-error"
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
        />
        <div id="date-error" aria-live="polite" aria-atomic="true">
          {state.errors?.date?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-700">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="meetingType" className="block font-medium">
          Meeting type
        </label>
        <select
          id="meetingType"
          name="meetingType"
          defaultValue={meeting?.meetingType ?? ''}
          aria-describedby="meetingType-error"
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
        >
          <option value="" disabled>
            Select a meeting type
          </option>
          <option value="testimony">Testimony</option>
          <option value="regular">Regular</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
          <option value="special">Special</option>
        </select>
        <div id="meetingType-error" aria-live="polite" aria-atomic="true">
          {state.errors?.meetingType?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-700">
              {error}
            </p>
          ))}
        </div>
      </div>

      <TextField
        name="presiding"
        label="Presiding"
        defaultValue={meeting?.presiding}
        errors={state.errors?.presiding}
      />

      <TextField
        name="conducting"
        label="Conducting"
        defaultValue={meeting?.conducting}
        errors={state.errors?.conducting}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <NumberField
          name="openingHymnNumber"
          label="Opening hymn number"
          defaultValue={meeting?.openingHymn.number}
          errors={state.errors?.openingHymnNumber}
        />

        <TextField
          name="openingHymnTitle"
          label="Opening hymn title"
          defaultValue={meeting?.openingHymn.title}
          errors={state.errors?.openingHymnTitle}
        />
      </div>

      <TextField
        name="openingPrayer"
        label="Opening prayer"
        defaultValue={meeting?.openingPrayer}
        errors={state.errors?.openingPrayer}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <NumberField
          name="sacramentHymnNumber"
          label="Sacrament hymn number"
          defaultValue={meeting?.sacramentHymn.number}
          errors={state.errors?.sacramentHymnNumber}
        />

        <TextField
          name="sacramentHymnTitle"
          label="Sacrament hymn title"
          defaultValue={meeting?.sacramentHymn.title}
          errors={state.errors?.sacramentHymnTitle}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <NumberField
          name="closingHymnNumber"
          label="Closing hymn number"
          defaultValue={meeting?.closingHymn.number}
          errors={state.errors?.closingHymnNumber}
        />

        <TextField
          name="closingHymnTitle"
          label="Closing hymn title"
          defaultValue={meeting?.closingHymn.title}
          errors={state.errors?.closingHymnTitle}
        />
      </div>

      <TextField
        name="closingPrayer"
        label="Closing prayer"
        defaultValue={meeting?.closingPrayer}
        errors={state.errors?.closingPrayer}
      />

      {state.message && (
        <p aria-live="polite" className="text-sm text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-slate-800 px-5 py-3 font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending
          ? isEditing
            ? 'Saving...'
            : 'Creating...'
          : isEditing
            ? 'Save Changes'
            : 'Create Meeting'}
      </button>
    </form>
  );
}

function TextField({
  name,
  label,
  defaultValue = '',
  errors,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  errors?: string[];
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="block font-medium">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="text"
        defaultValue={defaultValue}
        aria-describedby={errorId}
        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
      />

      <div id={errorId} aria-live="polite" aria-atomic="true">
        {errors?.map((error) => (
          <p key={error} className="mt-1 text-sm text-red-700">
            {error}
          </p>
        ))}
      </div>
    </div>
  );
}

function NumberField({
  name,
  label,
  defaultValue,
  errors,
}: {
  name: string;
  label: string;
  defaultValue?: number;
  errors?: string[];
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="block font-medium">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="number"
        min="1"
        defaultValue={defaultValue}
        aria-describedby={errorId}
        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
      />

      <div id={errorId} aria-live="polite" aria-atomic="true">
        {errors?.map((error) => (
          <p key={error} className="mt-1 text-sm text-red-700">
            {error}
          </p>
        ))}
      </div>
    </div>
  );
}