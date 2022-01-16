import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Layout from "./components/common/Layout";
import Magazine from "./pages/Magazine/Magazine";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Layout>
        <Routes>
          <Route path="/Magazine" element={<Magazine />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
