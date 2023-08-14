import React, { useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonProjet } from "@/components/button/Button";
import { FiGithub } from "react-icons/fi";
import { IWork } from "@/models/Work";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  desc: string;
  image: string;
  giturl: string;
  siteurl: string;
}

async function getDataId(_id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }: { params: IWork }) {
  const post = await getDataId(params.id);

  return {
    title: post.title,
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
      <div
        className="my-5 flex flex-col  md:flex-row dark:bg-stone-800 shadow-xl rounded"
        key={data.id}
      >
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl">{data.title}</h2>
          <p>{data.desc}</p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <Link href={data.giturl} className="m-0">
              <FiGithub size={20} />
            </Link>
          </span>
          <ButtonProjet url={data.siteurl} text="Site" />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            className="w-full h-72 object-cover bg-top bg-slate-300 "
            src={data.image}
            width={300}
            height={400}
            alt="image du projet"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
