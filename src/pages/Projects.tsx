import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/projects/data";
import { useI18n } from "@/hooks/useI18n";
import { useState } from "react";

export function ProjectsPage(): JSX.Element {
  const [openId, setOpenId] = useState<string | null>(null);
  const { lang, t } = useI18n();
  const {
    ventures: ventureProjects,
    freelance: freelanceProjects,
    personal: personalProjects,
    university: universityProjects,
  } = getProjects(lang);
  const handleChange = (slug: string, next: boolean) => {
    setOpenId(next ? slug : null);
  };
  return (
    <div>
      <SectionHeader
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <Container className="max-w-5xl pb-8">
        <h2 className="text-xl font-semibold mb-4">{t.projects.ventures}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {ventureProjects.map((proj) => (
            <ProjectCard
              key={proj.slug}
              project={proj}
              expanded={openId === proj.slug}
              onExpandedChange={(next) => handleChange(proj.slug, next)}
            />
          ))}
        </div>
      </Container>

      <Container className="max-w-5xl pb-8">
        <h2 className="text-xl font-semibold mb-4">{t.projects.client}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {freelanceProjects.map((proj) => (
            <ProjectCard
              key={proj.slug}
              project={proj}
              expanded={openId === proj.slug}
              onExpandedChange={(next) => handleChange(proj.slug, next)}
            />
          ))}
        </div>
      </Container>

      <Container className="max-w-5xl pb-8">
        <h2 className="text-xl font-semibold mb-4">{t.projects.personal}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {personalProjects.map((proj) => (
            <ProjectCard
              key={proj.slug}
              project={proj}
              expanded={openId === proj.slug}
              onExpandedChange={(next) => handleChange(proj.slug, next)}
            />
          ))}
        </div>
      </Container>



      <Container className="max-w-5xl pb-16">
        <h2 className="text-xl font-semibold mb-4">{t.projects.university}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {universityProjects.map((proj) => (
            <ProjectCard
              key={proj.slug}
              project={proj}
              expanded={openId === proj.slug}
              onExpandedChange={(next) => handleChange(proj.slug, next)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
