import { Container } from "@/components/Container";

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800 mt-12">
      <Container className="py-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Federico Bello. All rights reserved.</p>
        <p className="opacity-80">Built with React, Vite, Tailwind.</p>
      </Container>
    </footer>
  );
}
