import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${meeting.date}T00:00:00Z`));

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <header className="border-b border-gray-200 pb-5">
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          {meeting.meetingType} meeting
        </p>

        <h1 className="mt-1 text-2xl font-bold text-slate-800">
          {formattedDate}
        </h1>

        <div className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
          <p>
            <span className="font-semibold text-slate-700">Presiding:</span>{' '}
            {meeting.presiding}
          </p>

          <p>
            <span className="font-semibold text-slate-700">Conducting:</span>{' '}
            {meeting.conducting}
          </p>
        </div>
      </header>

      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-slate-800">
            Announcements
          </h2>

          {meeting.announcements && meeting.announcements.length > 0 ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
              {meeting.announcements.map((announcement) => (
                <li key={announcement}>{announcement}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-500">No announcements.</p>
          )}
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">
            Opening
          </h2>

          <div className="mt-2 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Opening Hymn:</span>{' '}
              #{meeting.openingHymn.number} {meeting.openingHymn.title}
            </p>

            <p>
              <span className="font-semibold">Opening Prayer:</span>{' '}
              {meeting.openingPrayer}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">
            Ward Business
          </h2>

          {meeting.wardBusiness.length > 0 ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
              {meeting.wardBusiness.map((item, index) => (
                <li key={`${item.description}-${index}`}>
                  {item.description}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-500">No ward business.</p>
          )}

          <p className="mt-3 text-gray-700">
            <span className="font-semibold">Stake Business:</span>{' '}
            {meeting.stakeBusiness ? 'Yes' : 'No'}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">
            Sacrament
          </h2>

          <p className="mt-2 text-gray-700">
            <span className="font-semibold">Sacrament Hymn:</span>{' '}
            #{meeting.sacramentHymn.number} {meeting.sacramentHymn.title}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">
            Program
          </h2>

          <div className="mt-2 space-y-3">
            {meeting.speakers.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="rounded-md bg-slate-50 p-3"
              >
                <p className="font-semibold text-slate-800">
                  {item.type === 'musical-number'
                    ? 'Musical Number'
                    : 'Speaker'}
                </p>

                <p className="text-gray-700">{item.name}</p>

                {item.topic && (
                  <p className="text-sm text-gray-500">
                    {item.type === 'speaker' ? 'Topic: ' : 'Selection: '}
                    {item.topic}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">
            Closing
          </h2>

          <div className="mt-2 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Closing Hymn:</span>{' '}
              #{meeting.closingHymn.number} {meeting.closingHymn.title}
            </p>

            <p>
              <span className="font-semibold">Closing Prayer:</span>{' '}
              {meeting.closingPrayer}
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}