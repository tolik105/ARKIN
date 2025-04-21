"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type ModeToggleProps = { className?: string };

export function ModeToggle({ className = "" }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative flex items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500",
        className
      )}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
