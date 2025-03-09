"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="p-8 pb-6 bg-gradient-to-t from-white to-yellow-950/10">
        <h1 className="text-3xl font-bold pb-10 pt-10 pl-6">About.</h1>
        <p className="text-xl md:pl-10 md:pr-10 text-center">
          I am a Frontend Developer based in Milan, Italy. I have enjoyed
          turning complex problems into simple, through logic and reasoning.
          Since 2021 I discovered my passion for web development.
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
              Studying is essential and an integral part of my work. I love
              studying and learning new things through which I look for new
              ideas and a continuous personal improvement.
            </p>
            <ul className="max-lg:bg-yellow-900/10 p-4">
              <li>Personal projects</li>
              <li>University</li>
              <li>Books & Documentation</li>
              <li>Curiosity attitude</li>
              <li>Geek</li>
            </ul>
          </div>
          <div className="max-lg:pt-16 w-full">
            <h2 className="font-bold pb-2 text-2xl">Coder</h2>
            <p className="pt-6 pb-6 p-4">
              Coding is part of my daily life, through this I put into practice
              what I study. Programming is not just a job, it allows you to
              learn a way of thinking that makes everyday life easier.
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
    </motion.div>
  );
}
