import { Panel } from "@/components/Panel";
import { LeftRailMeta } from "@/components/LeftRailMeta";
import { TechBadge } from "@/components/TechBadge";
import type { Experience } from "@/types/experience";
import { Icon } from "@/components/Icon";

type Props = {
  exp: Experience;
};

export function ExperienceCard({ exp }: Props): JSX.Element {
  return (
    <Panel>
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4">
        <LeftRailMeta period={exp.period} location={exp.location} />

        <div className="max-w-[65ch]">
          <header className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">
              <strong>{exp.role}</strong> · <strong>{exp.company}</strong>
            </h3>
            {exp.orgKind === "university" || exp.companyUrl ? (
              <a
                href={
                  exp.orgKind === "university"
                    ? exp.companyUrl ?? "https://www.fing.edu.uy/es/inco"
                    : exp.companyUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
              >
                {exp.orgKind === "university"
                  ? "Visit Institute"
                  : "Visit Company"}
                <Icon name="external" className="size-4" />
              </a>
            ) : null}
          </header>

          <div className="mt-1 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 md:hidden">
            <span className="inline-flex items-center gap-1">
              <Icon
                name="calendar"
                className="size-4 text-slate-500 dark:text-slate-400"
              />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon
                name="map-pin"
                className="size-4 text-slate-500 dark:text-slate-400"
              />
              {exp.location}
            </span>
          </div>

          {exp.summary && exp.summary.length > 0 ? (
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Key responsibilities
              </div>
              <ul className="mt-2 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-200 [&_a]:text-sky-700 dark:[&_a]:text-sky-300 [&_a]:underline [&_a]:underline-offset-2">
                {exp.summary.map((item) => (
                  <li
                    key={item}
                    className="marker:text-slate-400 dark:marker:text-slate-500"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            </div>
          ) : null}

          {exp.stack && exp.stack.length > 0 ? (
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Tech
              </div>
              <div className="mt-2 overflow-x-auto md:overflow-visible">
                <div className="flex md:flex-wrap flex-nowrap gap-2">
                  {exp.stack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Panel>
  );
}
