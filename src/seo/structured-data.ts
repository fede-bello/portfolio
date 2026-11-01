import { getConferences, getPublications } from "@/publications/data";
import { getProjects } from "@/projects/data";
import { getExperiences } from "@/experience/data";
import {
  getLangFromPath,
  localizePath,
  stripLang,
  type Lang,
  type PagePath,
} from "@/i18n/config";
import { UI } from "@/i18n/ui";

const BASE_URL = "https://www.fedebello.com";
const AUTHOR = {
  "@type": "Person",
  name: "Federico Bello",
  url: BASE_URL,
};

const HOME_LABEL: Record<Lang, string> = { en: "Home", es: "Inicio", fr: "Accueil" };

function url(path: string, lang: Lang): string {
  const localized = localizePath(path, lang);
  return localized === "/" ? `${BASE_URL}/` : `${BASE_URL}${localized}`;
}

function breadcrumb(lang: Lang, path: PagePath): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    inLanguage: lang,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: HOME_LABEL[lang], item: url("/", lang) },
      {
        "@type": "ListItem",
        position: 2,
        name: UI[lang].nav[path],
        item: url(path, lang),
      },
    ],
  };
}

function publicationsSchema(lang: Lang): object[] {
  const articles = getPublications(lang).map((pub, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "ScholarlyArticle",
      name: pub.title,
      author: pub.authors.split(",").map((a) => ({
        "@type": "Person",
        name: a.trim(),
      })),
      datePublished: pub.date,
      publisher: pub.venue,
      description: pub.summary,
      ...(pub.link ? { url: pub.link } : {}),
    },
  }));

  const events = getConferences(lang).map((conf) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: conf.talkTitle ?? conf.event,
    description: conf.talkDescription,
    location: conf.location,
    organizer: { "@type": "Organization", name: conf.event },
    performer: AUTHOR,
    ...(conf.link ? { url: conf.link } : {}),
  }));

  return [
    breadcrumb(lang, "/publications"),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      inLanguage: lang,
      name: `${UI[lang].publications.title} · Federico Bello`,
      itemListElement: articles,
    },
    ...events,
  ];
}

function projectsSchema(lang: Lang): object[] {
  const { ventures, freelance, personal, university } = getProjects(lang);
  const allProjects = [...ventures, ...freelance, ...personal, ...university];

  return [
    breadcrumb(lang, "/projects"),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      inLanguage: lang,
      name: `${UI[lang].projects.title} · Federico Bello`,
      itemListElement: allProjects.map((proj, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: proj.title,
          description: proj.summary,
          author: AUTHOR,
          ...(proj.repoUrl ? { codeRepository: proj.repoUrl } : {}),
          ...(proj.siteUrl ? { url: proj.siteUrl } : {}),
          ...(proj.tags ? { keywords: proj.tags.join(", ") } : {}),
        },
      })),
    },
  ];
}

function experienceSchema(lang: Lang): object[] {
  return [
    breadcrumb(lang, "/experience"),
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Federico Bello",
      url: BASE_URL,
      hasOccupation: getExperiences(lang).map((exp) => ({
        "@type": "Occupation",
        name: exp.role,
        occupationLocation: { "@type": "City", name: exp.location },
        description: exp.summary
          .map((s) => s.replace(/<[^>]+>/g, ""))
          .join(" "),
        ...(exp.stack ? { skills: exp.stack.join(", ") } : {}),
      })),
    },
  ];
}

export function getStructuredData(pathname: string): object[] {
  const lang = getLangFromPath(pathname);
  switch (stripLang(pathname)) {
    case "/publications":
      return publicationsSchema(lang);
    case "/projects":
      return projectsSchema(lang);
    case "/experience":
      return experienceSchema(lang);
    case "/contact":
      return [breadcrumb(lang, "/contact")];
    default:
      return [];
  }
}
