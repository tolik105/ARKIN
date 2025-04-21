"use client";
import { Button } from "./button";

export function InvestorCTA() {
  return (
    <div className="bg-blue-600 text-white py-6 flex justify-center">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <p className="text-lg font-semibold">
          Interested in our Seed round?
        </p>
        <Button
          href="mailto:founders@akrin.ai?subject=AKRIN%20Seed%20Intro"
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-neutral-100"
          target="_blank"
        >
          Request Investor Deck
        </Button>
      </div>
    </div>
  );
} 