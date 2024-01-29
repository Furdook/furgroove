import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TOS from "./components/TOS.tsx";

import { createHashRouter, RouterProvider } from "react-router-dom";
import FurGrooveFirstEdition from "./archive/2024.january/2024.january.tsx";

const router = createHashRouter([
  {
    path: "archive/",
    element: <FurGrooveFirstEdition />,
  },
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
