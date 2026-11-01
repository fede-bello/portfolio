import type { Lang } from "@/i18n/config";

const EN_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const MONTHS: Record<Lang, ReadonlyArray<string>> = {
  en: EN_MONTHS,
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"],
  fr: [
    "janv.", "févr.", "mars", "avr.", "mai", "juin",
    "juil.", "août", "sept.", "oct.", "nov.", "déc.",
  ],
};

const PRESENT: Record<Lang, string> = {
  en: "Present",
  es: "Actualidad",
  fr: "Aujourd'hui",
};

/** Turns a "MMM YYYY" date into a sortable month index (higher = more recent). */
export function dateKey(date: string): number {
  const [month, year] = date.split(" ");
  const monthIndex = EN_MONTHS.indexOf(month);
  return Number(year) * 12 + (monthIndex < 0 ? 0 : monthIndex);
}

/**
 * Translates English dates and periods written as "MMM YYYY", "YYYY - Present", etc.
 * e.g. "Oct 2024 - Present" → "oct. 2024 - Aujourd'hui" (fr).
 */
export function formatDate(value: string, lang: Lang): string {
  if (lang === "en") return value;
  return value
    .replace(/\bPresent\b/g, PRESENT[lang])
    .replace(/\b([A-Z][a-z]{2})(?= \d{4})/g, (month) => {
      const index = EN_MONTHS.indexOf(month);
      return index < 0 ? month : MONTHS[lang][index];
    });
}
