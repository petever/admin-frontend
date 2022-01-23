import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideMenu from "../SideMenu";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-slate-100">
        <SideMenu />
        <section className="m-2 p-2 rounded flex-1 bg-white">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export { Layout };
