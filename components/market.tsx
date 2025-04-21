"use client";
import { Container } from "./container";

export function Market() {
  return (
    <section className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-20">
      <Container className="text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
          A ¥1.2 Trillion Opportunity
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { label: "Japan IT Help‑Desk Spend", value: "¥480 B" },
            { label: "Hybrid‑Work Automation CAGR", value: "18 %" },
            { label: "Target Addressable SMEs", value: "58 k+" },
          ].map((stat, i) => (
            <div key={i} className="surface-card rounded-xl shadow-sm p-6 text-center">
              <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                {stat.value}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 