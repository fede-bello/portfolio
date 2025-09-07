import { memo } from "react";
import type { IconType } from "react-icons";
import {
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

type Props = {
  name: string;
  className?: string;
  title?: string;
};

export const Icon = memo(function Icon({ name, className, title }: Props) {
  const iconMap: Record<string, IconType> = {
    github: FiGithub,
    linkedin: FiLinkedin,
    "arrow-up-right": FiArrowUpRight,
    calendar: FiCalendar,
    "map-pin": FiMapPin,
    X: FaXTwitter,
  };

  const Icon = iconMap[name];
  if (!Icon) return null;

  return (
    <span role="img" aria-hidden={title ? undefined : true} aria-label={title}>
      <Icon className={className} focusable="false" />
    </span>
  );
});
