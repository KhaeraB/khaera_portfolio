import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  url: string;
};

export const styleGradiant =
  " bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%";

export const Button = ({ text, url }: Props) => {
  return (
    <Link
      href={url}
      className={` ${styleGradiant} flex justify-center space-y-3 flex-wrap md:space-y-0 md:flex-row md:flex-nowrap text-neutral-100 cursor-pointer font-semibold px-6 py-3  hover:bg-teal-700`}
    >
      {text}
    </Link>
  );
};

export const ButtonProjet = ({ text, url }: Props) => {
  return (
    <Link
      href={url}
      className="flex justify-center w-1/3 space-y-3 mt-2 flex-wrap md:space-y-0 md:flex-row rounded md:flex-nowrap text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600  hover:bg-teal-700"
    >
      {text}
    </Link>
  );
};
