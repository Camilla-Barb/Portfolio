"use client";
import { useEffect, useState } from "react";
import Card from "./component/Card";
import {
  TvIcon,
  BookOpenIcon,
  LightBulbIcon,
  CheckCircleIcon,
} from "@heroicons/react/16/solid";

// max-sm:bg-[center_bottom_-50px]

export default function Homepage() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = "/img/hero-bg.png";
    bgImage.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="bg-white relative text-indigo font-[family-name:var(--font-geist-sans)] w-full ">
      <div
        className={`${
          imageLoaded
            ? "opacity-1 transition-opacity duration-500"
            : "opacity-0"
        } relative bg-gradient-to-b from-purple-500 via-pink-500 to-transparent w-full`}
      >
        <div
          className={`${
            imageLoaded
              ? "opacity-70 transition-opacity duration-500"
              : "opacity-0"
          } bg-[url(/img/hero-bg.png)] w-full bg-no-repeat bg-cover bg-center min-h-[650px] max-h-[800px] md:bg-bottom`}
        >
          <svg
            className="max-sm:block hidden absolute bottom-0 w-full"
            stroke="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="white"
              d="M0,288 C480,160 960,160 1440,288 L1440,400 L0,400 Z"
            ></path>
          </svg>
          <section className="hero-section p-10 gap-16 sm:p-20">
            <article className="relative z-3 flex flex-col justify-start items-start gap-2 text-2xl">
              <div className="hero-text-container before:content-[''] before:block before:w-1/3 before:h-[4px] before:bg-indigo before:mb-2">
                <h1 className="font-bold">Frontend Developer.</h1>
                <p>Camilla Barbieri</p>
              </div>
              <div className="inner-content_secondary pt-5">
                <p className="text-sm">
                  I am a Front-end Developer interested in everything that
                  orbits the scientific and IT world. Curious and enterprising,
                  I have more than two years of experience in developing
                  e-commerce websites.
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>
      <section className="flex flex-col justify-start items-start gap-2 text-2xl pt-5">
        <div className="section-container p-4 w-full">
          <h2 className="text-center font-bold">Skills</h2>

          <ul className="cards-container flex flex-col lg:flex-row gap-6 p-6">
            <Card
              title="Strategy"
              icon={<LightBulbIcon width={40} height={40} />}
            />
            <Card
              title="Study"
              icon={<BookOpenIcon width={40} height={40} />}
            />
            <Card
              title="Development"
              icon={<TvIcon width={40} height={40} />}
            />
            <Card
              title="Accessibility"
              icon={<CheckCircleIcon width={40} height={40} />}
            />
          </ul>
        </div>
      </section>
    </div>
  );
}
