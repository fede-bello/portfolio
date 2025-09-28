import type { ConferenceEntry, Publication } from "@/types/publications";

export const publications: ReadonlyArray<Publication> = [
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
];

export const conferences: ReadonlyArray<ConferenceEntry> = [
  {
    event: "LANET 2025 - 4th Latin American Conference on Complex Networks",
    date: "Aug 2025",
    location: "Punta del Este, Uruguay",
    role: "Speaker",
    talkTitle: "GraGOD: Graph based time series anomaly detection",
    talkDescription:
      "In this conference I presented my thesis work, where we studied modeling multivariate time series as graphs and using GNNs to exploit inter-variable structure for reliable anomaly detection.",
    link: "https://lanet2025.uy/",
  },
];
