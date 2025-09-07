import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { RouteProgress } from "@/components/RouteProgress";

export function AppLayout() {
  const location = useLocation();

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
    </div>
  );
}
