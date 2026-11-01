import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { LANG_LABELS, LANGS, localizePath, getLangFromPath } from "@/i18n/config";
import { UI } from "@/i18n/ui";

interface Props {
  /** "short" renders EN / ES / FR, "full" renders English / Español / Français. */
  variant?: "short" | "full";
  className?: string;
  onNavigate?: () => void;
}

/** Links to the current page in every language, so switching keeps you on the same page. */
export function LanguageSwitcher({
  variant = "short",
  className,
  onNavigate,
}: Props): JSX.Element {
  const { pathname } = useLocation();
  const current = getLangFromPath(pathname);

  return (
    <nav aria-label={UI[current].languages} className={clsx("flex items-center gap-3", className)}>
      {LANGS.map((lang) => {
        const active = lang === current;
        return (
          <Link
            key={lang}
            to={localizePath(pathname, lang)}
            hrefLang={lang}
            lang={lang}
            onClick={onNavigate}
            aria-current={active ? "true" : undefined}
            aria-label={variant === "short" ? LANG_LABELS[lang] : undefined}
            className={clsx(
              "text-sm transition-colors hover:underline",
              active
                ? "font-semibold text-slate-900 dark:text-white"
                : "text-slate-600 dark:text-slate-400"
            )}
          >
            {variant === "short" ? lang.toUpperCase() : LANG_LABELS[lang]}
          </Link>
        );
      })}
    </nav>
  );
}
