import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import Login from "./pages/Login";
import LifePage from "./pages/LifePage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/write/:contentname" element={<WritePage />} />
          <Route element={<Layout />}>
            <Route path="/life" element={<LifePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
