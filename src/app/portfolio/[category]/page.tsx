"use client";
import React from "react";
import Image from "next/image";
import { notFound, usePathname } from "next/navigation";
import { ButtonProjet } from "@/components/button/Button";
import { Metadata } from "next";
import { FiGithub } from "react-icons/fi";
import { ItemsByCategory, items } from "./data";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Khaera_blk", //la variable du titre depuis la data
  description: "Portfolio of my projects",
};

const getData = (cat: keyof ItemsByCategory) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

type CategoryProps = {
  params: {
    category: keyof ItemsByCategory;
  };
};
const Category = ({ params }: CategoryProps) => {
  const data = getData(params.category);

  const titleCat =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <div className="flex flex-col px-5 mt-8  md:flex-col md:space-x-4 md:text-left ">
      {/* <div className="w-full mt-16 md:mt-28"> */}
      <p className="text-xl md:text-2xl">{titleCat}</p>
      {data.map((item) => (
        <div
          className="item my-5 flex flex-col md:flex-row md:even:flex-row-reverse  dark:bg-stone-800 shadow-xl rounded"
          key={item.id}
        >
          <div className="w-full md:w-1/2 mb-4 px-2 flex flex-col justify-center items-start">
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
      ))}
    </div>
  );
};

export default Category;
