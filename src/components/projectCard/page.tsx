import React from "react";
import Image from "next/image";
import { Button } from "../button/Button";

interface PropsCard {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}
const ProjectCard: React.FC<PropsCard> = ({
  image,
  alt,
  category,
  title,
  description,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg ">
      <div className="relative">
        <Image
          className="w-full h-72 object-cover  bg-slate-300 "
          src={image}
          width={300}
          height={400}
          alt={alt}
          priority
        />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          {category}
        </div>
      </div>
      <div className="px-6 py-4 dark:bg-stone-800">
        <h5 className="font-bold text-xl mb-2">{title}</h5>
        <p>{description}</p>
      </div>
      <Button url={buttonUrl} text={buttonText} />
    </div>
  );
};

export default ProjectCard;
