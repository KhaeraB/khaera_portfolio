"use client";
import "./../styles/global.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "next-themes";

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
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
