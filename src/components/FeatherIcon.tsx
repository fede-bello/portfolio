import { memo } from "react";
import feather from "feather-icons";

type Props = {
  name: string;
  className?: string;
  strokeWidth?: number;
  title?: string;
};

export const FeatherIcon = memo(function FeatherIcon({
  name,
  className,
  strokeWidth = 2,
  title,
}: Props) {
  const svg = feather.icons[name]?.toSvg({
    class: className,
    "stroke-width": strokeWidth,
    role: "img",
    focusable: "false",
    "aria-hidden": title ? undefined : "true",
  });

  if (!svg) return null;

  return (
    <span
      aria-hidden={title ? undefined : true}
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
});
