"use client";
import { useEffect, useState } from "react";
import Card from "./component/Card";
import {
  TvIcon,
  BookOpenIcon,
  LightBulbIcon,
  CheckCircleIcon,
} from "@heroicons/react/16/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const bgImage = new window.Image();
    bgImage.src = "/img/hero-bg.png";
    bgImage.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="bg-white relative text-coffee font-[family-name:var(--font-geist-sans)] w-full">
      {/* hero section */}
      <section
        className={`${
          imageLoaded
            ? "opacity-1 transition-opacity duration-500"
            : "opacity-0"
        } relative w-full bg-gradient-to-t from-yellow-950/70 to-yellow-900/40`}
      >
        <div
          className={`${
            imageLoaded
              ? " opacity-90 transition-opacity duration-500"
              : "opacity-0"
          } max-md:bg-[url(/img/bg-mobile.png)] md:bg-[url(/img/bg-desktop.png)] w-full bg-no-repeat bg-cover bg-bottom max-md:min-h-[350px] min-h-[500px] md:bg-center xl:p-20`}
        >
          {/* <svg
            className="max-sm:hidden block absolute bottom-0 w-full"
            stroke="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="white"
              d="M0,288 C480,160 960,160 1440,288 L1440,400 L0,400 Z"
            ></path>
          </svg> */}
          <article className="hero-section absolute shadow-yellow-950 w-max bg-white p-2 pl-5 pr-10 pt-3 md:pr-32 md:pt-5 md:pb-5 left-0 bottom-5 md:top-20 md:bottom-auto xl:top-10 xl:relative xl:p-20  z-50">
            <div className="hero-text-container before:content-[''] before:block before:w-1/3 before:h-[4px] before:bg-coffee before:mb-2 z-2">
              <h1 className="font-bold text-xl md:text-2xl xl:pb-2">
                Frontend Developer.
              </h1>
              <p className="max-sm:text-lg lg:text-xl">Camilla Barbieri</p>
            </div>
          </article>
        </div>
      </section>
      {/* paragraph section */}
      <section className="p-8 md:p-16">
        <article>
          <p className="text-sm text-center">
            I am a front-end developer interested in everything that orbits the
            scientific and IT world. I am working in retail projects of
            different brands, from luxury and fashion to beauty and cosmetics.
          </p>
        </article>
      </section>
      {/* cards section */}
      <section className="text-xl pt-2 pb-5 md:p-10 md:pt-4 w-full bg-yellow-900/10">
        <h2 className="text-center font-bold p-3">Strengths</h2>
        <div className="section-container w-full">
          <Swiper
            slidesPerView="auto"
            spaceBetween={12}
            breakpoints={{
              768: {
                enabled: false,
                slidesPerView: 4,
                spaceBetween: 20,
                pagination: false,
                navigation: true,
              },
            }}
          >
            <SwiperSlide>
              <Card
                title="Algorithms"
                icon={<LightBulbIcon width={30} height={30} aria-hidden />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Development"
                icon={<TvIcon width={30} height={30} aria-hidden />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Accessibility"
                icon={<CheckCircleIcon width={30} height={30} aria-hidden />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Study"
                icon={<BookOpenIcon width={30} height={30} aria-hidden />}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* TextImage section */}
      <section className="mt-10 p-12 grid md:grid-cols-2 gap-10 bg-white w-full min-h-[600px] h-full">
        <figure className="relative max-md:aspect-square aspect-3/2">
          <Image
            src="/img/imageCol.png"
            objectFit="cover"
            layout="fill"
            className="bg-center bg-no-repeat"
            alt=""
            priority
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-950/30 to-transparent"></div>
        </figure>
        <article className="flex flex-col gap-8 justify-center text-center md:p-10 w-full">
          <p>
            I maintain and implement front end web solutions and architectures,
            through the writing of optimal algorithms and clean code, to
            guarantee the website functionalities. I take care of the website
            performance and web accessibility, in accordance with WCAG 2.2
            guidelines. I had a strong interest on the Generative AI on which I
            keep myself updated to learn new technologies.
          </p>
          <Link
            href="/pages/about"
            className="self-center p-2 rounded-xl font-bold text-coffee bg-yellow-900/10"
          >
            Find out more
          </Link>
        </article>
      </section>
    </div>
  );
}
