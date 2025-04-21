import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CTA } from "@/components/cta";
import { ProblemSolution } from "@/components/problem-solution";
import { Market }          from "@/components/market";
import { Roadmap }         from "@/components/roadmap";
import { InvestorCTA }     from "@/components/investor-cta";
import { MarketDemand } from "@/components/market-demand";
import { Pillars }      from "@/components/pillars";
import { ChatCommerce } from "@/components/chat-commerce";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <div className="mt-24">
        <MarketDemand />
      </div>
      <div className="mt-24">
        <Pillars />
      </div>
      <ChatCommerce />
      <Market />
      <Roadmap />
      <CTA />
      <InvestorCTA />
    </main>
  );
}
