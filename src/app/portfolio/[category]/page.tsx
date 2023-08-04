import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { AiOutlineHome } from "react-icons/ai";
import { TitleProject } from "@/fonts/KbFonts";
import datas from "@/utilities/portefolio_text";
import { ButtonProjet } from "@/components/button/Button";
import { Metadata } from "next";
import { FiGithub } from "react-icons/fi";

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
const Project = () => {
  return (
    <div className="flex flex-col px-5 mt-20 md:mt-32 md:flex-col md:space-x-4 md:text-left ">
      {/* <div className="w-full mt-16 md:mt-28"> */}
      {/* <div className="p-2 text-xs">
          {" "}
          <Breadcrumbs
            items={[
              {
                label: <AiOutlineHome size={15} />,
                path: "/",
              },
              {
                label: "Development",
                path: "/courses/development",
              },
              {
                label: "Programming Languages",
                path: "/courses/development/programming-languages",
              },
              {
                label: "Python",
                path: "/topic/python",
              },
            ]}
          />
        </div> */}
      {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a href="https://github.com/KhaeraB" className="m-0">
                <FiGithub size={20} />
              </a>
            </span> */}
      <div className="px-4">
        <h1 className="font-bold text-4xl md:text-6xl">Mes réalisations</h1>
        <hr className="w-16 h-1 my-1 bg-teal-500 border-0 rounded"></hr>
        <p className="text-xl md:text-2xl">WebSites</p>
      </div>
      <div className="my-5 flex flex-col md:flex-row  dark:bg-stone-800 shadow-xl rounded ">
        <div className="w-full md:w-1/2 mb-4 px-2">
          <h2 className="text-4xl">Test</h2>
          <p>Desc</p>
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
        <div className="mb-4 w-full md:w-1/2 text-right px-2">
          <h2 className="text-4xl">Test</h2>
          <p>Desc</p>
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

export default Project;
