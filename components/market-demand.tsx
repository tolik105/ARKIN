"use client";
import { Container } from "./container";

export function MarketDemand() {
  const cards = [
    {
      title: "IT Talent Crunch",
      stat: "790 k roles unfilled by 2030",
      source: "METI DX White‑paper 2024",
      copy: "Enterprises must automate L1 support & back‑office tasks to survive the DX cliff."
    },
    {
      title: "RPA Spend Boom",
      stat: "¥109 B market • 24 % CAGR",
      source: "IMARC 2024",
      copy: "Budgets are already carved out—buyers are upgrading from brittle bots to AI agents."
    },
    {
      title: "Subsidy Tailwinds",
      stat: "Up to ¥1.5 M per SME",
      source: "IT導入補助金 2024",
      copy: "Government grants cover SaaS automation costs, cutting purchase friction."
    },
  ];
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-20">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white mb-12">
          Why Japan Needs AI Automation Now
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="surface-card rounded-xl p-6 shadow-sm space-y-4 text-center">
              <p className="text-blue-600 dark:text-blue-400 text-2xl font-bold">{c.title}</p>
              <p className="text-3xl font-extrabold text-neutral-800 dark:text-neutral-100">{c.stat}</p>
              <p className="text-neutral-600 dark:text-neutral-400">{c.copy}</p>
              <p className="text-xs text-neutral-400">{c.source}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 