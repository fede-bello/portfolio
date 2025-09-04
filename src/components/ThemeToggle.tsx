import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import * as Switch from "@radix-ui/react-switch";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="inline-flex items-center gap-2">
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      <label className="text-sm hidden sm:inline" id="theme-label">
        {isDark ? "Light" : "Dark"} mode
      </label>
      <Switch.Root
        aria-labelledby="theme-label"
        checked={isDark}
        onCheckedChange={toggle}
        className="relative inline-flex h-[22px] w-[42px] cursor-pointer items-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 transition-colors"
      >
        <Switch.Thumb className="block h-[18px] w-[18px] translate-x-1 rounded-full bg-white dark:bg-slate-700 transition-transform will-change-transform data-[state=checked]:translate-x-[22px]" />
      </Switch.Root>
    </div>
  );
}
