import type { Experience } from "@/types/experience";

export const experiences: ReadonlyArray<Experience> = [
  {
    role: "Machine Learning Engineer",
    company: "Tryolabs",
    period: "Oct 2024 - Present",
    location: "Montevideo, Uruguay",
    summary: [
      "Contributed to the development of UNICEF’s Geosphere Solution for the Children’s Climate Risk Index, working across design, backend, frontend, and deployment.",
      "Helped with internal tasks such as onboarding new hires and participating in technical interviews.",
    ],

    stack: ["FastAPI", "LangChain", "LlamaIndex", "Python", "GCP", "AWS"],
  },
  {
    role: "Teaching and Research Assistant",
    company: "InCo - UdelaR",
    period: "Feb 2023 - Feb 2025",
    location: "Montevideo, Uruguay",
    summary: [
      "Led theoretical and practical classes for Programming 1, teaching imperative programming fundamentals including algorithm design and structured implementation techniques.",
      "Assisted Programming 2 laboratory sessions, focusing on data abstractions (lists, stacks, queues, binary trees) and implementing them using modularization, good programming practices, and basic algorithm analysis.",
      "Conducted research on DNA storage with the Information Theory Group.",
    ],
    stack: ["Pascal", "C++"],
  },
  {
    role: "Junior AI Developer",
    company: "Eagerworks",
    period: "Feb 2024 - Oct 2024",
    location: "Montevideo, Uruguay",
    summary: [
      "Helped develop the backend for Docshunter, a document management and generation platform.",
      "Built an API for Docshunter designed to be reused in other client applications.",
      "Wrote blog posts about technical solutions used in the platform.",
      "Took part in technical interviews with potential candidates.",
    ],
    stack: ["FastAPI", "Postgres", "Python", "LLMs"],
  },
  {
    role: "Junior Developer",
    company: "Sinapsis",
    period: "Aug 2023 - Feb 2024",
    location: "Montevideo, Uruguay",
    summary: [
      "Built and implemented web applications using .NET technologies to support risk analysis for national and international banks.",
    ],
    stack: [".NET", "C#", "T-SQL (SQL Server)"],
  },
];
