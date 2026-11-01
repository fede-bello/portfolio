import { useLocation } from "react-router-dom";
import { getLangFromPath, localizePath, type Lang } from "@/i18n/config";
import { UI, type UiStrings } from "@/i18n/ui";

interface I18n {
  lang: Lang;
  t: UiStrings;
  /** Prefixes a language-independent path (`/projects`) with the current language. */
  to: (path: string) => string;
}

/** Current language (derived from the URL) plus its UI strings. */
export function useI18n(): I18n {
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);
  return { lang, t: UI[lang], to: (path) => localizePath(path, lang) };
}
