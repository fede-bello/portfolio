import {
  getLangFromPath,
  LANGS,
  localizePath,
  PAGE_PATHS,
  stripLang,
  type Lang,
  type PagePath,
} from "@/i18n/config";

interface PageMeta {
  title: string;
  description: string;
}

const PAGE_META: Record<Lang, Record<PagePath, PageMeta>> = {
  en: {
    "/": {
      title: "Federico Bello (Fede Bello) | Machine Learning Engineer, ENS Paris-Saclay",
      description:
        "Federico Bello (Fede Bello), Machine Learning Engineer and MVA student at ENS Paris-Saclay, Sophie Germain Scholar. Graph Neural Networks, AI systems & applied mathematics. Portfolio, projects and publications.",
    },
    "/experience": {
      title: "Experience | Federico Bello",
      description:
        "Federico Bello's professional experience, including Lead ML Engineer at Tryolabs, other ML engineering roles, and academic teaching and research.",
    },
    "/projects": {
      title: "Projects | Federico Bello",
      description:
        "ML and software engineering projects by Federico Bello — end-to-end AI systems, signal processing, and open-source work.",
    },
    "/publications": {
      title: "Publications | Federico Bello",
      description:
        "Research publications and conference talks by Federico Bello, covering Graph Neural Networks, anomaly detection, and DNA storage.",
    },
    "/contact": {
      title: "Contact | Federico Bello",
      description:
        "Get in touch with Federico Bello — open to collaborations, research opportunities, and interesting ML problems.",
    },
  },
  es: {
    "/": {
      title: "Federico Bello (Fede Bello) | Ingeniero de Machine Learning, ENS Paris-Saclay",
      description:
        "Federico Bello (Fede Bello), ingeniero de Machine Learning uruguayo, estudiante del máster MVA en la ENS Paris-Saclay y becario Sophie Germain. Redes neuronales en grafos, sistemas de IA y matemáticas aplicadas.",
    },
    "/experience": {
      title: "Experiencia | Federico Bello",
      description:
        "Experiencia profesional de Federico Bello: Lead ML Engineer en Tryolabs, otros roles de ingeniería de ML, y docencia e investigación académica.",
    },
    "/projects": {
      title: "Proyectos | Federico Bello",
      description:
        "Proyectos de ML e ingeniería de software de Federico Bello: sistemas de IA de punta a punta, procesamiento de señales y código abierto.",
    },
    "/publications": {
      title: "Publicaciones | Federico Bello",
      description:
        "Publicaciones científicas y charlas de Federico Bello sobre redes neuronales en grafos, detección de anomalías y almacenamiento en ADN.",
    },
    "/contact": {
      title: "Contacto | Federico Bello",
      description:
        "Contactá a Federico Bello: abierto a colaboraciones, oportunidades de investigación y problemas interesantes de ML.",
    },
  },
  fr: {
    "/": {
      title: "Federico Bello (Fede Bello) | Ingénieur Machine Learning, ENS Paris-Saclay",
      description:
        "Federico Bello (Fede Bello), ingénieur Machine Learning, étudiant du master MVA à l'ENS Paris-Saclay et boursier Sophie Germain. Réseaux de neurones sur graphes, systèmes d'IA et mathématiques appliquées.",
    },
    "/experience": {
      title: "Expérience | Federico Bello",
      description:
        "Parcours professionnel de Federico Bello : Lead ML Engineer chez Tryolabs, autres postes d'ingénieur ML, enseignement et recherche universitaires.",
    },
    "/projects": {
      title: "Projets | Federico Bello",
      description:
        "Projets de ML et de génie logiciel de Federico Bello : systèmes d'IA de bout en bout, traitement du signal et open source.",
    },
    "/publications": {
      title: "Publications | Federico Bello",
      description:
        "Publications scientifiques et présentations de Federico Bello sur les réseaux de neurones sur graphes, la détection d'anomalies et le stockage ADN.",
    },
    "/contact": {
      title: "Contact | Federico Bello",
      description:
        "Contactez Federico Bello : ouvert aux collaborations, aux opportunités de recherche et aux problèmes de ML intéressants.",
    },
  },
};

function isPagePath(path: string): path is PagePath {
  return PAGE_PATHS.some((p) => p === path);
}

/** Meta for any pathname (`/fr/projects`); unknown pages fall back to the home meta. */
export function getPageMeta(pathname: string): PageMeta {
  const lang = getLangFromPath(pathname);
  const path = stripLang(pathname);
  return PAGE_META[lang][isPagePath(path) ? path : "/"];
}

/** Every localized URL that should be pre-rendered, e.g. `/`, `/es/projects`, ... */
export const LOCALIZED_ROUTES: ReadonlyArray<string> = LANGS.flatMap((lang) =>
  PAGE_PATHS.map((path) => localizePath(path, lang))
);
