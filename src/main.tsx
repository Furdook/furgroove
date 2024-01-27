import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TOS from "./components/TOS.tsx";

import { createHashRouter, RouterProvider } from "react-router-dom";

// archived pages:
import Jan_2024 from "./archive/2024.01.tsx";
import { TOS as TOS_2024 } from "./archive/2024.01.tsx";

const router = createHashRouter([
  {
    path: "archive/january/",
    element: <Jan_2024 />,
  },
  {
    path: "archive/january/tos/",
    element: <TOS_2024 />,
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
