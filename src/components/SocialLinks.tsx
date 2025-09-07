import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";

type Social = {
  name: string;
  href: string;
  icon: string;
  label: string;
  subtitle: string;
  badgeClasses: string;
};

const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/fede-bello",
    icon: "github",
    label: "Visit GitHub profile",
    subtitle: "fede-bello",
    badgeClasses:
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 group-hover:bg-slate-200 dark:group-hover:bg-slate-700",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/fede_bello29",
    icon: "X",
    label: "Visit X (Twitter) profile",
    subtitle: "@fede_bello29",
    badgeClasses:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 group-hover:bg-cyan-200/80 dark:group-hover:bg-cyan-900/50",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/federico-bello-/",
    icon: "linkedin",
    label: "Visit LinkedIn profile",
    subtitle: "Federico Bello",
    badgeClasses:
      "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 group-hover:bg-sky-200/80 dark:group-hover:bg-sky-900/50",
  },
];

type Props = {
  className?: string;
};

export function SocialLinks({ className }: Props): JSX.Element {
  return (
    <ul
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${
        className ?? ""
      }`}
    >
      {socials.map((item, idx) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * idx, duration: 0.25 }}
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="group relative block rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-700"
          >
            <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-slate-200/40 to-transparent dark:from-slate-800/30 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center justify-center size-9 rounded-lg transition-colors ${item.badgeClasses}`}
              >
                <Icon name={item.icon} className="size-4" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-sm text-slate-900 dark:text-white">
                    {item.name}
                  </span>
                  <span className="opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                    <Icon
                      name="arrow-up-right"
                      className="size-3.5 text-slate-500 dark:text-slate-400"
                    />
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </a>
        </motion.li>
      ))}
    </ul>
  );
}
