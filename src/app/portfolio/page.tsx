import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { FiGithub } from "react-icons/fi";
import { logoFont } from "@/fonts/KbFonts";
import Link from "next/link";
import { Button, styleGradiant } from "@/components/button/Button";

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
        <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg ">
          <div className="relative">
            <Image
              className="w-full h-72 object-cover  bg-slate-300 "
              src="/images/workHard.jpg"
              width={300}
              height={400}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Websites
            </div>
          </div>
          <div className="px-6 py-4 dark:bg-stone-800">
            <h5 className="font-bold text-xl mb-2">Mes projets de sites</h5>
            <p>
              Retrouvez les projets avec les{" "}
              <span className="text-indigo-600 font-bold">
                COMPETENCES OPERATIONNELLES
              </span>{" "}
              et{" "}
              <span className="text-indigo-600 font-bold">
                CONNAISANCES TECHNIQUES{" "}
              </span>{" "}
            </p>
          </div>
          <Button url="/portfolio/websites" text="Voir les projects" />
        </div>
        <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg ">
          <div className="relative">
            <Image
              className="w-full h-72 object-cover bg-top bg-slate-300 "
              src="/images/Learn_Home.jpg"
              width={300}
              height={400}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              UI/UX Design
            </div>
          </div>
          <div className="px-6 py-4 dark:bg-stone-800">
            <h5 className="font-bold text-xl mb-2">Mes projets de sites</h5>
            <p>
              Retrouvez les créations de design app/mobile{" "}
              <span className="text-indigo-600 font-bold">
                LOGICIELS UTILIES
              </span>{" "}
              et{" "}
              <span className="text-indigo-600 font-bold">
                CONNAISSANCES TECHNIQUES{" "}
              </span>{" "}
            </p>
          </div>
          <Button url="/portfolio/design" text="Voir les projects" />
        </div>

        <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg ">
          <div className="relative">
            <Image
              className="w-full h-72 object-cover  bg-slate-300 "
              src="/images/intheskyline.jpg"
              width={300}
              height={400}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Illustrations
            </div>
          </div>
          <div className="px-6 py-4 dark:bg-stone-800">
            <h5 className="font-bold text-xl mb-2">Mes illustrations</h5>
            <p>
              {"La création d'illustrations via Adobe ou Procreate"}
              retrouvez les{" "}
              <span className="text-indigo-600 font-bold">
                PROJETS PROFESSIONNELS
              </span>{" "}
              et <span className="text-indigo-600 font-bold">PERSONNELS </span>{" "}
            </p>
          </div>
          <Button url="/portfolio/illustrations" text="Voir les projects" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
