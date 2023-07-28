import { logoFont } from "@/fonts/KbFonts";
import React from "react";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-stone-900">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h4
            className={`${logoFont.className} font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% dark:bg-white`}
          >
            Khaera_blk
          </h4>

          <ul className="flex  space-x-4 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                A propos
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="https://github.com/KhaeraB" className="hover:underline">
                <FiGithub size={20} />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://github.com/KhaeraB" className="hover:underline">
            Khaera. B
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
