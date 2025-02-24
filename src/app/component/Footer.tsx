"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-gray-300 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] w-full pt-12 pb-12 p-10 mt-10">
      <div className=" flex gap-2 justify-between items-center pb-10 border-b border-indigo">
        <div>
          <p className="font-bold pb-4">Say Hello</p>
          <Link href="mailto:barbiericamilla99@gmail.com">Text me!</Link>
          <Link
            className="flex gap-2"
            href="https://www.linkedin.com/in/camilla-barbieri-614a471a0"
          >
            Find me on
            <Image
              src="/img/linkedin.svg"
              width={20}
              height={20}
              alt=""
              aria-hidden
            />
          </Link>
        </div>

        <ul className="menu pt-4">
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/pages/about">About</Link>
          </li>
          <li>
            <Link href="/pages/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="pt-8">
        <span>© Camilla Barbieri 2025</span>
      </div>
    </footer>
  );
}
