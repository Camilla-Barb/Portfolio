"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GenericError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error("Unexpected Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Ops! Something went wrong</h1>
      <p className="text-lg mb-6">
        An unexpected error occurred. Please try again.
      </p>

      <div className="flex gap-4">
        <button className="btn" onClick={() => reset()}>
          Retry
        </button>

        <button className="btn" onClick={() => router.push("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
}
