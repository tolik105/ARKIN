/* eslint-disable react/no-unescaped-entities */

"use client";
import { Container } from "./container";

export function ProblemSolution() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-20">
      <Container className="text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
          The IT Bottleneck Holding Japanese Companies Back
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left md:divide-x md:divide-neutral-200 dark:md:divide-neutral-800 px-4">
          <div>
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
              Today's Pain
            </h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>40 % of help‑desk tickets are password resets &amp; access requests¹</li>
              <li>Avg. resolution time: <b>2.3 hours</b> (Ministry of IT 2024)</li>
              <li>Talent shortage: 790 k IT roles unfilled by 2030²</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
              AKRIN's Answer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              <li><b>Pre‑built JP agents</b> resolve L1 tickets autonomously</li>
              <li><b>No‑code workflow builder</b>—ops can adapt in minutes</li>
              <li><b>¥<span className="tabular-nums">450</span> / ticket</b> avg. cost savings (pilot data)</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-neutral-400">
          ¹ ACRI Help‑Desk Survey 2023 ² METI DX Whitepaper 2024
        </p>
      </Container>
    </section>
  );
} 