import type { Project } from "@/types/projects";

const toAtt = (href: string, title?: string) => ({
  href,
  title: title ?? href.split("/").pop() ?? "PDF",
});

export const personalProjects: ReadonlyArray<Project> = [
  {
    slug: "truco",
    title: "Truco",
    type: "personal",
    timestamp: "2025",
    summary:
      "Work-in-progress engine for the Uruguayan card game Truco with reinforcement learning support.",
    description:
      "A minimal engine for simulating the Uruguayan Truco card game. It provides clean abstractions for hands, bidding, and scoring, plus tooling to train, evaluate, and play against RL agents (Monte Carlo, Q-learning). Play in the terminal or benchmark agents across different skill levels in a reproducible environment.",
    tags: ["Reinforcement Learning", "Q-Learning", "Monte Carlo"],
    repoUrl: "https://github.com/fede-bello/truco",
  },
  {
    slug: "gragod",
    title: "GraGOD",
    type: "personal",
    timestamp: "2024",
    summary:
      "Modern PyTorch-based framework for time-series anomaly detection using GNN techniques.",
    description:
      "GraGOD is a modern approach to time-series anomaly detection using GNN techniques. It is a PyTorch-based framework that provides a flexible and modular architecture for building and training GNN models for anomaly detection. The objective of this project is to facilitate the development and testing of new models and datasets for anomaly detection, providing a standard way to organize the code and the data.",
    tags: ["GNNs", "Time Series", "Anomaly Detection", "PyTorch"],
    siteUrl: "https://www.gragod.com/",
  },
  {
    slug: "datathon",
    title: "Datathon",
    type: "personal",
    timestamp: "2023",
    summary:
      "Data analysis project on how social variables influence salaries in Uruguay.",
    description:
      "Developed for a UN datathon, this project applies interpretable machine learning to salary data from Uruguay's National Statistics Institute. It highlights key social factors behind wage inequality and provides transparent insights to support policy decisions. The focus is on clarity, fairness, and actionable recommendations rather than just prediction accuracy.",
    tags: ["DataViz", "Pandas", "Interpretable ML"],
    repoUrl: "https://github.com/fede-bello/datathon",
  },
];

export const universityProjects: ReadonlyArray<Project> = [
  {
    slug: "audio",
    title: "Audio Signal Processing",
    type: "university",
    timestamp: "2024",
    summary:
      "Advanced DSP course focused on audio signals, from STFT to LPC and cepstrum.",
    description:
      "The course dives into time–frequency analysis, source–filter models, and deconvolution, with practical algorithms for pitch detection and spectral envelope estimation. We implemented classic techniques such as Linear Predictive Coding (LPC) and cepstral analysis, gaining experience transferable to telecoms, music, and bioacoustics.",
    tags: ["DSP", "Audio"],
    attachments: [
      toAtt("/projects/fing/audio/reports/Report 1.pdf", "Report 1"),
      toAtt("/projects/fing/audio/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/audio/reports/Report 3.pdf", "Report 3"),
      toAtt("/projects/fing/audio/reports/Report 4.pdf", "Report 4"),
      toAtt("/projects/fing/audio/reports/Final Report.pdf", "Final Report"),
    ],
  },

  {
    slug: "electronica",
    title: "Fundamental Electronics",
    type: "university",
    timestamp: "2024",
    summary:
      "Core concepts of real electronic components, circuits, and lab design.",
    description:
      "The course builds intuition for analyzing and designing circuits with op-amps, diodes, transistors, and MOSFETs. We used SPICE simulations and lab work to bridge theoretical models with real-world device behavior, learning to diagnose mismatches, refine designs, and work effectively with datasheets.",
    tags: ["Electronics"],
    attachments: [
      toAtt("/projects/fing/electronica/reports/Report 1.pdf", "Lab 1"),
      toAtt("/projects/fing/electronica/reports/Report 2.pdf", "Lab 2"),
      toAtt("/projects/fing/electronica/reports/Report 3.pdf", "Lab 3"),
    ],
  },
  {
    slug: "aagrafos",
    title: "Machine Learning on Graphs",
    type: "university",
    timestamp: "2023",
    summary:
      "Course on ML methods for graphs, from anomaly detection to role classification.",
    description:
      "Graphs capture interactions in telecoms, biology, recommendations, and urban systems. This course introduces graph-based ML models that outperform traditional methods by leveraging structure. We implemented state-of-the-art techniques for inference, prediction, and pattern discovery, and evaluated them across diverse applications.",
    tags: ["Graphs", "ML", "GNNs", "Applied Algebra"],
    attachments: [
      toAtt("/projects/fing/aagrafos/reports/Report 1.pdf", "Report 1"),
      toAtt("/projects/fing/aagrafos/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/aagrafos/reports/Report 3.pdf", "Report 3"),
      toAtt("/projects/fing/aagrafos/reports/Report 4.pdf", "Report 4"),
      toAtt("/projects/fing/aagrafos/reports/Report 5.pdf", "Report 5"),
      toAtt(
        "/projects/fing/aagrafos/reports/Final Project.pdf",
        "Final Project"
      ),
    ],
  },
  {
    slug: "cce",
    title: "Error-Correcting Codes",
    type: "university",
    timestamp: "2023",
    summary: "Algebraic codes for reliable communication and data storage.",
    description:
      "This course covers the math and implementation of error-correcting codes, core to nearly all modern communication and storage systems. We studied encoding/decoding strategies, performance analysis under noise, and applications ranging from mobile networks to QR codes, CDs, and cloud storage.",
    tags: ["Coding Theory", "Information Theory", "Compression"],
    attachments: [
      toAtt("/projects/fing/cce/reports/Final Project.pdf", "Final Project"),
    ],
    repoUrl: "https://github.com/fede-bello/fing-cce",
  },
  {
    slug: "taa",
    title: "Applied Machine Learning Course",
    type: "university",
    timestamp: "2023",
    summary: "End-to-end applied ML course with real-world data and projects.",
    description:
      "This applied course focuses on building complete ML solutions—from data preparation to evaluation and communication of results. We reviewed traditional methods and explored deep learning, working on practical projects with emphasis on robust methodology and real-world applications.",
    tags: ["Algorithms", "ML", "Deep Learning", "CNNs", "RNNs", "Trees"],
    attachments: [
      toAtt("/projects/fing/taa/reports/Report 1.pdf", "Report 1"),
      toAtt("/projects/fing/taa/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/taa/reports/First Project.pdf", "First Project"),
      toAtt("/projects/fing/taa/reports/Final Project.pdf", "Final Project"),
    ],
  },

  {
    slug: "comdig",
    title: "Digital Communications",
    type: "university",
    timestamp: "2023",
    summary:
      "Reliable digital transmission over analog channels, from modulation to coding.",
    description:
      "Divided into two parts, the course first focuses on transmitting bits over noisy analog channels and then on generating and protecting those bits from errors. Through labs and projects, we explored modulation, coding, and error mitigation while analyzing the trade-offs inherent to real-world systems.",
    tags: ["Communications", "DSP", "Modulation", "Coding", "Error Correction"],
    attachments: [
      toAtt("/projects/fing/comdig/reports/Report 1.pdf", "Report 1"),
      toAtt("/projects/fing/comdig/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/comdig/reports/Report 3.pdf", "Report 3"),
      toAtt("/projects/fing/comdig/reports/Final Project.pdf", "Final Project"),
    ],
  },
  {
    slug: "fuo",
    title: "Optimization Fundamentals",
    type: "university",
    timestamp: "2022",
    summary:
      "Optimization-focused coursework culminating in a comprehensive final project.",
    description:
      "The course consolidated modeling, analysis, and optimization methods, with emphasis on understanding trade-offs in algorithmic choices. We applied tools to diverse scenarios and documented results for different algorithms and use cases.",
    tags: ["Optimization", "Algorithms", "Gradient Descent"],
    attachments: [
      toAtt("/projects/fing/fuo/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/fuo/reports/Final Project.pdf", "Final Project"),
    ],
  },
  {
    slug: "p4",
    title: "Programming 4",
    type: "university",
    timestamp: "2022",
    summary:
      "Object-oriented design and programming, from concepts to practical projects.",
    description:
      "An introduction to Object-Oriented programming principles for modeling problems as interacting objects. The course emphasized analysis and design methodologies, providing hands-on experience building Object-Oriented systems and reasoning about design choices, reusability, and maintainability.",
    tags: ["Programming", "OOP", "Object-Oriented", "Design Patterns"],
    attachments: [
      toAtt("/projects/fing/p4/reports/Report 1.pdf", "Lab 1"),
      toAtt("/projects/fing/p4/reports/Report 2.pdf", "Lab 2"),
      toAtt("/projects/fing/p4/reports/Report 3.pdf", "Lab 3"),
    ],
    repoUrl: "https://github.com/fede-bello/fing-p4",
  },
];
