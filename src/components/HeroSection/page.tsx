"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as Arrow } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import datas from "../../utils/portefolio_text";
import Link from "next/link";
import { icons_style } from "@/utils/icons";

const HeroSection = () => {
  return (
    <section id="home">
      {datas.HeadshotText.map((item) => {
        return (
          <div
            key={item.title}
            className=" flex flex-col text-center items-center justify-center md:flex-row md:space-x-4 md:text-left "
          >
            <div className="md:mt-2 md:w-1/2 flex flex-col items-center justify-center">
              <Image
                src={item.image}
                alt="Khaera Belkadi portrait"
                width={250}
                height={250}
                className="rounded-full shadow-2xl"
              />
              <div className="flex flex-row justify-between mt-4 w-60">
                <Image
                  src={item.mongoDB}
                  alt="khaera Belkadi portrait"
                  width={icons_style.width}
                  height={icons_style.height}
                  className={icons_style.style}
                />
                <Image
                  src={item.express}
                  alt="khaera Belkadi portrait"
                  width={icons_style.width}
                  height={icons_style.height}
                  className={icons_style.style}
                />
                <Image
                  src={item.react}
                  alt="khaera Belkadi portrait"
                  width={icons_style.width}
                  height={icons_style.height}
                  className={icons_style.style}
                />
                <Image
                  src={item.node}
                  alt="khaera Belkadi portrait"
                  width={icons_style.width}
                  height={icons_style.height}
                  className={icons_style.style}
                />
                {/* dot animate-swing in-expo */}
              </div>
            </div>
            <div className="md:mt-2 md:w-3/5 ">
              <h1 className="text-2xl font-bold mt-6 md:mt-0 md:text-4xl ">
                {item.title + " "} <br />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Développeuse React",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Développeuse Front-End",
                    1000,
                    "Développeuse Full Stack",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{ color: "#0d9488" }}
                />
              </h1>

              <p className="text-lg mt-4 mb-6 md:text-xl">
                <span className="font-semibold text-teal-600">{item.job}</span>
                {item.description_1 + " "}
                <span className="font-semibold text-teal-600">
                  {item.job_2}
                </span>
                {item.description_2}
              </p>
              <div className="flex flex-col justify-between space-y-3 flex-wrap md:space-y-0 md:flex-row md:flex-nowrap">
                <Link
                  href="/projects"
                  className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                >
                  Voir mes projets
                </Link>
                <Arrow
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                >
                  Mon parcours
                </Arrow>

                <Link
                  href="/contact"
                  className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                >
                  Contactez-moi
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-row justify-center mt-10">
        <Arrow
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Arrow>
      </div>
    </section>
  );
};

export default HeroSection;
