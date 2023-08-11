"use client";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import { logoFont } from "@/fonts/KbFonts";
import { styleGradiant } from "@/components/button/Button";
import ProjectCard from "@/components/projectCard/page";
import { getData } from "@/utils/data/api";

export interface Project {
  _id: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  giturl: string;
  siteurl: string;
}
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk",
  description: "Portfolio of my projects",
};

const Projects = () => {
  const [data, setData] = useState<Project[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const projectsData = await getData();
        setData(projectsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center   mx-auto   md:space-x-4 md:text-left">
      <p>Choisisez un projet</p>
      <div className="flex flex-col text-center items-center justify-center  mx-2 md:flex-row md:space-x-4 md:text-left">
        {data.map((item) => (
          <ProjectCard
            image={item.image}
            alt={item.title}
            key={item._id}
            category={item.category}
            title={item.title}
            description={item.desc}
            buttonUrl={`/portfolio/` + item.title}
            buttonText="Voir les projects"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
