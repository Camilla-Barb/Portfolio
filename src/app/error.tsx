"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function GenericError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("Unexpected Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{t("error.title")}</h1>
      <p className="text-lg mb-6">{t("error.paragraph")}</p>

      <div className="flex gap-4">
        <button className="btn" onClick={() => reset()}>
          {t("error.retry")}
        </button>

        <button className="btn" onClick={() => router.push("/")}>
          {t("error.home")}
        </button>
      </div>
    </div>
  );
}
