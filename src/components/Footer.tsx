import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/hooks/useI18n";

export function Footer(): JSX.Element {
  const { t } = useI18n();

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800 mt-12">
      <Container className="py-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} Federico Bello. {t.footer.rights}
        </p>
        <LanguageSwitcher variant="full" />
      </Container>
    </footer>
  );
}
