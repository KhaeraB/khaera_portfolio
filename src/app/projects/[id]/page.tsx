import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { AiOutlineHome } from "react-icons/ai";
import { TitleProject } from "@/fonts/KbFonts";
import datas from "@/utilities/portefolio_text";
import { ButtonProjet } from "@/components/button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk", //la variable du titre depuis la data
  description: "Portfolio of my projects",
};

const Project = () => {
  return (
    <div className="flex flex-col  md:flex-col md:space-x-4 md:text-left relative">
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
      <Image
        className="w-full bg-teal-200 object-cover h-96 blur-md"
        src="/images/Votre.jpg"
        width={300}
        height={150}
        alt="Sunset in the mountains"
      />
      <h1
        className={`${TitleProject.className} z-40 absolute top-52 left-52 md:left-1/2 text-4xl `}
      >
        Title
      </h1>
      {/* </div> */}
      <div className="flex justify-between flex-col md:flex-row p-5">
        <div className="py-5 md:w-1/2 ">
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            lobortis enim. Praesent eget metus diam. Praesent non leo nibh. Nam
            auctor risus nunc, ut eleifend urna volutpat quis. Curabitur auctor
            suscipit libero. Vestibulum facilisis turpis non ligula volutpat, in
            aliquam massa ultrices. Quisque rhoncus risus in metus sodales, eu
            efficitur tellus commodo. Aliquam dapibus ante a risus eleifend, sit
            amet pretium ipsum malesuada. Proin in blandit ex, eu porttitor
            eros. Fusce tincidunt venenatis dui. Maecenas nec arcu in mauris
            facilisis consectetur. Aenean luctus augue ut libero facilisis
            fermentum. Quisque feugiat nunc at justo feugiat eleifend nec nec
            mi. Proin vestibulum magna in elit sagittis, vitae elementum felis
            convallis.
          </p>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {datas.skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
          <div className="flex flex-row justify-around">
            <ButtonProjet url="/git" text="Github" />
            <ButtonProjet url="/git" text="Site" />
          </div>
        </div>
        <div className="py-5 md:w-1/2 ">
          <Image
            className="w-full"
            src="/images/Votre.jpg"
            width={300}
            height={150}
            alt="Sunset in the mountains"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
