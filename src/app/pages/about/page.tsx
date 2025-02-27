"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="about-section p-8 bg-gradient-to-t from-white to-yellow-950/10">
      <h1 className="text-3xl font-bold pb-10 pt-10">About.</h1>

      <Image
        src="/img/pie-chart.png"
        width={850}
        height={850}
        className="bg-center bg-no-repeat"
        alt=""
        priority
        aria-hidden
      />
    </section>
  );
}
