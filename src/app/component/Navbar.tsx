"use client";
import useBreakpoint from "../hooks/useBreakpoint";
import { Bars3Icon } from "@heroicons/react/16/solid";

import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import i18n from "../utils/translation";

export default function Navbar() {
  const breakpoint = useBreakpoint();
  const menuMobile = useRef<HTMLUListElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigation = async (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    await router.push(path);
    setIsModalOpen(false);
  };

  return (
    <>
      {breakpoint === "mobile" && (
        //hamburger menu
        <div className="mobile-menu font-bold bg-white min-h-10">
          <div className="flex items-center justify-between p-5">
            <Link href="/" className="pl-8 font-italic" prefetch={true}>
              Logo
            </Link>
            <button
              className="w-8"
              onClick={() => setIsModalOpen(true)}
              aria-label="Menu"
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
                  onClick={(e) => {
                    handleNavigation(e, "/");
                  }}
                  aria-label="Homepage"
                  prefetch={true}
                >
                  Homepage
                </Link>
              </li>
              <li className="p-8">
                <Link
                  href="/pages/about"
                  onClick={(e) => {
                    handleNavigation(e, "/pages/about");
                  }}
                  aria-label="About me"
                  prefetch={true}
                >
                  About
                </Link>
              </li>

              <li className="p-8">
                <Link
                  href="/pages/contact"
                  onClick={(e) => {
                    handleNavigation(e, "/pages/contact");
                  }}
                  aria-label="Contacts"
                  prefetch={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="languages flex gap-8">
              <button onClick={() => i18n.changeLanguage("en")}>en</button>
              <button onClick={() => i18n.changeLanguage("it")}>it</button>
            </div>
          </Modal>
        </div>
      )}

      {breakpoint === "desktop" && (
        <div className="bg-white font-bold flex items-center justify-between w-full">
          <Link href="/" className="pl-10 font-italic" prefetch={true}>
            Logo
          </Link>
          <div className="flex pr-20 gap-2 items-center justify-end font-bold">
            <Link href="/" className="p-8" prefetch={true}>
              Homepage
            </Link>
            <Link href="/pages/about" className="p-8" prefetch={true}>
              About
            </Link>
            <Link href="/pages/contact" className="p-8" prefetch={true}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
