import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { RouteProgress } from "@/components/RouteProgress";
import { Analytics } from "@vercel/analytics/react";

const BASE_URL = "https://fedebello.com";

interface PageMeta {
  title: string;
  description: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Federico Bello | Portfolio",
    description:
      "Lead ML Engineer at Tryolabs. Graph Neural Networks, AI systems & applied mathematics. Explore Federico Bello's projects and publications.",
  },
  "/experience": {
    title: "Experience | Federico Bello",
    description:
      "Federico Bello's professional experience as Lead ML Engineer at Tryolabs, including past roles in ML engineering and academic teaching.",
  },
  "/projects": {
    title: "Projects | Federico Bello",
    description:
      "ML and software engineering projects by Federico Bello — end-to-end AI systems, signal processing, and open-source work.",
  },
  "/publications": {
    title: "Publications | Federico Bello",
    description:
      "Research publications and conference talks by Federico Bello, covering Graph Neural Networks, anomaly detection, and DNA storage.",
  },
  "/contact": {
    title: "Contact | Federico Bello",
    description: "Get in touch with Federico Bello — open to collaborations, research opportunities, and interesting ML problems.",
  },
};

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
    const meta = PAGE_META[location.pathname] ?? PAGE_META["/"];

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
    canonical.href = `${BASE_URL}${location.pathname}`;
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
