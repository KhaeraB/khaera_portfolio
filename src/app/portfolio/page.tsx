import React from "react";
import { Metadata } from "next";
import PortfolioPage from "@/components/portfolioPage/portfolioPage";

export const metadata: Metadata = {
  title: "Khaera_blk - Portfolio",
  description: "Portfolio of my projects",
};

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center   mx-auto   md:space-x-4 md:text-left">
      <p>Choisisez un projet</p>
      <PortfolioPage />
    </div>
  );
};

export default Portfolio;
