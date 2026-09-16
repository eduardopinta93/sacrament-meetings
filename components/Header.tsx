import NavLinks from './NavLinks';

export default function Header() {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">
            Sacrament Meeting Planner
          </h1>
          <p className="text-sm text-gray-500">
            Example Ward · {currentDate}
          </p>
        </div>

        <NavLinks />
      </div>
    </header>
  );
}