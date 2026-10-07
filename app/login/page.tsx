import { AuthError } from 'next-auth';

import { signIn } from '@/auth';

export default function LoginPage() {
  async function authenticate(formData: FormData) {
    'use server';

    try {
      await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        redirectTo: '/meetings/new',
      });
    } catch (error) {
      if (error instanceof AuthError) {
        throw new Error('Invalid email or password.');
      }

      throw error;
    }
  }

  return (
    <section className="mx-auto max-w-md">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Bishopric Login
        </h1>

        <p className="mt-2 text-gray-600">
          Sign in to manage sacrament meeting schedules and details.
        </p>

        <form action={authenticate} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-medium text-slate-800"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block font-medium text-slate-800"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-800 px-4 py-2 font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}