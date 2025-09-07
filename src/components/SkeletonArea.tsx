import { ReactNode } from "react";

type Props = {
  isLoading: boolean;
  children: ReactNode;
  width?: string;
  height?: string;
};

export function SkeletonArea({
  isLoading,
  children,
  width = "100%",
  height = "1.25rem",
}: Props) {
  if (isLoading) {
    return <div className="skeleton" style={{ width, height }} />;
  }
  return <>{children}</>;
}
