import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";
import { experiences } from "@/experience/data";

export function ExperiencePage() {
  return (
    <div>
      <SectionHeader
        title="Experience"
        subtitle="Engineering, teaching, and research across ML and software"
      />
      <Container className="max-w-5xl pb-16 space-y-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Panel>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {exp.role} · {exp.company}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {exp.period} · {exp.location}
                </p>
              </div>
              {exp.summary && exp.summary.length > 0 ? (
                <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-200 space-y-1">
                  {exp.summary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {exp.stack && exp.stack.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </Panel>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
