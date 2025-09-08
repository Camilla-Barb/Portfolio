"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation();
  return (
    <div id="project">
      <h2 className="text-2xl font-bold pb-10 pt-10 pl-10 text-center">
        {t("project.title")}
      </h2>
      <section className="flex flex-col md:flex-row p-8 gap-10 bg-white w-full min-h-[600px] h-full">
        <figure className="relative max-md:aspect-square aspect-3/2 order-2 md:order-1 md:w-1/2 h-[40vh] max-sm:h-[25vh]">
          <div className="absolute inset-0 bg-yellow-900/10 rounded-md">
            <Image
              src="/img/mockup1.png"
              objectFit="contain"
              layout="fill"
              className="bg-center bg-no-repeat scale-95"
              alt="mockup"
              priority
              aria-hidden
            />
          </div>
        </figure>
        <article className="flex flex-col order-1 md:order-2 md:w-1/2 gap-8 justify-center text-center md:p-10 w-full">
          <h3 className="font-bold">{t("project.luxuryBrand")}</h3>
          <p>{t("project.luxuryBrandDesc")}</p>
        </article>
      </section>
      <section className="flex flex-col md:flex-row p-8 gap-10 bg-white w-full min-h-[600px] h-full">
        <article className="flex flex-col order-1 md:order-1 md:w-1/2 gap-8 justify-center text-center md:p-10 w-full">
          <h3 className="font-bold">{t("project.cosmeticBrand")}</h3>
          <p>{t("project.cosmeticBrandDesc")}</p>
        </article>
        <figure className="relative max-md:aspect-square aspect-3/2 order-2 md:order-2 md:w-1/2 h-[40vh] max-sm:h-[25vh]">
          <div className="absolute inset-0 bg-yellow-900/10 rounded-md">
            <Image
              src="/img/mockup2.png"
              objectFit="contain"
              layout="fill"
              className="bg-center bg-no-repeat scale-95"
              alt="mockup"
              priority
              aria-hidden
            />
          </div>
        </figure>
      </section>
      <section className="flex flex-col md:flex-row p-8 gap-10 bg-white w-full min-h-[600px] h-full">
        <figure className="relative max-md:aspect-square aspect-3/2 order-2 md:order-1 md:w-1/2 h-[40vh] max-sm:h-[25vh]">
          <div className="absolute inset-0 bg-yellow-900/10 rounded-md">
            <Image
              src="/img/mockup3.png"
              objectFit="contain"
              layout="fill"
              className="bg-center bg-no-repeat scale-95"
              alt="mockup"
              priority
              aria-hidden
            />
          </div>
        </figure>
        <article className="flex flex-col order-1 md:order-2 md:w-1/2 gap-8 justify-center text-center md:p-10 w-full">
          <h3 className="font-bold">{t("project.a11y")}</h3>
          <p>{t("project.a11yDesc")}</p>
        </article>
      </section>
    </div>
  );
}
