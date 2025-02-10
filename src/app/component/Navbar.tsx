"use client";
import useBreakpoint from "../hooks/useBreakpoint";

import Link from "next/link";

export default function Navbar() {
  const breakpoint = useBreakpoint();

  return (
    <>
      {breakpoint === "mobile" && (
        //hamburger menu
        <div className="">
          <p>hamburger menu</p>
          {/* <Link href="/" className="p-8">
            Homepage
          </Link>
          <Link href="/pages/about" className="p-8">
            About
          </Link>
          <Link href="/pages/contact" className="p-8">
            Contact
          </Link> */}
        </div>
      )}

      {breakpoint === "desktop" && (
        <div className="flex gap-2 bg-sky-900 pt-10 pb-10 items-center justify-end">
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
      )}
    </>
  );
}
