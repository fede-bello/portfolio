import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { personalProjects, universityProjects, freelanceProjects } from "@/projects/data";
import { useState } from "react";

export function ProjectsPage(): JSX.Element {
  const [openId, setOpenId] = useState<string | null>(null);
  const handleChange = (slug: string, next: boolean) => {
    setOpenId(next ? slug : null);
  };
  return (
    <div>
      <SectionHeader
        title="Projects"
        subtitle="Personal projects and selected university coursework"
      />

      <Container className="max-w-5xl pb-8">
        <h2 className="text-xl font-semibold mb-4">Client Projects</h2>
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
        <h2 className="text-xl font-semibold mb-4">Personal Projects</h2>
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
        <h2 className="text-xl font-semibold mb-4">University Projects</h2>
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
