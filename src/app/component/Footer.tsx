"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full p-12">
      <div className="flex max-sm:gap-2 max-sm:justify-between gap-20 items-center pb-10 border-b">
        <div>
          <p className="font-bold pb-4"> {t("footer.sayHello")}</p>
          <Link href="mailto:barbiericamilla99@gmail.com">
            {t("footer.sendEmail")}
          </Link>
          <Link
            className="flex gap-1"
            href="https://www.linkedin.com/in/camilla-barbieri-614a471a0"
          >
            {t("footer.linkdln")}
            <Image
              src="/img/neutral-linkedin.svg"
              width={25}
              height={25}
              alt=""
              aria-hidden
            />
          </Link>
        </div>

        <ul className="menu pt-4">
          <li>
            <Link href="/" prefetch={true}>
              {t("nav.homepage")}
            </Link>
          </li>
          <li>
            <Link href="#about" prefetch={true}>
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link href="#project" prefetch={true}>
              {t("nav.project")}
            </Link>
          </li>
          <li>
            <Link href="#skills" prefetch={true}>
              {t("nav.skills")}
            </Link>
          </li>
          <li>
            <Link href="#contact" prefetch={true}>
              {t("nav.contact")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-8 max-sm:text-center">
        <span>© Camilla Barbieri 2025</span>
        <p className="pt-4 text-center">{t("footer.siteInfo")}</p>
      </div>
    </footer>
  );
}
