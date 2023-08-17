"use client";
import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row justify-around">
      <button
        className="p-2 m-2 rounded bg-yellow-600 text-white"
        onClick={() => signIn("google")}
      >
        Login with Google
      </button>
      <button
        className="p-2 m-2 rounded bg-stone-800 text-white"
        onClick={() => signIn("github")}
      >
        Login with Github
      </button>
    </div>
  );
};

export default page;
