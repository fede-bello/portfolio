import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { experiences } from "@/experience/data";
import { ExperienceCard } from "@/components/ExperienceCard";

export function ExperiencePage() {
  return (
    <div>
      <SectionHeader
        title="Experience"
        subtitle="Engineering, teaching, and research across ML, Applied Mathematics, and Software"
      />
      <Container className="max-w-5xl pb-16 space-y-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
