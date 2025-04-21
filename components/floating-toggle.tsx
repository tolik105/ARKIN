"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";

export function FloatingToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;     // avoid hydration mismatch

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <ModeToggle className="w-10 h-10 rounded-full border border-neutral-700/40 shadow-lg backdrop-blur-md" />
    </div>
  );
} 