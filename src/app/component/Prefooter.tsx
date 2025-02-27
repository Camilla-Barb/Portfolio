"use client";

import Link from "next/link";

export default function Prefooter() {
  return (
    <section className="w-full mt-10 bg-yellow-900/10 flex justify-end items-center p-2 lg:p-4">
      <article className="pr-4 font-bold">
        <Link href="/pages/contact" className="hover:underline ">
          Contact me
        </Link>
      </article>
    </section>
  );
}
