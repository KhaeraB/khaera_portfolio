import datas from "@/utils/portefolio_text";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      {datas.Background.map((item) => {
        return (
          <>
            <div className="my-12 pb-5 md:pt-16" key={item.title}>
              <h1 className="text-center font-bold text-4xl">
                {item.title}
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
              </h1>
              <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-1/2 leading-6">
                  <h2 className="text-center text-2xl p-1 font-bold mb-6 md:text-left">
                    {item.subTitle}
                  </h2>
                  <p>
                    {item.paragraphOne + " "}
                    <span className="font-bold">{item.subParagraphOne}</span>
                    {" " + item.location}
                  </p>
                  <br />
                  <p>{item.paragraphTwo}</p>
                  <br />
                  <p>{item.paragraphThree}</p>
                  <br />
                  <p>{item.paragraphFour}</p>
                </div>
                <div className="text-center md:w-1/2 md:text-left">
                  <h1 className="text-2xl font-bold mb-6">Mes Compétences</h1>
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
                  <Image
                    src={item.image}
                    alt="portrait de khaera"
                    width={500}
                    height={500}
                    className="blur-sm hover:blur-none hidden md:block md:relative md:bottom-4  md:z-0"
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default AboutSection;
