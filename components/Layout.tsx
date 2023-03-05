import React, { Component } from "react";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full p-0 m-0  bg-gradient-to-r from-[#0E1B2E] to-bg1 cursor-default">
      {children}
    </div>
  );
};
export default Layout;
