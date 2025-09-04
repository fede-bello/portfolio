import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Project One",
    description: "[Concise description of the project and your role]",
  },
  {
    name: "Project Two",
    description: "[Concise description of the project and your role]",
  },
];

export function ProjectsPage() {
  return (
    <div>
      <SectionHeader
        title="Personal Projects"
        subtitle="[Selected personal/side projects]"
      />
      <div className="container max-w-5xl pb-16 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-5"
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-200">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
