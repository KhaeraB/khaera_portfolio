"use client";
import React, { useReducer } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { logoFont } from "../../../fonts/KbFonts";
import Menu from "../Menu";
import Link from "next/link";

const initialState = { isOpen: false };

const navbarReducer = (
  state: { isOpen: boolean },
  action: { type: string }
) => {
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};

const NavBar = () => {
  const [navbar, dispatch] = useReducer(navbarReducer, initialState);

  return (
    <header className="w-full mx-auto  px-4 sm:px-2 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className=" md:py-5 md:block">
              <h2
                className={`${logoFont.className} font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% dark:bg-white`}
              >
                <Link href="/">Khaera_blk</Link>
              </h2>
            </div>
            <div className="md:hidden">
              <button onClick={() => dispatch({ type: "TOGGLE_NAVBAR" })}>
                {navbar.isOpen ? (
                  <IoMdClose size={30} />
                ) : (
                  <IoMdMenu size={30} />
                )}
              </button>
            </div>
          </div>
        </div>
        <Menu
          navbar={navbar.isOpen}
          setNavbar={() => dispatch({ type: "TOGGLE_NAVBAR" })}
        />
      </div>
    </header>
  );
};

export default NavBar;
