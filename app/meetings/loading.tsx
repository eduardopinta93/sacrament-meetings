export default function Loading() {
  return (
    <div
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      role="status"
      aria-live="polite"
    >
      <div className="animate-pulse space-y-4">
        <div className="h-7 w-48 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-24 rounded bg-gray-200" />
      </div>

      <span className="sr-only">Loading meetings...</span>
    </div>
  );
}