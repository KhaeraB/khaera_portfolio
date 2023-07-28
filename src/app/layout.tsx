"use client";
import "./../styles/global.css";
import type { Metadata } from "next";
import NavBar from "../components/header/NavBar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk",
  description: "Portfolio of my projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="dark:bg-stone-900 container"
        suppressHydrationWarning={true}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
