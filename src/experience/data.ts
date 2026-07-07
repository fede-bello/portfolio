import type { Experience } from "@/types/experience";

export const experiences: ReadonlyArray<Experience> = [
  {
    role: "Lead Machine Learning Engineer",
    company: "Tryolabs",
    companyUrl: "https://tryolabs.com/",
    orgKind: "company",
    period: "Oct 2024 - Present",
    location: "Montevideo, Uruguay",
    summary: [
      'Work as an <strong>embedded Forward Deployed Engineer with the <a href="https://www.llamaindex.ai/" target="_blank" rel="noopener noreferrer">LlamaIndex</a> team</strong>, delivering document-processing solutions for major enterprise clients to drive adoption of the <strong>LlamaCloud</strong> platform.',
      "Led the technical architecture of <strong>Geosphere (UNICEF)</strong>, an open-source initiative designing advanced agents with the Model Context Protocol (MCP) — recognized by <strong>IRCAI (UNESCO) as one of the top 100 AI projects globally</strong>.",
      "<strong>Mentor the engineering team</strong>, lead technical interviews, and define engineering standards for AI system design and deployment.",
    ],
    stack: ["LlamaIndex", "LlamaCloud", "MCP", "FastAPI", "Python", "GCP", "AWS"],
  },
  {
    role: "Co-founder & AI Specialist",
    company: "The Hawk Eye Football",
    companyUrl: "https://thehawkeyefootball.com/",
    orgKind: "company",
    period: "2024 - Present",
    location: "Montevideo, Uruguay",
    summary: [
      "<strong>Co-founded a sports-intelligence platform</strong> for professional football clubs, working <strong>across the stack</strong> (ML, data analysis, backend, and frontend) for player scouting and evaluation across <strong>10+ LATAM leagues</strong>.",
      "Designed the proprietary <strong>TCA Score</strong>, a league-adjusted metric that rates how well a player performs in their role to enable fair cross-competition comparison.",
      "Built the analytics engine powering scout search, side-by-side player comparison with <strong>position-adjusted percentiles</strong>, and match analysis (xG, shot maps, build-up by phase).",
    ],
    stack: ["Python", "Machine Learning", "Data Engineering", "React"],
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
