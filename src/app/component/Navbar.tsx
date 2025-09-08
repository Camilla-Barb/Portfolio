"use client";
import useBreakpoint from "../hooks/useBreakpoint";
import { Bars3Icon } from "@heroicons/react/16/solid";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import Modal from "./Modal";
// import { LanguagesSelect } from "./LanguagesSelect";
import i18n from "../utils/translation";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const breakpoint = useBreakpoint();
  const menuMobile = useRef<HTMLUListElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [language, setLanguage] = useState<"en" | "it">("en");
  const { t } = useTranslation();

  return (
    <>
      {breakpoint === "mobile" && (
        //hamburger menu
        <div className="mobile-menu font-bold bg-white min-h-10">
          <div className="flex items-center justify-between p-5">
            <Link href="/" className="pl-2 font-italic" prefetch={true}>
              <Image src="/img/logo.png" width={50} height={50} alt="logo" />
            </Link>
            <button
              className="w-8"
              onClick={() => setIsModalOpen(true)}
              aria-label="Open menu"
            >
              <Bars3Icon />
            </button>
          </div>
          <Modal
            title="Menu"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <ul
              ref={menuMobile}
              className={`flex flex-col transition-all duration-300 ease-in-out pt-20 text-xl ${
                isModalOpen
                  ? "translate-x-0 opacity-100 "
                  : "-translate-x-full opacity-0"
              }`}
            >
              <li className="p-8">
                <Link
                  href="/"
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  aria-label="Homepage"
                  prefetch={true}
                >
                  {t("nav.homepage")}
                </Link>
              </li>
              <li className="p-8">
                <Link
                  href="#about"
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  aria-label="About me"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li className="p-8">
                <Link
                  href="#project"
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  aria-label="Project"
                  prefetch={true}
                >
                  {t("nav.project")}
                </Link>
              </li>
              <li className="p-8">
                <Link
                  href="#contact"
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  aria-label="Contacts"
                  prefetch={true}
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
            <div className="languages flex justify-end gap-8 absolute bottom-16 right-8">
              <button
                className="btn min-w-12 flex gap-2"
                aria-label={t("A11y.translateEN")}
                onClick={() => {
                  i18n.changeLanguage("en");
                  setIsModalOpen(false);
                }}
              >
                EN
                <Image
                  src="/img/united-kingdom.png"
                  width={20}
                  height={16}
                  alt=""
                  aria-hidden
                />
              </button>
              <button
                className="btn min-w-12 flex gap-2"
                aria-label={t("A11y.translateIT")}
                onClick={() => {
                  i18n.changeLanguage("it");
                  setIsModalOpen(false);
                }}
              >
                IT
                <Image
                  src="/img/italy.png"
                  width={20}
                  height={16}
                  alt=""
                  aria-hidden
                />
              </button>
            </div>
          </Modal>
        </div>
      )}

      {breakpoint === "desktop" && (
        <div className="bg-white font-bold flex items-center justify-between w-full">
          <Link href="/" className="pl-10 font-italic" prefetch={true}>
            <Image src="/img/logo.png" width={50} height={50} alt="logo" />
          </Link>
          <div className="flex pr-20 gap-2 items-center justify-end font-bold">
            <Link href="/" className="p-5" prefetch={true}>
              {t("nav.homepage")}
            </Link>
            <Link href="#about" className="p-5">
              {t("nav.about")}
            </Link>
            <Link href="#project" className="p-5">
              {t("nav.project")}
            </Link>
            <Link href="#contact" className="p-5">
              {t("nav.contact")}
            </Link>
            {/* <LanguagesSelect value={language} onChange={setLanguage} /> */}
          </div>
        </div>
      )}
    </>
  );
}
