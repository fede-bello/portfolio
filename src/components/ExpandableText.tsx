import { useId, useState } from "react";

type Props = {
  children: string | ReadonlyArray<string>;
  collapsedLines?: number;
  className?: string;
  label?: string;
};

export function ExpandableText({
  children,
  collapsedLines = 3,
  className,
  label = "Expand content",
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  const content = Array.isArray(children) ? children.join(" ") : children;

  return (
    <div className={className}>
      <p
        className={`text-slate-700 dark:text-slate-200 ${
          expanded ? "" : `line-clamp-${collapsedLines}`
        }`}
        id={id}
      >
        {content}
      </p>
      <button
        type="button"
        aria-controls={id}
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-700"
      >
        {expanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}
