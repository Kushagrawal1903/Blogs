"use client";

import { useEffect } from "react";

export default function Error({
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
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-display font-bold text-text-primary mb-3">
        Something went wrong
      </h1>
      <p className="text-text-secondary max-w-md mb-8 leading-relaxed">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          type="button"
          className="px-5 py-2.5 bg-text-primary text-white text-sm font-medium rounded-[var(--radius-md)] hover:bg-accent transition-colors cursor-pointer"
        >
          Try Again
        </button>
        <a
          href="/"
          className="px-5 py-2.5 border border-border text-text-secondary text-sm font-medium rounded-[var(--radius-md)] hover:text-text-primary hover:border-text-primary transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
