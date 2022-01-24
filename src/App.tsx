import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";

import Login from "./pages/Login";
import Magazine from "./pages/Magazine";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/post" element={<WritePage />} />
          <Route element={<Layout />}>
            <Route path="/magazine" element={<Magazine />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
