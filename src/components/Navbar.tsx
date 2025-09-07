import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { PrefetchNavLink } from "@/components/PrefetchLink";

const navItems = [
  { to: "/", label: "About Me" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  { to: "/contact", label: "Contact Me" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="font-semibold text-lg">
          Federico Bello
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <PrefetchNavLink
              key={item.to}
              to={item.to}
              hitArea="comfortable"
              className={({ isActive }) =>
                clsx(
                  "text-sm font-medium transition-colors hover:text-slate-900 dark:hover:text-white",
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-600 dark:text-slate-300"
                )
              }
            >
              {item.label}
            </PrefetchNavLink>
          ))}
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="menu"
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
        >
          <div className="container py-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <PrefetchNavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "py-2 text-sm font-medium transition-colors hover:text-slate-900 dark:hover:text-white",
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-600 dark:text-slate-300"
                  )
                }
              >
                {item.label}
              </PrefetchNavLink>
            ))}
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
