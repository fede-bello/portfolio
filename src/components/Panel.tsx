import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className }: Props) {
  return (
    <div
      className={`rounded-xl border border-slate-200 dark:border-slate-800 p-5 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
