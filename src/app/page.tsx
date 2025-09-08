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
import { useTranslation } from "react-i18next";
import About from "./component/About";
import Contact from "./component/Contact";

export default function Homepage() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const { t } = useTranslation();

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
          <article className="hero-section absolute shadow-yellow-950 sm:w-max bg-white p-2 pl-5 pr-10 pt-3 md:pr-32 md:pt-5 md:pb-5 left-0 bottom-5 md:top-20 md:bottom-auto xl:top-10 xl:relative xl:p-20  z-50 flex items-center gap-10">
            <div className="relative flex items-center justify-center">
              <div className="absolute max-md:w-28 max-md:h-28 w-40 h-40 bg-yellow-900/10 rounded-full z-0"></div>
              <figure>
                <Image
                  src="/img/me.png"
                  alt="Camilla Barbieri"
                  className="relative z-10 max-md:w-20 max-md:h-24 w-32 h-36 rounded-full object-cover"
                  width={200}
                  height={200}
                />
              </figure>
            </div>

            <div className="hero-text-container before:content-[''] before:block before:w-1/3 before:h-[4px] before:bg-coffee before:mb-2 z-2">
              <h1 className="font-bold text-xl md:text-2xl xl:pb-2">
                {t("homepage.job")}
              </h1>
              <p className="max-sm:text-lg lg:text-xl">Camilla Barbieri</p>
            </div>
          </article>
        </div>
      </section>
      {/* paragraph section */}
      <section className="p-8 md:p-16">
        <article>
          <p className="text-center">{t("homepage.presentation")}</p>
        </article>
      </section>
      {/* cards section */}
      <section className="text-xl pt-2 pb-5 md:p-10 md:pt-4 w-full bg-yellow-900/10">
        <h2 className="text-center font-bold p-3">{t("homepage.strengths")}</h2>
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
                title={t("card.algorithms")}
                icon={<LightBulbIcon width={30} height={30} aria-hidden />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={t("card.development")}
                icon={<TvIcon width={30} height={30} aria-hidden />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={t("card.a11y")}
                icon={<CheckCircleIcon width={30} height={30} aria-hidden />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title={t("card.study")}
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
          <p>{t("homepage.description")}</p>
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn"
          >
            {t("homepage.goToAboutBtn")}
          </button>
        </article>
      </section>
      <About />
      <Contact />
    </div>
  );
}
