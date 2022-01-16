import React from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="flex bg-slate-100">
        <SideMenu />
        <section className="m-2 p-2 rounded flex-1 bg-white">
          {children}
        </section>
      </div>
    </div>
  );
};

export { Layout };
