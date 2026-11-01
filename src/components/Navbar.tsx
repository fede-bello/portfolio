import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { PrefetchNavLink } from "@/components/PrefetchLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/hooks/useI18n";
import { PAGE_PATHS } from "@/i18n/config";

function navLinkClass(base: string) {
  return ({ isActive }: { isActive: boolean }) =>
    clsx(
      base,
      isActive
        ? "text-slate-900 dark:text-white"
        : "text-slate-600 dark:text-slate-300"
    );
}

export function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const { t, to } = useI18n();
  const navItems = PAGE_PATHS.map((path) => ({ to: to(path), label: t.nav[path] }));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex items-center justify-between h-16">
        <Link to={to("/")} className="font-semibold text-lg">
          Federico Bello
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <PrefetchNavLink
              key={item.to}
              to={item.to}
              hitArea="comfortable"
              end
              className={navLinkClass(
                "text-sm font-medium transition-colors hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {item.label}
            </PrefetchNavLink>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2"
          aria-label={t.menu.open}
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
                end
                onClick={() => setOpen(false)}
                className={navLinkClass(
                  "py-2 text-sm font-medium transition-colors hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {item.label}
              </PrefetchNavLink>
            ))}
            <LanguageSwitcher className="py-2" onNavigate={() => setOpen(false)} />
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
