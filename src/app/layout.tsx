import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./styles/globals.scss"; // add in every root of the application
import "./utils/translation";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// import Prefooter from "./component/Prefooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camilla Barbieri | Frontend Developer",
  description:
    "Camilla Barbieri is a Web Developer specialized in frontend solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen`}
      >
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
        {/* <Prefooter /> */}
        <Footer />
      </body>
    </html>
  );
}
