import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonProjet } from "@/components/button/Button";
import { Metadata } from "next";
import { FiGithub } from "react-icons/fi";
// import { ItemsByCategory, items } from "./data";
import { Project } from "../page";
import { getData } from "@/utils/data/api";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk", //la variable du titre depuis la data
  description: "Portfolio of my projects",
};
async function fetchData() {
  const projectsData = await getData();
  const data = projectsData;
  console.log(data);
  if (data) {
    return data;
  }
  return notFound();
}
const idLink = async () => {
  const data: Project = await getData();

  if (data) {
    return data;
  }
  return notFound();
};

console.log(idLink);
// type CategoryProps = {
//   params: {
//     { params }: CategoryProps
//     category: keyof ItemsByCategory;
//   };
// };
const Category = async () => {
  // const titleCat =
  //   params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <div className="flex flex-col px-5 mt-8 justify-center md:space-x-4 md:text-left ">
      {/* <div className="w-full mt-16 md:mt-28"> */}
      {/* <p className="text-xl md:text-2xl">{titleCat}</p>
      {data.map((item) => (
        <div
          className={`my-5 flex flex-col   ${
            item.id % 2 === 0 ? " md:flex-row-reverse" : "md:flex-row"
          } dark:bg-stone-800 shadow-xl rounded`}
          key={item.id}
        >
          <div className="w-full md:w-1/2 p-2 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-4xl">{item.title}</h2>
            <p>{item.desc}</p>
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
              src={item.image}
              width={300}
              height={400}
              alt="image du projet"
              priority
            />
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Category;
