import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { RouteProgress } from "@/components/RouteProgress";
import { Analytics } from "@vercel/analytics/react";
import { getStructuredData } from "@/seo/structured-data";

const BASE_URL = "https://www.fedebello.com";

interface PageMeta {
  title: string;
  description: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Federico Bello (Fede Bello) | Machine Learning Engineer, ENS Paris-Saclay",
    description:
      "Federico Bello (Fede Bello), Machine Learning Engineer and MVA student at ENS Paris-Saclay, Sophie Germain Scholar. Graph Neural Networks, AI systems & applied mathematics. Portfolio, projects and publications.",
  },
  "/es": {
    title: "Federico Bello (Fede Bello) | Ingeniero de Machine Learning, ENS Paris-Saclay",
    description:
      "Federico Bello (Fede Bello), ingeniero de Machine Learning uruguayo, estudiante del máster MVA en la ENS Paris-Saclay y becario Sophie Germain. Redes neuronales en grafos, sistemas de IA y matemáticas aplicadas.",
  },
  "/fr": {
    title: "Federico Bello (Fede Bello) | Ingénieur Machine Learning, ENS Paris-Saclay",
    description:
      "Federico Bello (Fede Bello), ingénieur Machine Learning, étudiant du master MVA à l'ENS Paris-Saclay et boursier Sophie Germain. Réseaux de neurones sur graphes, systèmes d'IA et mathématiques appliquées.",
  },
  "/experience": {
    title: "Experience | Federico Bello",
    description:
      "Federico Bello's professional experience, including Lead ML Engineer at Tryolabs, other ML engineering roles, and academic teaching and research.",
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

const LANGS: Record<string, string> = { "/es": "es", "/fr": "fr" };

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

    document.documentElement.lang = LANGS[location.pathname] ?? "en";
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
