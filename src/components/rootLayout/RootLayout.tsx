"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer/Footer";
import "../../styles/global.css";
import { BreadcrumbContext } from "@/components/breadcrumbs/Breadcrumb";
import NavBar from "@/components/header/NavBar";
import AuthProvider from "../AuthProviders/AuthProviders";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AuthProvider>
        <NavBar />
        <BreadcrumbContext />
        {children}
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
