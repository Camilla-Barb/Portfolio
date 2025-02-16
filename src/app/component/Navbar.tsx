"use client";
import useBreakpoint from "../hooks/useBreakpoint";
import { Bars3Icon } from "@heroicons/react/16/solid";

import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

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
        <div className="mobile-menu">
          <div className="bg-coffee flex items-center justify-between p-5">
            <Link href="/" className="text-background">
              Logo
            </Link>
            <button
              className="w-8 text-background"
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
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Modal>
        </div>
      )}

      {breakpoint === "desktop" && (
        <div className="bg-coffee text-background">
          <div className="flex pr-20 gap-2 pt-10 pb-10 items-center justify-end">
            <Link href="/" className="p-8">
              Homepage
            </Link>
            <Link href="/pages/about" className="p-8">
              About
            </Link>
            <Link href="/pages/contact" className="p-8">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
