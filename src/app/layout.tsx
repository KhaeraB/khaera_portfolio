import React from "react";
import { Metadata } from "next";
import RootLayout from "../components/rootLayout/RootLayout";
import { LayoutProps } from "@/types/LayoutProps";

export const metadata: Metadata = {
  title: "Khaera_blk - Accueil",
  description: "Portfolio of my projects",
};
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className="dark:bg-stone-900 container"
        suppressHydrationWarning={true}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
