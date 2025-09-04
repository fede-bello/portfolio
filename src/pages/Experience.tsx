import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Machine Learning Engineer",
    company: "Tryolabs",
    period: "Oct 2024 - Present",
    location: "Montevideo, Uruguay",
    summary: "[High-level description of role and impact here]",
  },
  {
    role: "Teaching and Research Assistant",
    company: "InCo - UdelaR",
    period: "Feb 2023 - Feb 2025",
    location: "Montevideo, Uruguay",
    summary: "[Teaching and lab assistance responsibilities and outcomes]",
  },
];

export function ExperiencePage() {
  return (
    <div>
      <SectionHeader
        title="Experience"
        subtitle="[Your professional journey and roles]"
      />
      <div className="container max-w-5xl pb-16 space-y-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {exp.role} · {exp.company}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {exp.period} · {exp.location}
              </p>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-200">
              {exp.summary}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
