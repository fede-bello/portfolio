import type { ConferenceEntry, Publication } from "@/types/publications";
import type { Lang, Localized } from "@/i18n/config";
import { dateKey, formatDate } from "@/i18n/dates";

type PublicationEntry = Omit<Publication, "location" | "summary"> & {
  location: Localized;
  summary: Localized;
};

type ConferenceRawEntry = Omit<ConferenceEntry, "location" | "role" | "talkDescription"> & {
  location: Localized;
  role: Localized;
  talkDescription?: Localized;
};

/** Sort by date, most recent first. Dates are "MMM YYYY" in English. */
function byDateDesc<T extends { date: string }>(a: T, b: T): number {
  return dateKey(b.date) - dateKey(a.date);
}

const publicationEntries: ReadonlyArray<PublicationEntry> = [
  {
    title: "The Lattice-Input Discrete-Time Poisson Channel",
    venue: "IEEE - ISIT",
    date: "Aug 2024",
    location: { en: "Athens, Greece", es: "Atenas, Grecia", fr: "Athènes, Grèce" },
    authors: "Federico Bello, Álvaro Martín, Tatiana Rischewski, Gadiel Seroussi",
    summary: {
      en: "In this work we examine the Lattice-Input Discrete-Time Poisson (LIDTP) channel, relevant to DNA storage systems. We analyze communication performance with lattice-constrained inputs under Poisson noise and discuss implications for reliable molecular data storage.",
      es: "En este trabajo estudiamos el canal de Poisson en tiempo discreto con entradas en un reticulado (LIDTP), relevante para los sistemas de almacenamiento en ADN. Analizamos el desempeño de la comunicación con entradas restringidas a un reticulado bajo ruido de Poisson y discutimos sus implicancias para el almacenamiento molecular de datos confiable.",
      fr: "Dans ce travail, nous étudions le canal de Poisson à temps discret à entrées sur un réseau (LIDTP), pertinent pour les systèmes de stockage sur ADN. Nous analysons les performances de communication avec des entrées contraintes à un réseau sous bruit de Poisson et discutons des implications pour un stockage moléculaire fiable des données.",
    },
    link: "https://ieeexplore.ieee.org/document/10619495",
  },
  {
    title:
      "GNNs for Time Series Anomaly Detection: An Open-Source Framework and a Critical Evaluation",
    venue: "ICPRAM 2026",
    date: "Mar 2026",
    location: { en: "Marbella, Spain", es: "Marbella, España", fr: "Marbella, Espagne" },
    authors:
      "Federico Bello, Gonzalo Chiarlone, Marcelo Fiori, Gastón García González, Federico Larroca",
    summary: {
      en: "We present GraGOD, an open-source framework for time series anomaly detection (TSAD) using Graph Neural Networks, designed to support reproducible experimentation across datasets, graph structures, and evaluation strategies. Our critical evaluation shows that GNNs improve both detection performance and interpretability, and that attention-based GNNs remain robust when the graph structure is uncertain or inferred.",
      es: "Presentamos GraGOD, un framework de código abierto para la detección de anomalías en series temporales (TSAD) con redes neuronales en grafos, diseñado para permitir experimentos reproducibles con distintos datasets, estructuras de grafo y estrategias de evaluación. Nuestra evaluación crítica muestra que las GNNs mejoran tanto el desempeño de detección como la interpretabilidad, y que las GNNs basadas en atención siguen siendo robustas cuando la estructura del grafo es incierta o inferida.",
      fr: "Nous présentons GraGOD, un framework open source pour la détection d'anomalies dans les séries temporelles (TSAD) à l'aide de réseaux de neurones sur graphes, conçu pour des expérimentations reproductibles sur différents jeux de données, structures de graphes et stratégies d'évaluation. Notre évaluation critique montre que les GNN améliorent à la fois les performances de détection et l'interprétabilité, et que les GNN à mécanisme d'attention restent robustes lorsque la structure du graphe est incertaine ou inférée.",
    },
    link: "https://arxiv.org/abs/2603.09675",
  },
];

const conferenceEntries: ReadonlyArray<ConferenceRawEntry> = [
  {
    event: "LANET 2025",
    date: "Aug 2025",
    location: {
      en: "Punta del Este, Uruguay",
      es: "Punta del Este, Uruguay",
      fr: "Punta del Este, Uruguay",
    },
    role: { en: "Speaker", es: "Ponente", fr: "Intervenant" },
    talkTitle: "GraGOD: Graph based time series anomaly detection",
    talkDescription: {
      en: "In this conference I presented my thesis work, where we studied modeling multivariate time series as graphs and using GNNs to exploit inter-variable structure for reliable anomaly detection.",
      es: "En esta conferencia presenté el trabajo de mi tesis, en el que estudiamos cómo modelar series temporales multivariadas como grafos y usar GNNs para aprovechar la estructura entre variables y detectar anomalías de forma confiable.",
      fr: "Lors de cette conférence, j'ai présenté mon travail de fin d'études, dans lequel nous avons modélisé des séries temporelles multivariées sous forme de graphes et utilisé des GNN pour exploiter la structure entre variables afin de détecter les anomalies de manière fiable.",
    },
    link: "https://lanet2025.uy/",
  },
];

export function getPublications(lang: Lang): ReadonlyArray<Publication> {
  return [...publicationEntries].sort(byDateDesc).map((entry) => ({
    ...entry,
    date: formatDate(entry.date, lang),
    location: entry.location[lang],
    summary: entry.summary[lang],
  }));
}

export function getConferences(lang: Lang): ReadonlyArray<ConferenceEntry> {
  return [...conferenceEntries].sort(byDateDesc).map((entry) => ({
    ...entry,
    date: formatDate(entry.date, lang),
    location: entry.location[lang],
    role: entry.role[lang],
    talkDescription: entry.talkDescription?.[lang],
  }));
}
