import type { Experience } from "@/types/experience";

export const experiences: ReadonlyArray<Experience> = [
  {
    role: "Machine Learning Engineer",
    company: "Tryolabs",
    period: "Oct 2024 - Present",
    location: "Montevideo, Uruguay",
    summary: [
      // "Contribute to the development of <strong>UNICEF’s Geosphere Solution</strong> for the Children’s Climate Risk Index, working across design, backend, frontend, and deployment.",
      "<PLACEHOLDER> Contribute to the development of ML projects</PLACEHOLDER>",
      "Help with internal tasks such as <strong>onboarding</strong>", //  new hires and participating in <strong>technical interviews</strong>.",
    ],

    stack: ["FastAPI", "LangChain", "LlamaIndex", "Python", "GCP", "AWS"],
  },
  {
    role: "Teaching and Research Assistant",
    company: "InCo - UdelaR",
    period: "Feb 2023 - Feb 2025",
    location: "Montevideo, Uruguay",
    summary: [
      "<strong>Led</strong> theoretical and practical classes for <strong>Programming 1</strong>, teaching imperative programming fundamentals including algorithm design and structured implementation techniques.",
      "<strong>Assisted Programming 2</strong> laboratory sessions, focusing on data abstractions (lists, stacks, queues, binary trees) and implementing them using modularization, good programming practices, and basic algorithm analysis.",
      "<strong>Conducted research on DNA storage</strong> with the Information Theory Group.",
    ],
    stack: ["Pascal", "C++"],
  },
  {
    role: "Junior AI Developer",
    company: "Eagerworks",
    period: "Feb 2024 - Oct 2024",
    location: "Montevideo, Uruguay",
    summary: [
      "<strong>Worked in the development</strong> of the backend for <strong>Docshunter</strong>, a document management and generation platform. Built an <strong>API</strong> designed to be <strong>reused</strong> in other client applications.",
      "Wrote <strong>blog posts</strong> about <strong>technical solutions</strong> used in the platform.",
      "Took part in <strong>technical interviews</strong> with potential candidates.",
    ],
    stack: ["FastAPI", "Postgres", "Python", "Langchain"],
  },
  {
    role: "Junior Developer",
    company: "Sinapsis",
    period: "Aug 2023 - Feb 2024",
    location: "Montevideo, Uruguay",
    summary: [
      "Built and implemented <strong>web applications</strong> using <strong>.NET</strong> technologies to support risk analysis for national and international banks.",
    ],
    stack: [".NET", "C#", "T-SQL (SQL Server)"],
  },
];
