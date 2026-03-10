import React from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { AppLayout } from "./layouts/AppLayout";
import { AboutPage } from "./pages/About";
import { ExperiencePage } from "./pages/Experience";
import { ProjectsPage } from "./pages/Projects";
import { PublicationsPage } from "./pages/Publications";
import { ContactPage } from "./pages/Contact";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "publications", element: <PublicationsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
];

export async function render(url: string): Promise<string> {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(url));

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(routes, context);
  return renderToString(
    <React.StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </React.StrictMode>
  );
}
