"use client";
import { Container } from "./container";
import { Button } from "./button";

export function ChatCommerce() {
  const bullets = [
    "Omnichannel bots for LINE, Slack, Teams, Web & Voice",
    "LLM‑native flows fine‑tuned on Japanese Keigo & emoji norms",
    "Realtime Agent‑Assist sidebar: sentiment, answer, next‑step",
    "Zero‑party data → push into Salesforce, HubSpot, or Snowflake",
    "Secure deployment: SaaS or on‑prem with model‑weight hand‑over"
  ];
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-20">
      <Container className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
            Conversational AI & Chat Commerce
            <span className="ml-3 px-2 py-0.5 text-xs rounded-full bg-blue-600 text-white">
              Own‑the‑Model
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Turn every chat touch‑point into revenue <em>and</em> cost savings.
            Deploy JP‑tuned GPT‑4o bots in days—not months—and keep full control
            of your data & model weights.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto list-disc list-inside">
          {bullets.map((b) => (
            <li key={b} className="surface-card rounded-xl p-5 text-neutral-700 dark:text-neutral-300">
              {b}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4">
          <Button href="#waitlist">Join Waitlist</Button>
          <Button
            as="a"
            href="https://cal.com/yourname/30min?topic=chatcommerce"
            variant="secondary"
          >
            Book Demo
          </Button>
        </div>
      </Container>
    </section>
  );
} 