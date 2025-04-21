"use client";
import { Container } from "./container";
import { motion } from "framer-motion";

export function Roadmap() {
  const phases = [
    { q: "Q2 2025", task: "Private beta (5 design‑partners)" },
    { q: "Q3 2025", task: "Public waitlist & self‑serve onboarding" },
    { q: "Q4 2025", task: "Paid launch – ¥ / seat pricing" },
    { q: "2026",    task: "Series A, APAC expansion" },
  ];
  return (
    <section className="bg-white dark:bg-neutral-950 py-20">
      <Container className="space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white text-center">
          Our Launch Roadmap
        </h2>

        <ol className="relative border-l border-neutral-200 dark:border-neutral-800 max-w-2xl mx-auto">
          {phases.map((p, i) => (
            <li key={i} className="mb-10 ml-6">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs"
              >
                {i + 1}
              </motion.span>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
                {p.q}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {p.task}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
} 