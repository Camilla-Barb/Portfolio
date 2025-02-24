"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-gray-300 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] w-full p-10 mt-10">
      <div className="flex gap-2 pb-10 border-b border-indigo">
        <Link href="https://www.linkedin.com/in/camilla-barbieri-614a471a0">
          <Image
            src="/img/linkedin.svg"
            width={30}
            height={30}
            alt=""
            aria-hidden
          />
        </Link>
      </div>
      <div className="pt-10 pb-10">
        <span>© Camilla Barbieri 2025</span>
      </div>
    </footer>
  );
}
