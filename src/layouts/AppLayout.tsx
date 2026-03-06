import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { RouteProgress } from "@/components/RouteProgress";
import { Analytics } from "@vercel/analytics/react";

const BASE_URL = "https://fedebello.com";

export function AppLayout(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
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
