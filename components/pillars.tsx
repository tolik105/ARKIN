"use client";
import { Container } from "./container";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Settings, Bot, Wallet, Shield, Monitor } from "lucide-react";

const pillars = [
  {
    name: "AI Strategy & Discovery",
    icon: Brain,
    services: [
      "Current‑state process audit",
      "Use‑case identification workshops",
      "ROI model & phased roadmap"
    ],
    investor: "100‑day automation blueprint that maps quick wins to long‑tail bets."
  },
  {
    name: "Custom Model Engineering",
    icon: Settings,
    services: [
      "GPT‑4 / Claude fine‑tuning",
      "RAG pipelines",
      "Vision & speech models"
    ],
    investor: "Own the IP: we deliver weights + prompt stacks so clients avoid lock‑in."
  },
  {
    name: "Intelligent Process Automation",
    icon: Bot,
    services: [
      "UiPath / Power Automate bot design",
      "Serverless event flows",
      "Document AI for invoices & K‑YC"
    ],
    investor: "> 80 % STP on finance docs after a 6‑week sprint."
  },
  // add remaining pillars similarly…
];

export function Pillars() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white dark:bg-neutral-950 py-20">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white mb-12">
          End‑to‑End AI‑Automation Services
        </h2>
        <div className="max-w-4xl mx-auto divide-y divide-neutral-200 dark:divide-neutral-800">
          {pillars.map((p, i) => (
            <div key={i} className="surface-card rounded-xl p-6 shadow-sm mb-4">
              <button
                className="flex justify-between w-full text-left hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-neutral-700 dark:text-neutral-200">
                  <p.icon className="w-5 h-5 mr-2 text-blue-600" />
                  {p.name}
                </span>
                <span>{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-3"
                  >
                    <ul className="list-disc list-inside space-y-1 text-neutral-400 dark:text-neutral-400">
                      {p.services.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-blue-600 dark:text-blue-400 italic">
                      {p.investor}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 