import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="px-4">
        <h1 className="font-bold text-4xl md:text-6xl">Mes Réalisations</h1>
        <hr className="w-16 h-1 my-1 bg-teal-500 border-0 rounded"></hr>
        {children}
      </div>
    </>
  );
};

export default Layout;
