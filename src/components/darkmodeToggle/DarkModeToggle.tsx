import React, { useContext } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonFill } from "react-icons/ri";

const DarkModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-slate-100 p-2 rounded-xl transition-all duration-100"
        >
          <RiSunLine size={15} color="black" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="bg-slate-100 p-2 rounded-xl transition-all duration-100"
        >
          <RiMoonFill size={15} />
        </button>
      )}
    </>
  );
};

export default DarkModeToggle;
