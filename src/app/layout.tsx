"use client";
import React from "react";
import { Metadata } from "next";
import NavBar from "../components/header/NavBar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer/Footer";
import "../styles/global.css";
import { BreadcrumbContext } from "../components/breadcrumbs/Breadcrumb";
import Head from "next/head";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Sling Academy",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",
};

console.log(metadata);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const pathParts = pathname.split("/").filter(Boolean);
  // const pageTitle =
  //   pathParts.length > 0 ? pathParts[pathParts.length - 1] : "Home";
  // console.log(pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1));

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
