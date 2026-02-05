"use client";

import { useTranslation } from "react-i18next";
import { ExpandableText } from "./ExpandableText";
import { ProjectImage } from "./ProjectImage";

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div id="project">
      <h2 className="text-2xl font-bold pb-10 pt-10 text-center">
        {t("project.title")}
      </h2>
      <section className="flex flex-col lg:flex-row p-8 gap-10 bg-white w-full min-h-[400px] h-full">
        <ProjectImage src="/img/mockup1.png" />
        <ExpandableText
          title={t("project.luxuryBrand")}
          text={t("project.luxuryBrandDesc")}
        />
      </section>
      <section className="flex flex-col lg:flex-row p-8 gap-10 bg-white w-full min-h-[400px] h-full">
        <ExpandableText
          title={t("project.cosmeticBrand")}
          text={t("project.cosmeticBrandDesc")}
        />
        <ProjectImage src="/img/mockup2.png" />
      </section>
      <section className="flex flex-col lg:flex-row p-8 gap-10 bg-white w-full min-h-[400px] h-full">
        <ProjectImage src="/img/mockup3.png" />
        <ExpandableText
          title={t("project.a11y")}
          text={t("project.a11yDesc")}
        />
      </section>
    </div>
  );
}
