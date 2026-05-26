"use client";

export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white dark:bg-black px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 h-12 w-1/3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="h-52 rounded-3xl bg-zinc-200 dark:bg-zinc-800" />
              <div className="mt-4 space-y-3">
                <div className="h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 w-5/6" />
                <div className="h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 w-full" />
                <div className="h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 w-3/4" />
                <div className="h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
