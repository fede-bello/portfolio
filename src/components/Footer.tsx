import { Container } from "@/components/Container";

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800 mt-12">
      <Container className="py-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Federico Bello. All rights reserved.</p>
        <nav aria-label="Languages" className="flex gap-3">
          <a href="/" hrefLang="en" lang="en" className="hover:underline">
            English
          </a>
          <a href="/es" hrefLang="es" lang="es" className="hover:underline">
            Español
          </a>
          <a href="/fr" hrefLang="fr" lang="fr" className="hover:underline">
            Français
          </a>
        </nav>
      </Container>
    </footer>
  );
}
