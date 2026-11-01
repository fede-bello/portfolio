import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

const rootEl = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Use hydrateRoot when SSR content was pre-rendered, createRoot otherwise (dev)
if (rootEl.childNodes.length > 0) {
  ReactDOM.hydrateRoot(rootEl, app);
} else {
  ReactDOM.createRoot(rootEl).render(app);
}
