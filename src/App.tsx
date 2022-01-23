import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import PostWrite from "./components/common/PostWrite";
import Login from "./pages/Login";
import Magazine from "./pages/Magazine";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/post" element={<PostWrite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
