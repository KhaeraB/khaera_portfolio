"use client";
import HeroSection from "@/components/heroSection/page";
import AboutSection from "@/components/aboutSection/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk",
  description: "Portfolio of my projects",
};

export default function Home() {
  return (
    <main className="flex flex-col mt-20 md:mt-36 mx-auto max-w-3xl px-4 sm-px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
