import type { Experience } from "@/types/experience";

export const experiences: ReadonlyArray<Experience> = [
  {
    role: "Machine Learning Engineer",
    company: "Tryolabs",
    companyUrl: "https://tryolabs.com/",
    orgKind: "company",
    period: "Oct 2024 - Present",
    location: "Montevideo, Uruguay",
    summary: [
      // "Contribute to the development of <strong>UNICEF’s Geosphere Solution</strong> for the Children’s Climate Risk Index, working across design, backend, frontend, and deployment.",
      "Contribute to the <strong>development of ML projects</strong>.",
      "Help with internal tasks such as onboardings and technical interviews.",
    ],

    stack: ["FastAPI", "LangChain", "LlamaIndex", "Python", "GCP", "AWS"],
  },
  {
    role: "Teaching and Research Assistant",
    company: "InCo - UdelaR",
    companyUrl: "https://www.fing.edu.uy/es/inco",
    orgKind: "university",
    period: "Feb 2023 - Feb 2025",
    location: "Montevideo, Uruguay",
    summary: [
      "<strong>Led theoretical and practical classes for Programming 1</strong>, teaching imperative programming fundamentals including algorithm design and structured implementation techniques.",
      "<strong>Assisted Programming 2 laboratory sessions</strong>, focusing on data abstractions (lists, stacks, queues, binary trees) and implementing them using modularization, good programming practices, and basic algorithm analysis.",
      '<strong>Conducted research on DNA storage</strong> with the <a href="https://www.fing.edu.uy/es/grupos/nti" target="_blank" rel="noopener noreferrer">Information Theory Group</a>.',
    ],
    stack: ["Pascal", "C++"],
  },
  {
    role: "Junior AI Developer",
    company: "Eagerworks",
    companyUrl: "https://eagerworks.com/",
    orgKind: "company",
    period: "Feb 2024 - Oct 2024",
    location: "Montevideo, Uruguay",
    summary: [
      '<strong>Worked in the development</strong> of the backend for <a href="https://docshunter.ai/" target="_blank" rel="noopener noreferrer">Docshunter</a>, a document management and generation platform. Built an <strong>API</strong> designed to be <strong>reused</strong> in other client applications.',
      "Wrote <strong>blog posts</strong> about <strong>technical solutions</strong> used in the platform.",
      "Took part in <strong>technical interviews</strong> with potential candidates.",
    ],
    stack: ["FastAPI", "Postgres", "Python", "Langchain", "AWS"],
  },
  {
    role: "Junior Developer",
    company: "Sinapsis",
    companyUrl: "https://www.sinapsis.com.uy/",
    orgKind: "company",
    period: "Aug 2023 - Feb 2024",
    location: "Montevideo, Uruguay",
    summary: [
      "Built and implemented <strong>web applications</strong> using <strong>.NET</strong> technologies to support risk analysis for national and international banks.",
    ],
    stack: [".NET", "C#", "T-SQL (SQL Server)"],
  },
];
