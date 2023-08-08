"use client";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import NavBar from "../components/header/NavBar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer/Footer";
import "../styles/global.css";
import BreadcrumbItem from "@/components/breadcrumbs/BreadcrumbItem";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";

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
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemInfo[]>([]);

  useEffect(() => {
    const pathWithoutQuery = pathname.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className="dark:bg-stone-900 container"
        suppressHydrationWarning={true}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          <Breadcrumb>
            <BreadcrumbItem isCurrent={pathname === "/"} href="/">
              Accueil
            </BreadcrumbItem>
            {breadcrumbs.map((breadcrumb) => (
              <BreadcrumbItem
                key={breadcrumb.href}
                href={breadcrumb.href}
                isCurrent={breadcrumb.isCurrent}
              >
                {breadcrumb.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
