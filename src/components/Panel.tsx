import { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className, ...rest }: Props): JSX.Element {
  return (
    <div
      className={`rounded-xl border border-slate-200 dark:border-slate-800 p-5 ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
}
