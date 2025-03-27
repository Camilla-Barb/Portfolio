"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
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
        <h1 className="text-3xl font-bold pb-10 pt-10 pl-6">
          {t("about.title")}
        </h1>
        <p className="text-xl md:pl-10 md:pr-10 text-center">
          {t("about.paragraph")}
        </p>
        <p className="text-xl font-bold md:pl-10 md:pr-10 text-center pt-5">
          {t("about.boldParagraph")}
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
            <h2 className="font-bold pb-2 text-2xl">{t("about.student")}</h2>
            <p className="pt-6 pb-6 p-4">{t("about.studentParagraph")}</p>
            <ul className="max-lg:bg-yellow-900/10 p-4">
              <li>{t("about.personalProjects")}</li>
              <li>{t("about.university")}</li>
              <li>{t("about.books")}</li>
              <li>{t("about.curiosity")}</li>
              <li>{t("about.geek")}</li>
            </ul>
          </div>
          <div className="max-lg:pt-16 w-full">
            <h2 className="font-bold pb-2 text-2xl">{t("about.coder")}</h2>
            <p className="pt-6 pb-6 p-4">{t("about.coderParagraph")}</p>
            <ul className="max-lg:bg-yellow-900/10 p-4">
              <li>{t("about.html")}</li>
              <li>{t("about.css")}</li>
              <li>{t("about.js")}</li>
              <li>{t("about.a11y")}</li>
              <li>{t("about.next")}</li>
              <li>{t("about.react")}</li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
