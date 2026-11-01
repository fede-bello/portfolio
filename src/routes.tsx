import type { RouteObject } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { AboutPage } from "@/pages/About";
import { ExperiencePage } from "@/pages/Experience";
import { ProjectsPage } from "@/pages/Projects";
import { PublicationsPage } from "@/pages/Publications";
import { ContactPage } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";
import { PREFIXED_LANGS } from "@/i18n/config";

const pageRoutes: RouteObject[] = [
  { index: true, element: <AboutPage /> },
  { path: "experience", element: <ExperiencePage /> },
  { path: "projects", element: <ProjectsPage /> },
  { path: "publications", element: <PublicationsPage /> },
  { path: "contact", element: <ContactPage /> },
];

/** Shared by the browser router and the SSR pre-renderer. Pages read the language from the URL. */
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      ...pageRoutes,
      ...PREFIXED_LANGS.map((lang) => ({ path: lang, children: pageRoutes })),
      { path: "*", element: <NotFound /> },
    ],
  },
];
