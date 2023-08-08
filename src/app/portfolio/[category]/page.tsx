"use client";
import React from "react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { ButtonProjet } from "@/components/button/Button";
import { Metadata } from "next";
import { FiGithub } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { TitleProject } from "@/fonts/KbFonts";
import datas from "@/utilities/portefolio_text";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk", //la variable du titre depuis la data
  description: "Portfolio of my projects",
};

// const [windowSize, setWindowSize] = useState([window.innerWidth]);

// const breakpoint = 620;
// let buttonInnerWidth = null;
// useEffect(() => {
//   // window is accessible here.

//   setWindowSize([window.innerWidth]);
//   const result = () => {
//     if (windowSize[0] >= breakpoint) {
//       return <ButtonProjet url="/" text="Site" />;
//     } else {
//       return <Button url="/" text="Site" />;
//     }
//   };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   window.addEventListener("resize", (buttonInnerWidth = result));
// }, []);
const Projects = () => {
  const pathname = usePathname();
  let pathArray = pathname.split("/");
  pathArray.shift();
  const titleCat = pathArray[1].charAt(0).toUpperCase() + pathArray[1].slice(1);

  return (
    <div className="flex flex-col px-5 mt-8  md:flex-col md:space-x-4 md:text-left ">
      {/* <div className="w-full mt-16 md:mt-28"> */}

      <div className="px-4">
        <h1 className="font-bold text-4xl md:text-6xl">Mes réalisations</h1>
        <hr className="w-16 h-1 my-1 bg-teal-500 border-0 rounded"></hr>
        <p className="text-xl md:text-2xl">{titleCat}</p>
      </div>
      <div className="my-5 flex flex-col md:flex-row  dark:bg-stone-800 shadow-xl rounded ">
        <div className="w-full md:w-1/2 mb-4 px-2 flex flex-col justify-center items-start">
          <h2 className="text-4xl">Test</h2>
          <p>Desc</p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href="https://github.com/KhaeraB" className="m-0">
              <FiGithub size={20} />
            </a>
          </span>
          <ButtonProjet url="/" text="Site" />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            className="w-full h-72 object-cover bg-top bg-slate-300 "
            src="/images/workHard.jpg"
            width={300}
            height={400}
            alt="Sunset in the mountains"
          />
        </div>
      </div>
      <div className="my-5 flex flex-col md:flex-row-reverse  dark:bg-stone-800 shadow-xl rounded ">
        <div className="mb-4 w-full md:w-1/2 text-right flex flex-col justify-center items-end px-2">
          <h2 className="text-4xl">Test</h2>
          <p>Desc</p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href="https://github.com/KhaeraB" className="m-0">
              <FiGithub size={20} />
            </a>
          </span>
          <ButtonProjet url="/" text="Site" />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            className="w-full h-72 object-cover bg-top bg-slate-300 "
            src="/images/workHard.jpg"
            width={300}
            height={400}
            alt="Sunset in the mountains"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
