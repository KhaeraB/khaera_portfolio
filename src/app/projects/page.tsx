import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { FiGithub } from "react-icons/fi";
import { logoFont } from "@/fonts/KbFonts";
import Link from "next/link";
import { Button } from "@/components/button/Button";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk",
  description: "Portfolio of my projects",
};
const Projects = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center py-16 md:mt-10 mx-2 md:space-x-4 md:text-left">
      <h1
        className={`${logoFont.className} font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% mx-auto text-center my-10`}
      >
        Portefolio
      </h1>
      <div className="flex flex-col text-center items-center justify-center  mx-2 md:flex-row md:space-x-4 md:text-left">
        <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg">
          <Image
            className="w-full bg-slate-300"
            src="/images/techno.gif"
            width={300}
            height={300}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          </div>
          <div className="px-6 pt-4 pb-2 flex items-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://github.com/KhaeraB" className="m-0">
                <FiGithub size={20} />
              </a>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #mern
            </span>

            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #react
            </span>
          </div>
          <Button url="/projects/1548" text="Voir le projet" />
        </div>
        <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg">
          <Image
            className="w-full bg-slate-300"
            src="/images/techno.gif"
            width={300}
            height={300}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          </div>
          <div className="px-6 pt-4 pb-2 flex items-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://github.com/KhaeraB" className="m-0">
                <FiGithub size={20} />
              </a>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
          <Button url="/projects/1548" text="Voir le projet" />
        </div>
        <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg">
          <Image
            className="w-full bg-slate-300"
            src="/images/techno.gif"
            width={300}
            height={300}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          </div>
          <div className="px-6 pt-4 pb-2 flex items-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://github.com/KhaeraB" className="m-0">
                <FiGithub size={20} />
              </a>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
          <Button url="/projects/1548" text="Voir le projet" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
