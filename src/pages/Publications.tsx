import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/Container";
import { Panel } from "@/components/Panel";
import { Icon } from "@/components/Icon";
import { TechBadge } from "@/components/TechBadge";
import { conferences, publications } from "@/publications/data";

export function PublicationsPage(): JSX.Element {
  return (
    <div>
      <SectionHeader
        title="Publications"
        subtitle="Peer-reviewed work and talks"
      />
      <Container className="max-w-5xl pb-16 space-y-6">
        {publications.map((pub) => (
          <Panel key={pub.title}>
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4">
              <div className="text-sm text-slate-600 dark:text-slate-300">
                <div className="font-medium text-slate-700 dark:text-slate-200">
                  {pub.venue}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Icon
                    name="calendar"
                    className="size-4 text-slate-500 dark:text-slate-400"
                  />
                  <span>{pub.date}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Icon
                    name="map-pin"
                    className="size-4 text-slate-500 dark:text-slate-400"
                  />
                  <span>{pub.location}</span>
                </div>
              </div>
              <div className="max-w-[65ch]">
                <header className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg font-semibold">{pub.title}</h3>
                  <TechBadge name="Author" />
                </header>

                <p className="mt-2 text-slate-700 dark:text-slate-200">
                  {pub.summary}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {pub.authors}
                </p>
                {pub.link && (
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded"
                      >
                        Paper
                        <Icon name="arrow-up-right" className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Panel>
        ))}

        <div className="pt-6">
          <h2 className="text-xl font-semibold tracking-tight">Conferences</h2>
          <ul className="mt-4 space-y-4">
            {conferences.map((conf) => (
              <li key={`${conf.event}-${conf.date}`}>
                <Panel>
                  <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4">
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      <div className="font-medium text-slate-700 dark:text-slate-200">
                        {conf.event}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <Icon
                          name="calendar"
                          className="size-4 text-slate-500 dark:text-slate-400"
                        />
                        <span>{conf.date}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <Icon
                          name="map-pin"
                          className="size-4 text-slate-500 dark:text-slate-400"
                        />
                        <span>{conf.location}</span>
                      </div>
                    </div>
                    <div className="max-w-[65ch]">
                      <header className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-base font-semibold">
                          {conf.talkTitle ?? conf.event}
                        </h3>
                        <TechBadge name={conf.role} />
                      </header>

                      {conf.talkDescription && (
                        <p className="mt-1 text-slate-700 dark:text-slate-200">
                          {conf.talkDescription}
                        </p>
                      )}
                      {conf.link && (
                        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                          <div className="flex flex-wrap gap-2">
                            <a
                              href={conf.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded"
                            >
                              Website
                              <Icon name="arrow-up-right" className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
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
