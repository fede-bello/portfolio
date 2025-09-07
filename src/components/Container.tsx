import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: Props): JSX.Element {
  return <div className={`container ${className ?? ""}`}>{children}</div>;
}
