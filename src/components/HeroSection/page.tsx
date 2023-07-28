"use client";
import React from "react";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import HeadshotText from "../../utilities/headshot_text";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home">
      {HeadshotText.map((item) => {
        return (
          <div
            key={item.title}
            className=" flex flex-col text-center items-center justify-center py-16 mt-10 md:flex-row md:space-x-4 md:text-left "
          >
            <div className="md:mt-2 md:w-3/5 ">
              <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl ">
                {item.title}
              </h1>
              <p className="text-lg mt-4 mb-6 md:text-xl">
                <span className="font-semibold text-teal-600">{item.job}</span>
                {item.description_1 + " "}
                <span className="font-semibold text-teal-600">
                  {item.job_2}
                </span>
                {item.description_2}
              </p>
              <div className="flex flex-row justify-between">
                <Link
                  href="/projects"
                  className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                >
                  Voir les projets
                </Link>
                <Link
                  href="/about"
                  className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                >
                  Mon parcours
                </Link>
                <Link
                  href="/contact"
                  className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                >
                  Contactez-moi
                </Link>
              </div>
            </div>
            <div className="md:mt-2 md:w-1/2  flex items-center justify-center">
              <Image
                src={item.image}
                alt="khaera Belkadi portrait"
                width={300}
                height={300}
                className="rounded-full shadow-2xl dot animate-swing"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HeroSection;
