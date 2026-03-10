import { publications, conferences } from "@/publications/data";
import {
  personalProjects,
  freelanceProjects,
  universityProjects,
} from "@/projects/data";
import { experiences } from "@/experience/data";

const BASE_URL = "https://fedebello.com";
const AUTHOR = {
  "@type": "Person",
  name: "Federico Bello",
  url: BASE_URL,
};

function breadcrumb(
  ...crumbs: Array<{ name: string; path: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ...crumbs.map(({ name, path }, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name,
        item: `${BASE_URL}${path}`,
      })),
    ],
  };
}

function publicationsSchema(): object[] {
  const articles = publications.map((pub, i) => ({
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

  const events = conferences.map((conf) => ({
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
    breadcrumb({ name: "Publications", path: "/publications" }),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Publications by Federico Bello",
      itemListElement: articles,
    },
    ...events,
  ];
}

function projectsSchema(): object[] {
  const allProjects = [
    ...freelanceProjects,
    ...personalProjects,
    ...universityProjects,
  ];

  return [
    breadcrumb({ name: "Projects", path: "/projects" }),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Projects by Federico Bello",
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
          keywords: proj.tags.join(", "),
        },
      })),
    },
  ];
}

function experienceSchema(): object[] {
  return [
    breadcrumb({ name: "Experience", path: "/experience" }),
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Federico Bello",
      url: BASE_URL,
      hasOccupation: experiences.map((exp) => ({
        "@type": "Occupation",
        name: exp.role,
        occupationLocation: { "@type": "City", name: exp.location },
        description: exp.summary
          .map((s) => s.replace(/<[^>]+>/g, ""))
          .join(" "),
        skills: exp.stack.join(", "),
      })),
    },
  ];
}

export function getStructuredData(pathname: string): object[] {
  switch (pathname) {
    case "/publications":
      return publicationsSchema();
    case "/projects":
      return projectsSchema();
    case "/experience":
      return experienceSchema();
    case "/contact":
      return [breadcrumb({ name: "Contact", path: "/contact" })];
    default:
      return [];
  }
}
