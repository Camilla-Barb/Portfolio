"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="about-section">
      <section className="p-10 pb-6 bg-gradient-to-t from-white to-yellow-950/10">
        <h1 className="text-3xl font-bold pb-16 pt-10">About.</h1>
        <p className="text-xl md:pl-10 md:pr-10 text-center">
          I am a Frontend Developer based in Milan, Italy. Since 2021 I
          discovered my passion for web development. I started doing self-taught
          projects and studying.
        </p>
        <p className="text-xl font-bold md:pl-10 md:pr-10 text-center pt-5">
          Now I do the job I love.
        </p>
      </section>
      <section className="pie-chart-section pt-10">
        <div className="pie-chart-image flex flex-col justify-center items-center pl-5 pr-5 pb-4 pt-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] relative overflow-hidden w-full">
          <Image
            src="/img/pie-chart.png"
            width={550}
            height={550}
            className="bg-center bg-no-repeat"
            alt=""
            priority
            aria-hidden
          />
        </div>
        <div className="flex flex-col max-lg:justify-center max-lg:items-center lg:flex-row lg:gap-8 pt-8 pb-10 w-full text-center text-xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] ">
          <div className="w-full">
            <h2 className="font-bold pb-2 text-2xl">Student</h2>
            <p className="pt-6 pb-6 p-4">
              Studying is fundamental for me. I love studying and learning new
              things. Studying is an integral part of my work.
            </p>
            <ul className="max-lg:bg-yellow-900/10 p-4">
              <li>Projects</li>
              <li>University</li>
              <li>Books</li>
              <li>Curiosity attitude</li>
              <li>Geek</li>
            </ul>
          </div>
          <div className="max-lg:pt-16 w-full">
            <h2 className="font-bold pb-2 text-2xl">Coder</h2>
            <p className="pt-6 pb-6 p-4">
              Coding is part of my daily life, through this I put into practice
              what I study. Programming has improved my propensity for logical
              thinking.
            </p>
            <ul className="max-lg:bg-yellow-900/10 p-4">
              <li>HTML / CSS</li>
              <li>Bootstrap / Tailwind</li>
              <li>JavaScript / TypeScript / C</li>
              <li>Web Accessibilty</li>
              <li>Next.js</li>
              <li>React JS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
