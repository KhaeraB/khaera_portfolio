"use client";
import OAuthComponent from "@/components/OauthComponent/OauthComponenet";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row justify-around">
      <OAuthComponent company="Github" />
      <OAuthComponent company="Google" />
    </div>
  );
};

export default page;
