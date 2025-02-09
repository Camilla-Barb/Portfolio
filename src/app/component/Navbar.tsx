"use client";

// import vari
import Link from "next/link";

export default function Navbar() {
  //codice componente
  return (
    <div className="flex gap-2 bg-sky-900">
      <Link href="/">Homepage</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
