import { Icon } from "@/components/Icon";

type Props = {
  period: string;
  location: string;
  className?: string;
};

export function LeftRailMeta({ period, location, className }: Props) {
  return (
    <div
      className={`text-sm text-slate-600 dark:text-slate-300 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center gap-2">
        <Icon
          name="calendar"
          className="size-4 text-slate-500 dark:text-slate-400"
        />
        <span>{period}</span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <Icon
          name="map-pin"
          className="size-4 text-slate-500 dark:text-slate-400"
        />
        <span>{location}</span>
      </div>
    </div>
  );
}
