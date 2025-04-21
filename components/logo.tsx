"use client";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-black dark:text-white">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* Generate dots around the circle */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
            const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
            const size = i % 2 === 0 ? 6 : 4; // Alternate between larger and smaller dots
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={size}
                fill="currentColor"
              />
            );
          })}
        </svg>
      </div>
      <span 
        className="text-xl text-black dark:text-white"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}
      >
        Akrin
      </span>
    </Link>
  );
};
