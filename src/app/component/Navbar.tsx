"use client";
import useBreakpoint from "../hooks/useBreakpoint";
import { Bars3Icon } from "@heroicons/react/16/solid";

import Link from "next/link";
import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Navbar() {
  const breakpoint = useBreakpoint();
  const menuMobile = useRef<HTMLUListElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {breakpoint === "mobile" && (
        //hamburger menu
        <div className="mobile-menu">
          <div className="bg-coffee flex items-center justify-end p-10">
            <button onClick={() => setIsModalOpen(true)} aria-label="Menu">
              <Bars3Icon className="w-5 h-5 ml-2 mt-2 text-background top-2 right-8" />
            </button>
          </div>
          <Modal
            title="Menu"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <ul
              ref={menuMobile}
              className={`flex flex-col transition-all duration-300 ease-in-out ${
                isModalOpen
                  ? "translate-x-0 opacity-100 "
                  : "-translate-x-full opacity-0"
              }`}
            >
              <li className="p-8">
                <Link
                  href="/"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Homepage"
                >
                  Homepage
                </Link>
              </li>
              <li className="p-8">
                <Link
                  href="/pages/about"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="About me"
                >
                  About
                </Link>
              </li>

              <li className="p-8">
                <Link
                  href="/pages/contact"
                  onClick={() => setIsModalOpen(false)}
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
