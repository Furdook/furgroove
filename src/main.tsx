import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TOS from "./components/TOS.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="testing/" element={<App />} />
        <Route path="testing/tos" element={<TOS />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
