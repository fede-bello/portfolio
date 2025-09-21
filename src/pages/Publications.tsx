import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";

type Publication = {
  title: string;
  venue: string;
  date: string;
  location: string;
  authors: string;
  summary: string;
};

type ConferenceEntry = {
  event: string;
  date: string;
  location: string;
  role: "Speaker" | "Panelist" | "Attendee" | string;
  talkTitle?: string;
  talkDescription?: string;
  link?: string;
};

const publications: Publication[] = [
  {
    title: "The Lattice-Input Discrete-Time Poisson Channel",
    venue: "IEEE - ISIT",
    date: "Aug 2024",
    location: "Athens, Greece",
    authors:
      "Federico Bello, Álvaro Martín, Tatiana Rischewski, Gadiel Seroussi",
    summary:
      "In this work we examine the Lattice-Input Discrete-Time Poisson (LIDTP) channel, relevant to DNA storage systems. We analyze communication performance with lattice-constrained inputs under Poisson noise and discuss implications for reliable molecular data storage.",
  },
];

const conferences: ConferenceEntry[] = [
  {
    event: "LANET 2025 - 4th Latin American Conference on Complex Networks",
    date: "Aug 2025",
    location: "Punta del Este, Uruguay",
    role: "Speaker",
    talkTitle: "GraGOD: Graph based time series anomaly detection",
    talkDescription:
      "In this conference I presented my thesis work, where we studied modeling multivariate time series as graphs and using GNNs to exploit inter-variable structure for reliable anomaly detection.",
    link: "https://lanet2025.uy/",
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

        <div className="pt-6">
          <h2 className="text-xl font-semibold tracking-tight">Conferences</h2>
          <ul className="mt-4 space-y-4">
            {conferences.map((conf) => (
              <li key={`${conf.event}-${conf.date}`}>
                <Panel>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <h3 className="text-base font-semibold">{conf.event}</h3>
                      {conf.link && (
                        <a
                          href={conf.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Website
                        </a>
                      )}
                    </div>
                    {conf.talkTitle && (
                      <p className="text-slate-700 dark:text-slate-200">
                        “{conf.talkTitle}”
                      </p>
                    )}
                    {conf.talkDescription && (
                      <p className="mt-1 text-slate-700 dark:text-slate-200">
                        {conf.talkDescription}
                      </p>
                    )}
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {conf.role} · {conf.date} · {conf.location}
                    </p>
                  </div>
                </Panel>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
