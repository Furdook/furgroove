import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TOS from "./components/TOS.tsx";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "tos/",
    element: <TOS />,
  },
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
