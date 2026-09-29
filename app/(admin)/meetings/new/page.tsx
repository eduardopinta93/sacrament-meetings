import { MeetingForm } from '@/components/MeetingForm';

export default function NewMeetingPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">
        Create Meeting
      </h1>

      <MeetingForm />
    </main>
  );
}