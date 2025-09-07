import { memo } from "react";

type Props = {
  name: string;
  className?: string;
};

export const TechBadge = memo(function TechBadge({
  name,
  className,
}: Props): JSX.Element {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-950 shadow-sm/50 ${
        className ?? ""
      }`}
    >
      {name}
    </span>
  );
});
