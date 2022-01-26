import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <nav className="h-screen bg-gray-800">
      <ul className="text-white p-4 text-left">
        <li>
          <Link to="/life">라이프 관리</Link>
        </li>
      </ul>
    </nav>
  );
};

export { SideMenu };
