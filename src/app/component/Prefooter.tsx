"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Prefooter() {
  const { t } = useTranslation();

  return (
    <section className="prefooter-section w-full mt-10 bg-yellow-900/10 flex justify-end items-center p-2 lg:p-4">
      <article className="pr-4 font-bold">
        <Link href="/pages/contact" className="hover:underline" prefetch={true}>
          {t("prefooter.goToContactBtn")}
        </Link>
      </article>
    </section>
  );
}
