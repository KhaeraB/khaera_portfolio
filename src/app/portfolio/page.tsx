import React from "react";
import { Metadata } from "next";
import { logoFont } from "@/fonts/KbFonts";
import { styleGradiant } from "@/components/button/Button";
import ProjectCard from "@/components/projectCard/page";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk",
  description: "Portfolio of my projects",
};

const Projects = () => {
  return (
    <div className="flex flex-col justify-center   mx-auto   md:space-x-4 md:text-left">
      <h1
        className={`${logoFont.className}  ${styleGradiant} text-left bg-clip-text text-transparent text-4xl md:text-8xl my-2 `}
      >
        Catégories
      </h1>
      <p>Choisisez une catégories</p>

      <div className="flex flex-col text-center items-center justify-center  mx-2 md:flex-row md:space-x-4 md:text-left">
        <ProjectCard
          image="/images/workHard.jpg"
          alt="Websites image"
          key="/images/workHard.jpg"
          category="Websites"
          title="Mes projets de sites"
          description="Retrouvez les projets avec les COMPETENCES OPERATIONNELLES et CONNAISANCES TECHNIQUES"
          buttonUrl="/portfolio/websites"
          buttonText="Voir les projects"
        />
        <ProjectCard
          image="/images/Learn_Home.jpg"
          alt="Design image"
          key="/images/Learn_Home.jpg"
          category="UI/UX Design"
          title="Mes projets de design UI UX"
          description=" Retrouvez les créations de design app/mobile LOGICIELS UTILIES et CONNAISSANCES TECHNIQUES"
          buttonUrl="/portfolio/design"
          buttonText="Voir les projects"
        />
        <ProjectCard
          image="/images/intheskyline.jpg"
          alt="Illustration image"
          key="/images/intheskyline.jpg"
          category="Illustrations"
          title="Mes Illustrations"
          description="La création d'illustrations via Adobe ou Procreateretrouvez les PROJETS PROFESSIONNELS et PERSONNELS"
          buttonUrl="/portfolio/illustrations"
          buttonText="Voir les projects"
        />
      </div>
    </div>
  );
};

export default Projects;
