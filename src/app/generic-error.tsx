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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Something went wrong 😢</h1>
      <p className="text-lg text-gray-600 mb-6">
        An unexpected error occurred. Please try again.
      </p>

      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => reset()}
        >
          Retry
        </button>

        <button
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          onClick={() => router.push("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
