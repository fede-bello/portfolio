export type Lang = "en" | "es" | "fr";

export const LANGS: ReadonlyArray<Lang> = ["en", "es", "fr"];
const DEFAULT_LANG: Lang = "en";

/** Languages served under a URL prefix (`/es/...`, `/fr/...`). English lives at the root. */
export const PREFIXED_LANGS: ReadonlyArray<Exclude<Lang, "en">> = ["es", "fr"];

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export const OG_LOCALES: Record<Lang, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
};

/** Language-independent page paths. */
export const PAGE_PATHS = ["/", "/experience", "/projects", "/publications", "/contact"] as const;
export type PagePath = (typeof PAGE_PATHS)[number];

export type Localized<T = string> = Record<Lang, T>;

function isPrefixedLang(segment: string | undefined): segment is Exclude<Lang, "en"> {
  return PREFIXED_LANGS.some((lang) => lang === segment);
}

/** Reads the language from a pathname like `/fr/projects`. */
export function getLangFromPath(pathname: string): Lang {
  const first = pathname.split("/")[1];
  return isPrefixedLang(first) ? first : DEFAULT_LANG;
}

/** Removes the language prefix: `/fr/projects` → `/projects`, `/fr` → `/`. */
export function stripLang(pathname: string): string {
  const segments = pathname.split("/");
  if (!isPrefixedLang(segments[1])) return pathname || "/";
  const rest = segments.slice(2).join("/");
  return rest ? `/${rest}` : "/";
}

/** Builds the URL of a language-independent path in the given language. */
export function localizePath(path: string, lang: Lang): string {
  const base = stripLang(path);
  if (lang === DEFAULT_LANG) return base;
  return base === "/" ? `/${lang}` : `/${lang}${base}`;
}
