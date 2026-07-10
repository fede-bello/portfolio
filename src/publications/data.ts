import type { ConferenceEntry, Publication } from "@/types/publications";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** Turns a "MMM YYYY" date into a sortable month index (higher = more recent). */
function dateKey(date: string): number {
  const [month, year] = date.split(" ");
  const monthIndex = MONTHS.indexOf(month);
  return Number(year) * 12 + (monthIndex < 0 ? 0 : monthIndex);
}

/** Sort by date, most recent first. */
function byDateDesc<T extends { date: string }>(a: T, b: T): number {
  return dateKey(b.date) - dateKey(a.date);
}

const publicationEntries: ReadonlyArray<Publication> = [
  {
    title: "The Lattice-Input Discrete-Time Poisson Channel",
    venue: "IEEE - ISIT",
    date: "Aug 2024",
    location: "Athens, Greece",
    authors:
      "Federico Bello, Álvaro Martín, Tatiana Rischewski, Gadiel Seroussi",
    summary:
      "In this work we examine the Lattice-Input Discrete-Time Poisson (LIDTP) channel, relevant to DNA storage systems. We analyze communication performance with lattice-constrained inputs under Poisson noise and discuss implications for reliable molecular data storage.",
    link: "https://ieeexplore.ieee.org/document/10619495",
  },
  {
    title:
      "GNNs for Time Series Anomaly Detection: An Open-Source Framework and a Critical Evaluation",
    venue: "ICPRAM 2026",
    date: "Mar 2026",
    location: "Marbella, Spain",
    authors:
      "Federico Bello, Gonzalo Chiarlone, Marcelo Fiori, Gastón García González, Federico Larroca",
    summary:
      "We present GraGOD, an open-source framework for time series anomaly detection (TSAD) using Graph Neural Networks, designed to support reproducible experimentation across datasets, graph structures, and evaluation strategies. Our critical evaluation shows that GNNs improve both detection performance and interpretability, and that attention-based GNNs remain robust when the graph structure is uncertain or inferred.",
    link: "https://arxiv.org/abs/2603.09675",
  },
];

export const publications: ReadonlyArray<Publication> = [
  ...publicationEntries,
].sort(byDateDesc);

const conferenceEntries: ReadonlyArray<ConferenceEntry> = [
  {
    event: "LANET 2025",
    date: "Aug 2025",
    location: "Punta del Este, Uruguay",
    role: "Speaker",
    talkTitle: "GraGOD: Graph based time series anomaly detection",
    talkDescription:
      "In this conference I presented my thesis work, where we studied modeling multivariate time series as graphs and using GNNs to exploit inter-variable structure for reliable anomaly detection.",
    link: "https://lanet2025.uy/",
  },
];

export const conferences: ReadonlyArray<ConferenceEntry> = [
  ...conferenceEntries,
].sort(byDateDesc);
