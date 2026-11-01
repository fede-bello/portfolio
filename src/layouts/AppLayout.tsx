import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { RouteProgress } from "@/components/RouteProgress";
import { Analytics } from "@vercel/analytics/react";
import { getStructuredData } from "@/seo/structured-data";
import {
  getLangFromPath,
  LANGS,
  localizePath,
  OG_LOCALES,
  PAGE_PATHS,
  stripLang,
} from "@/i18n/config";
import { getPageMeta } from "@/i18n/meta";

const BASE_URL = "https://www.fedebello.com";

function setMeta(name: string, content: string, property = false): void {
  const attr = property ? "property" : "name";
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function AppLayout(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    const meta = getPageMeta(location.pathname);
    const lang = getLangFromPath(location.pathname);

    document.documentElement.lang = lang;
    setMeta("og:locale", OG_LOCALES[lang], true);
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, true);
    setMeta("og:description", meta.description, true);
    setMeta("og:url", `${BASE_URL}${location.pathname}`, true);
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);

    let canonical = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = location.pathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${location.pathname}`;

    // Keep hreflang alternates in sync on client-side navigation (prerender emits the initial set).
    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((el) => el.remove());
    const isKnownPage = PAGE_PATHS.some((p) => p === stripLang(location.pathname));
    const alternates: Array<[string, string]> = !isKnownPage ? [] : [
      ...LANGS.map((l): [string, string] => [l, localizePath(location.pathname, l)]),
      ["x-default", localizePath(location.pathname, "en")],
    ];
    alternates.forEach(([hreflang, path]) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`;
      canonical?.after(link);
    });

    document.querySelectorAll("script[data-dynamic-schema]").forEach((el) => el.remove());
    getStructuredData(location.pathname).forEach((schema, i) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.setAttribute("data-dynamic-schema", String(i));
      el.textContent = JSON.stringify(schema);
      document.head.appendChild(el);
    });
  }, [location.pathname]);

  return (
    <div className="min-h-full flex flex-col">
      <RouteProgress />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition routeKey={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollRestoration />
      <Analytics />
    </div>
  );
}
