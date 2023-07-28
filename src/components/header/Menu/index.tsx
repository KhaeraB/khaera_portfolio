"use client";
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import Link from "next/link";
import { MENU_LIST } from "@/utilities/roots_navlink";

type Props = {
  navbar: boolean;
  setNavbar: (active: boolean) => void;
};

const Menu = ({ navbar, setNavbar }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <div className="items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={15} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={15} />
            </button>
          )}
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
