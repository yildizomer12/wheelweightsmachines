'use client';

import { useEffect } from 'react';

export default function LocalizedError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">
          Bir şeyler yanlış gitti
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => reset()}
            className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
          >
            Tekrar dene
          </button>
          <a
            href="/"
            className="rounded-md bg-gray-500 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-600"
          >
            Ana sayfaya dön
          </a>
        </div>
      </div>
    </div>
  );
}
