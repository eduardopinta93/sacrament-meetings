import { signOut } from '@/auth';

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';

        await signOut({ redirectTo: '/login' });
      }}
    >
      <button
        type="submit"
        className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
      >
        Sign Out
      </button>
    </form>
  );
}