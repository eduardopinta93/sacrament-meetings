import Link from 'next/link';

import { auth } from '@/auth';

import NavLinks from './NavLinks';
import SignOutButton from './SignOutButton';

export default async function Header() {
  const session = await auth();

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
          <p className="text-xl font-semibold text-slate-800">
            Sacrament Meeting Planner
          </p>
          <p className="text-sm text-gray-500">
            Example Ward · {currentDate}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <NavLinks />

          {session?.user ? (
            <SignOutButton />
          ) : (
            <Link
              href="/login"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}