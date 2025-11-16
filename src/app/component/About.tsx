"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectsSection from "@/app/component/ProjectsSection";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SkillsSection from "./SkillsSection";

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
      <section className="p-8 pb-6 bg-yellow-900/10" id="about">
        <h2 className="text-2xl font-bold pb-10 pt-10 text-center">
          {t("about.title")}
        </h2>
        <p className="md:pl-10 md:pr-10 text-center">{t("about.paragraph")}</p>
        <p className="font-bold md:pl-10 md:pr-10 text-center pt-5">
          {t("about.boldParagraph")}
        </p>
      </section>
      <section className="pie-chart-section">
        <div className="pie-chart-image flex flex-col justify-center items-center pl-5 pr-5 pb-4 pt-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] relative overflow-hidden w-full">
          <Image
            src="/img/grafico.png"
            width={550}
            height={550}
            className="bg-center bg-no-repeat"
            alt=""
            priority
            aria-hidden
          />
        </div>
        <div className="grid grid-cols-2 lg:gap-8 max-sm:grid-cols-1 pt-8 pb-10 w-full text-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] bg-yellow-900/10">
          <div className="w-full">
            <h3 className="font-bold pb-2 text-xl">{t("about.learner")}</h3>
            <p className="pt-6 pb-6 p-4">{t("about.learnerParagraph")}</p>
          </div>
          <div className="w-full">
            <h3 className="font-bold pb-2 text-xl">{t("about.coder")}</h3>
            <p className="pt-6 pb-6 p-4">{t("about.coderParagraph")}</p>
          </div>
          <div className="w-full">
            <h3 className="font-bold pb-2 text-xl">{t("about.explorer")}</h3>
            <p className="pt-6 pb-6 p-4">{t("about.explorerParagraph")}</p>
          </div>
          <div className="w-full">
            <h3 className="font-bold pb-2 text-xl">{t("about.curious")}</h3>
            <p className="pt-6 pb-6 p-4">{t("about.curiousParagraph")}</p>
          </div>
        </div>
      </section>
      <ProjectsSection />
      <SkillsSection />
    </motion.div>
  );
}
