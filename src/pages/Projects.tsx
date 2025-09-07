import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";

const projects = [
  { name: "[Project Placeholder 1]", description: "[Short description here]" },
  { name: "[Project Placeholder 2]", description: "[Short description here]" },
  { name: "[Project Placeholder 3]", description: "[Short description here]" },
];

const courses = [
  { name: "[Course Placeholder 1]", description: "[Key topics or outcomes]" },
  { name: "[Course Placeholder 2]", description: "[Key topics or outcomes]" },
  { name: "[Course Placeholder 3]", description: "[Key topics or outcomes]" },
];

export function ProjectsPage(): JSX.Element {
  return (
    <div>
      <SectionHeader
        title="Projects"
        subtitle="[Personal projects and selected university coursework]"
      />

      <Container className="max-w-5xl pb-8">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Panel>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-slate-700 dark:text-slate-200">
                  {p.description}
                </p>
              </Panel>
            </motion.div>
          ))}
        </div>
      </Container>

      <Container className="max-w-5xl pb-16">
        <h2 className="text-xl font-semibold mb-4">Courses</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Panel>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-2 text-slate-700 dark:text-slate-200">
                  {c.description}
                </p>
              </Panel>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
