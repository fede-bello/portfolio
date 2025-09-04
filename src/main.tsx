import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import { AppLayout } from "./layouts/AppLayout";
import { AboutPage } from "./pages/About";
import { ExperiencePage } from "./pages/Experience";
import { UniversityPage } from "./pages/University";
import { ProjectsPage } from "./pages/Projects";
import { PublicationsPage } from "./pages/Publications";
import { ContactPage } from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "university", element: <UniversityPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "publications", element: <PublicationsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
