import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes.tsx";
import { RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
