import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import { AppLayout } from "./layouts/AppLayout";
import { AboutPage } from "./pages/About";
import { LocalizedAboutPage } from "./pages/LocalizedAbout";
import { ExperiencePage } from "./pages/Experience";
import { ProjectsPage } from "./pages/Projects";
import { PublicationsPage } from "./pages/Publications";
import { ContactPage } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "es", element: <LocalizedAboutPage lang="es" /> },
      { path: "fr", element: <LocalizedAboutPage lang="fr" /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "publications", element: <PublicationsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

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
