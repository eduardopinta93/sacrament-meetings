import Link from 'next/link';

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
        <Link
          href="/meetings"
          className="text-sm font-medium text-slate-700 hover:text-slate-950"
        >
          All Meetings
        </Link>

        <Link
          href="/meetings/current"
          className="text-sm font-medium text-slate-700 hover:text-slate-950"
        >
          Current Meeting
        </Link>
      </div>

      {children}
    </div>
  );
}