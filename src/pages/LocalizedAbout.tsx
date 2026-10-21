import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";

type Lang = "es" | "fr";

interface LocalizedContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  linksTitle: string;
  links: Array<{ label: string; href: string }>;
  connect: string;
}

const CONTENT: Record<Lang, LocalizedContent> = {
  es: {
    title: "Federico Bello (Fede Bello)",
    subtitle:
      "Ingeniero de Machine Learning • MVA en ENS Paris-Saclay • Becario Sophie Germain",
    paragraphs: [
      "Soy Federico Bello (Fede Bello), ingeniero de Machine Learning uruguayo. Actualmente curso el máster MVA (Mathématiques, Vision, Apprentissage) en la ENS Paris-Saclay, en París, como becario Sophie Germain.",
      "Antes trabajé como Lead Machine Learning Engineer en Tryolabs, integrado como Forward Deployed Engineer con el equipo de LlamaIndex, donde entregué soluciones de procesamiento de documentos con IA para grandes clientes, lideré la arquitectura de sistemas de IA y mentoreé ingenieros.",
      "Soy Ingeniero en Sistemas de Telecomunicaciones por la Facultad de Ingeniería de la Universidad de la República (UdelaR), con una tesis premiada sobre detección de anomalías con Graph Neural Networks. También fui docente e investigador en el Grupo de Teoría de la Información, trabajando en almacenamiento de datos en ADN.",
      "Mis intereses son el machine learning, las matemáticas aplicadas (procesamiento de señales) y la programación: construir sistemas de ML de punta a punta, confiables y prácticos. Hablo español, inglés, alemán y francés.",
    ],
    linksTitle: "Más sobre mi trabajo",
    links: [
      { label: "Experiencia", href: "/experience" },
      { label: "Proyectos", href: "/projects" },
      { label: "Publicaciones", href: "/publications" },
      { label: "Contacto", href: "/contact" },
    ],
    connect: "Contactame",
  },
  fr: {
    title: "Federico Bello (Fede Bello)",
    subtitle:
      "Ingénieur Machine Learning • MVA à l'ENS Paris-Saclay • Boursier Sophie Germain",
    paragraphs: [
      "Je suis Federico Bello (Fede Bello), ingénieur en Machine Learning uruguayen. Je suis actuellement étudiant du master MVA (Mathématiques, Vision, Apprentissage) à l'ENS Paris-Saclay, en tant que boursier Sophie Germain.",
      "Auparavant, j'étais Lead Machine Learning Engineer chez Tryolabs, intégré en tant que Forward Deployed Engineer à l'équipe de LlamaIndex, où j'ai livré des solutions de traitement de documents par IA pour de grands clients, dirigé l'architecture de systèmes d'IA et encadré des ingénieurs.",
      "Je suis ingénieur en systèmes de télécommunications de la Faculté d'ingénierie de l'Université de la République (UdelaR), avec un mémoire primé sur la détection d'anomalies par réseaux de neurones sur graphes (GNN). J'ai aussi été assistant d'enseignement et de recherche dans le groupe de théorie de l'information, sur le stockage de données dans l'ADN.",
      "Mes centres d'intérêt sont le machine learning, les mathématiques appliquées (traitement du signal) et la programmation : construire des systèmes de ML de bout en bout, fiables et pragmatiques. Je parle espagnol, anglais, allemand et français.",
    ],
    linksTitle: "En savoir plus sur mon travail",
    links: [
      { label: "Expérience", href: "/experience" },
      { label: "Projets", href: "/projects" },
      { label: "Publications", href: "/publications" },
      { label: "Contact", href: "/contact" },
    ],
    connect: "Me contacter",
  },
};

interface Props {
  lang: Lang;
}

export function LocalizedAboutPage({ lang }: Props): JSX.Element {
  const content = CONTENT[lang];

  return (
    <div lang={lang}>
      <SectionHeader title={content.title} subtitle={content.subtitle} />
      <Container className="max-w-5xl pb-16 space-y-4 leading-7 text-slate-700 dark:text-slate-200">
        {content.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <div className="pt-2">
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            {content.linksTitle}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {content.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-2">
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            {content.connect}
          </h2>
          <div className="mt-3">
            <SocialLinks />
          </div>
        </div>
      </Container>
    </div>
  );
}
