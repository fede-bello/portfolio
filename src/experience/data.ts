import type { Experience } from "@/types/experience";
import type { Lang, Localized } from "@/i18n/config";
import { formatDate } from "@/i18n/dates";

type ExperienceEntry = Omit<Experience, "role" | "summary"> & {
  role: Localized;
  summary: Localized<ReadonlyArray<string>>;
};

const LLAMAINDEX_LINK =
  '<a href="https://www.llamaindex.ai/" target="_blank" rel="noopener noreferrer">LlamaIndex</a>';
const NTI_URL = "https://www.fing.edu.uy/es/grupos/nti";
const DOCSHUNTER_LINK =
  '<a href="https://docshunter.ai/" target="_blank" rel="noopener noreferrer">Docshunter</a>';
const nti = (label: string): string =>
  `<a href="${NTI_URL}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const entries: ReadonlyArray<ExperienceEntry> = [
  {
    role: {
      en: "ML Engineer",
      es: "ML Engineer",
      fr: "ML Engineer",
    },
    company: "binbash",
    companyUrl: "https://binbash.co/",
    orgKind: "company",
    period: "Sep 2026 - Present",
    location: "Remote, United States",
    summary: {
      en: [
        "Build <strong>agentic platforms on AWS</strong> (Bedrock, AgentCore) together with client teams, with infrastructure as code.",
        "Choose models using <strong>real production data</strong>, matching quality at a fraction of the cost.",
        "Work with client engineers on cost, latency and reliability trade-offs, helping them get to production.",
      ],
      es: [
        "Construyo <strong>plataformas agénticas en AWS</strong> (Bedrock, AgentCore) junto a los equipos de los clientes, con infraestructura como código.",
        "Elijo modelos a partir de <strong>datos reales de producción</strong>, igualando la calidad a una fracción del costo.",
        "Trabajo con los ingenieros de los clientes en los compromisos entre costo, latencia y confiabilidad, ayudándolos a llegar a producción.",
      ],
      fr: [
        "Je construis des <strong>plateformes agentiques sur AWS</strong> (Bedrock, AgentCore) avec les équipes des clients, avec de l'infrastructure as code.",
        "Je choisis les modèles à partir de <strong>données réelles de production</strong>, pour une qualité équivalente à une fraction du coût.",
        "Je travaille avec les ingénieurs des clients sur les arbitrages entre coût, latence et fiabilité, pour les aider à atteindre la production.",
      ],
    },
    stack: ["Bedrock", "AgentCore", "Claude", "GPT", "Python", "Terraform"],
  },
  {
    role: {
      en: "Lead Machine Learning Engineer",
      es: "Lead Machine Learning Engineer",
      fr: "Lead Machine Learning Engineer",
    },
    company: "Tryolabs",
    companyUrl: "https://tryolabs.com/",
    orgKind: "company",
    period: "Oct 2024 - Sep 2026",
    location: "Montevideo, Uruguay",
    summary: {
      en: [
        `Worked as an <strong>embedded Forward Deployed Engineer with the ${LLAMAINDEX_LINK} team</strong>, taking document-processing systems from prototype to production for enterprise clients (BP, EY, Guidehouse) and driving adoption of the <strong>LlamaCloud</strong> platform.`,
        "Led the technical architecture of <strong>Geosphere (UNICEF)</strong>, an open-source initiative designing advanced agents with the Model Context Protocol (MCP) — recognized by <strong>IRCAI (UNESCO) as one of the top 100 AI projects globally</strong>.",
        "<strong>Mentored the engineering team</strong>, led technical interviews, defined engineering standards for AI system design and deployment, and represented the company through public talks and internal workshops.",
      ],
      es: [
        `Trabajé como <strong>Forward Deployed Engineer integrado al equipo de ${LLAMAINDEX_LINK}</strong>, llevando sistemas de procesamiento de documentos de prototipo a producción para clientes enterprise (BP, EY, Guidehouse) e impulsando la adopción de la plataforma <strong>LlamaCloud</strong>.`,
        "Lideré la arquitectura técnica de <strong>Geosphere (UNICEF)</strong>, una iniciativa de código abierto que diseña agentes avanzados con el Model Context Protocol (MCP), reconocida por <strong>IRCAI (UNESCO) como uno de los 100 mejores proyectos de IA del mundo</strong>.",
        "<strong>Mentoreé al equipo de ingeniería</strong>, conduje entrevistas técnicas, definí estándares de ingeniería para el diseño y despliegue de sistemas de IA, y representé a la empresa en charlas públicas y talleres internos.",
      ],
      fr: [
        `J'ai travaillé comme <strong>Forward Deployed Engineer intégré à l'équipe de ${LLAMAINDEX_LINK}</strong>, en faisant passer des systèmes de traitement de documents du prototype à la production pour de grands clients (BP, EY, Guidehouse) et en favorisant l'adoption de la plateforme <strong>LlamaCloud</strong>.`,
        "J'ai dirigé l'architecture technique de <strong>Geosphere (UNICEF)</strong>, une initiative open source qui conçoit des agents avancés avec le Model Context Protocol (MCP), reconnue par l'<strong>IRCAI (UNESCO) comme l'un des 100 meilleurs projets d'IA au monde</strong>.",
        "J'ai <strong>encadré l'équipe d'ingénierie</strong>, mené des entretiens techniques, défini des standards d'ingénierie pour la conception et le déploiement de systèmes d'IA, et représenté l'entreprise lors de conférences publiques et d'ateliers internes.",
      ],
    },
    stack: ["LlamaIndex", "LlamaCloud", "MCP", "FastAPI", "Python", "GCP", "AWS"],
  },
  {
    role: {
      en: "Teaching and Research Assistant",
      es: "Docente e investigador asistente",
      fr: "Assistant d'enseignement et de recherche",
    },
    company: "InCo - UdelaR",
    companyUrl: "https://www.fing.edu.uy/es/inco",
    orgKind: "university",
    period: "Feb 2023 - Feb 2025",
    location: "Montevideo, Uruguay",
    summary: {
      en: [
        "<strong>Led theoretical and practical classes for Programming 1</strong>, teaching imperative programming fundamentals including algorithm design and structured implementation techniques.",
        "<strong>Assisted Programming 2 laboratory sessions</strong>, focusing on data abstractions (lists, stacks, queues, binary trees) and implementing them using modularization, good programming practices, and basic algorithm analysis.",
        `<strong>Conducted research on DNA storage</strong> with the ${nti("Information Theory Group")}.`,
      ],
      es: [
        "<strong>Dicté clases teóricas y prácticas de Programación 1</strong>, enseñando los fundamentos de la programación imperativa, incluyendo diseño de algoritmos y técnicas de implementación estructurada.",
        "<strong>Asistí en los laboratorios de Programación 2</strong>, centrados en abstracciones de datos (listas, pilas, colas, árboles binarios) y su implementación con modularización, buenas prácticas de programación y análisis básico de algoritmos.",
        `<strong>Investigué sobre almacenamiento de datos en ADN</strong> con el ${nti("Grupo de Teoría de la Información")}.`,
      ],
      fr: [
        "<strong>J'ai assuré les cours théoriques et pratiques de Programmation 1</strong>, en enseignant les fondamentaux de la programmation impérative, dont la conception d'algorithmes et les techniques d'implémentation structurée.",
        "<strong>J'ai encadré les travaux pratiques de Programmation 2</strong>, axés sur les abstractions de données (listes, piles, files, arbres binaires) et leur implémentation avec modularisation, bonnes pratiques de programmation et analyse élémentaire d'algorithmes.",
        `<strong>J'ai mené des recherches sur le stockage de données dans l'ADN</strong> au sein du ${nti("groupe de théorie de l'information")}.`,
      ],
    },
    stack: ["Pascal", "C++"],
  },
  {
    role: {
      en: "AI Developer",
      es: "Desarrollador de IA",
      fr: "Développeur IA",
    },
    company: "Eagerworks",
    companyUrl: "https://eagerworks.com/",
    orgKind: "company",
    period: "Feb 2024 - Oct 2024",
    location: "Montevideo, Uruguay",
    summary: {
      en: [
        `<strong>Worked in the development</strong> of the backend for ${DOCSHUNTER_LINK}, a document management and generation platform. Built an <strong>API</strong> designed to be <strong>reused</strong> in other client applications.`,
        "Wrote <strong>blog posts</strong> about <strong>technical solutions</strong> used in the platform.",
        "Took part in <strong>technical interviews</strong> with potential candidates.",
      ],
      es: [
        `<strong>Participé en el desarrollo</strong> del backend de ${DOCSHUNTER_LINK}, una plataforma de gestión y generación de documentos. Construí una <strong>API</strong> diseñada para ser <strong>reutilizada</strong> en otras aplicaciones de clientes.`,
        "Escribí <strong>artículos de blog</strong> sobre las <strong>soluciones técnicas</strong> utilizadas en la plataforma.",
        "Participé en <strong>entrevistas técnicas</strong> con candidatos.",
      ],
      fr: [
        `<strong>J'ai participé au développement</strong> du backend de ${DOCSHUNTER_LINK}, une plateforme de gestion et de génération de documents. J'ai conçu une <strong>API</strong> pensée pour être <strong>réutilisée</strong> dans d'autres applications clientes.`,
        "J'ai rédigé des <strong>articles de blog</strong> sur les <strong>solutions techniques</strong> utilisées dans la plateforme.",
        "J'ai participé à des <strong>entretiens techniques</strong> avec des candidats.",
      ],
    },
    stack: ["FastAPI", "Postgres", "Python", "Langchain", "AWS"],
  },
  {
    role: {
      en: "Junior Developer",
      es: "Desarrollador junior",
      fr: "Développeur junior",
    },
    company: "Sinapsis",
    companyUrl: "https://www.sinapsis.com.uy/",
    orgKind: "company",
    period: "Aug 2023 - Feb 2024",
    location: "Montevideo, Uruguay",
    summary: {
      en: [
        "Built and implemented <strong>web applications</strong> using <strong>.NET</strong> technologies to support risk analysis for national and international banks.",
      ],
      es: [
        "Desarrollé e implementé <strong>aplicaciones web</strong> con tecnologías <strong>.NET</strong> para el análisis de riesgo de bancos nacionales e internacionales.",
      ],
      fr: [
        "J'ai développé et mis en œuvre des <strong>applications web</strong> avec les technologies <strong>.NET</strong> pour l'analyse de risque de banques nationales et internationales.",
      ],
    },
    stack: [".NET", "C#", "T-SQL (SQL Server)"],
  },
];

export function getExperiences(lang: Lang): ReadonlyArray<Experience> {
  return entries.map((entry) => ({
    ...entry,
    role: entry.role[lang],
    summary: entry.summary[lang],
    period: formatDate(entry.period, lang),
  }));
}
