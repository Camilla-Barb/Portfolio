"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-200 w-full p-12 mt-20">
      <div className="flex max-sm:gap-2 max-sm:justify-between gap-20 items-center pb-10 border-b border-indigo">
        <div>
          <p className="font-bold pb-4">Say Hello</p>
          <Link href="mailto:barbiericamilla99@gmail.com">Text me!</Link>
          <Link
            className="flex gap-1"
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
