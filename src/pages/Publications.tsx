import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";

const publications = [
  {
    title: "The Lattice-Input Discrete-Time Poisson Channel",
    venue: "IEEE - ISIT",
    date: "Aug 2024",
    location: "Athens, Greece",
    authors:
      "Federico Bello, Álvaro Martín, Tatiana Rischewski, Gadiel Seroussi",
    summary: "[Brief summary of the publication]",
  },
];

export function PublicationsPage(): JSX.Element {
  return (
    <div>
      <SectionHeader
        title="Publications"
        subtitle="[Peer-reviewed work and talks]"
      />
      <Container className="max-w-5xl pb-16 space-y-6">
        {publications.map((pub) => (
          <Panel key={pub.title}>
            <h3 className="text-lg font-semibold">{pub.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {pub.venue} · {pub.date} · {pub.location}
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-200">
              {pub.summary}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {pub.authors}
            </p>
          </Panel>
        ))}
      </Container>
    </div>
  );
}
