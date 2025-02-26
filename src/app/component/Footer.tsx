"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full p-12">
      <div className="flex max-sm:gap-2 max-sm:justify-between gap-20 items-center pb-10 border-b">
        <div>
          <p className="font-bold pb-4">Say Hello</p>
          <Link href="mailto:barbiericamilla99@gmail.com">Text me!</Link>
          <Link
            className="flex gap-1"
            href="https://www.linkedin.com/in/camilla-barbieri-614a471a0"
          >
            Find me on
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
