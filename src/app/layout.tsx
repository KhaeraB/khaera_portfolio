import React from "react";
import { Metadata } from "next";
import { LayoutProps } from "../../.next/types/app/layout";
import RootLayout from "../components/rootLayout/RootLayout";

export const metadata: Metadata = {
  title: "Khaera_blk - Accueil ",
  description: "Portfolio of my projects",
};

export default function Layout({ children }: LayoutProps) {
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
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
