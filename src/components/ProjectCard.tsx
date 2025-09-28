import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Panel } from "@/components/Panel";
import { Icon } from "@/components/Icon";
import { TechBadge } from "@/components/TechBadge";
import { PdfList } from "@/components/PdfList";
import { PdfViewerModal } from "@/components/PdfViewerModal";
import type { Project, ProjectAttachment } from "@/types/projects";

type Props = {
  project: Project;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
};

export function ProjectCard({
  project,
  expanded: expandedProp,
  onExpandedChange,
}: Props): JSX.Element {
  const [expandedLocal, setExpandedLocal] = useState(false);
  const isControlled = typeof expandedProp === "boolean";
  const expanded = isControlled ? (expandedProp as boolean) : expandedLocal;
  const setExpanded = (value: boolean) => {
    if (isControlled) {
      onExpandedChange?.(value);
    } else {
      setExpandedLocal(value);
    }
  };
  const [pdf, setPdf] = useState<ProjectAttachment | null>(null);
  const reduce = useReducedMotion();
  const ignoreClickRef = useRef(true);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => setExpanded((v) => !v);

  const timestamp = useMemo(() => project.timestamp, [project.timestamp]);

  useEffect(() => {
    if (!expanded) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      const root = rootRef.current;
      if (root && target && root.contains(target)) return;
      setExpanded(false);
    };
    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, [expanded]);

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <div ref={rootRef}>
          <Panel
            className="focus-within:ring-2 focus-within:ring-sky-400"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              const isInteractive = target.closest(
                "button, a, [role='button']"
              );
              if (isInteractive) return;
              if (!expanded) {
                setExpanded(true);
              } else {
                // If expanded and clicked on non-interactive, collapse
                setExpanded(false);
              }
            }}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              aria-expanded={expanded}
              className="w-full text-left"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {project.title}
                  </h3>
                  {project.subtitle ? (
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                      {project.subtitle}
                    </div>
                  ) : null}
                  {project.summary ? (
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                      {project.summary}
                    </p>
                  ) : null}
                </div>
                <div className="shrink-0 text-sm text-slate-600 dark:text-slate-300 inline-flex items-center gap-1">
                  <Icon
                    name="calendar"
                    className="size-4 text-slate-500 dark:text-slate-400"
                  />
                  <time dateTime={timestamp}>{timestamp}</time>
                  <Icon
                    name={expanded ? "chevron-down" : "chevron-right"}
                    className="size-4"
                  />
                </div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  key="content"
                  initial={
                    reduce
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={
                    reduce
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className="py-3"
                    onClick={(e) => {
                      if (e.currentTarget === e.target) {
                        setExpanded(false);
                      }
                      e.stopPropagation();
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <p className="text-sm text-slate-700 dark:text-slate-200">
                      {project.description}
                    </p>

                    {project.tags && project.tags.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                    ) : null}

                    {project.attachments && project.attachments.length > 0 ? (
                      <PdfList
                        attachments={project.attachments}
                        onView={(att) => {
                          setPdf(att);
                        }}
                      />
                    ) : null}

                    {project.siteUrl || project.repoUrl ? (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-4">
                          {project.siteUrl ? (
                            <a
                              href={project.siteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 dark:text-sky-400 hover:underline"
                            >
                              Visit site{" "}
                              <Icon name="arrow-up-right" className="size-4" />
                            </a>
                          ) : null}
                          {project.repoUrl ? (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 dark:text-sky-400 hover:underline"
                            >
                              View repo{" "}
                              <Icon name="arrow-up-right" className="size-4" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Panel>
        </div>
      </motion.div>

      <PdfViewerModal
        open={!!pdf}
        title={pdf?.title || project.title}
        src={pdf?.href || ""}
        onClose={() => setPdf(null)}
      />
    </>
  );
}
