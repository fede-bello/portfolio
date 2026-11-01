import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { getExperiences } from "@/experience/data";
import { useI18n } from "@/hooks/useI18n";
import { ExperienceCard } from "@/components/ExperienceCard";

export function ExperiencePage(): JSX.Element {
  const { lang, t } = useI18n();
  const experiences = getExperiences(lang);

  return (
    <div>
      <SectionHeader
        title={t.experience.title}
        subtitle={t.experience.subtitle}
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
