"use client";
import React, { useEffect, useState } from "react";
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
  skills: [];
}

const PortfolioPage = () => {
  const [data, setData] = useState<Project[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await getData();
        setData(projectsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col text-center items-center justify-center  mx-2 md:flex-row md:space-x-4 md:text-left">
      {data.map((item) => (
        <ProjectCard
          image={item.image}
          alt={item.title}
          key={item._id}
          category={item.category}
          title={item.title}
          description={item.desc}
          skills={item.skills}
          buttonUrl={`/portfolio/${encodeURIComponent(item._id)}`}
          buttonText="Voir les projects"
        />
      ))}
    </div>
  );
};

export default PortfolioPage;
