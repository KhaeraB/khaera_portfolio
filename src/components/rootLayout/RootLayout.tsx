"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer/Footer";
import "../../styles/global.css";
import { BreadcrumbContext } from "@/components/breadcrumbs/Breadcrumb";
import NavBar from "@/components/header/NavBar";
import AuthProvider from "../../providers/AuthProvider";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <NavBar />
        <BreadcrumbContext />
        {children}
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default RootLayout;
