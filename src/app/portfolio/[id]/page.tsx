import React from "react";
import Image from "next/image";
import { ButtonProjet } from "@/components/button/Button";
import { FiGithub } from "react-icons/fi";
import { IWork } from "@/models/Work";
import Link from "next/link";
import { getDataId } from "@/utils/data/api";

export async function generateMetadata({ params }: { params: IWork }) {
  const post = await getDataId(params.id);

  return {
    title: "Khaera_blk - " + post.title,
    description: post.desc,
  };
}

const ProjectPage = async ({ params }: { params: IWork }) => {
  if (!params || typeof params.id !== "string") {
    // Handle the case where params are missing or id is not a string
    return <div>No project data available.</div>;
  }

  const data = await getDataId(params.id);
  return (
    <div className="flex flex-col px-5 mt-8 justify-center md:space-x-4 md:text-left ">
      <div className="my-5 flex flex-col dark:bg-stone-800" key={data.id}>
        <div className="w-full">
          <Image
            className="w-full h-72 object-cover bg-top bg-slate-300 "
            src={data.image}
            width={300}
            height={400}
            alt="image du projet"
            priority
          />
        </div>
        <div className="w-full py-2 flex flex-col md:flex-row justify-center items-center ">
          <div className="w-full flex-col md:w-1/2 justify-center items-center">
            <h2 className="text-4xl">{data.title}</h2>
            <p>{data.desc}</p>
            <div className="text-center md:w-1/2 md:text-left">
              <h3 className="text-2xl font-bold mb-1">Compétences</h3>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {data.skills.map((item: string, idx: number) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex-col md:w-1/2 justify-end items-end">
            <div className="flex flex-row justify-between mb-2 ">
              {data.mocks.map((mock: string, idx: number) => {
                return (
                  <Image
                    key={idx}
                    className="lg:w-36 lg:h-36 xl:w-64 xl:h-64 md:w-24 md:h-24 object-cover bg-top  bg-slate-300 hidden md:flex"
                    src={mock}
                    width={150}
                    height={150}
                    alt="image du projet"
                    priority
                  />
                );
              })}
            </div>
            <div className="text-center flex flex-col items-center justify-center ">
              <span className="w-12 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <Link href={data.giturl} className="text-center">
                  <FiGithub size={20} className="text-center" />
                </Link>
              </span>
              <ButtonProjet url={data.siteurl} text="Site" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
