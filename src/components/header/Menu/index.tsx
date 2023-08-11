"use client";
import React from "react";
import Link from "next/link";
import { MENU_LIST } from "@/utils/roots_navlink";
import DarkModeToggle from "@/components/darkmodeToggle/DarkModeToggle";

type Props = {
  navbar: boolean;
  setNavbar: (active: boolean) => void;
};

const Menu = ({ navbar, setNavbar }: Props) => {
  return (
    <div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <div className="items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
          <DarkModeToggle />
          {MENU_LIST.map((item, id) => {
            return (
              <Link
                key={id}
                className={
                  "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                }
                href={item.page}
                onClick={() => setNavbar(!navbar)}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={() => console.log("logout")}
            className="bg-slate-100 p-1.5 rounded-xl  dark:text-neutral-900"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
