"use client";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import NavBar from "../components/header/NavBar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer/Footer";
import "../styles/global.css";
import BreadcrumbItem from "@/components/breadcrumbs/BreadcrumbItem";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/breadcrumbs/BreadcrumbFragment";
import { BreadcrumbContext } from "../components/breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk",
  description: "Portfolio of my projects",
};

interface BreadcrumbItemInfo {
  href: string;
  label: string;
  isCurrent: boolean;
}

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
          <BreadcrumbContext />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
