import { Footer, Header } from "./components/layout";
import {
  BackofficeSection,
  BenefitsSection,
  CapabilitiesSection,
  CtaSection,
  GamesSection,
  HeroSection,
  JourneySection,
  PerformanceSection,
  PricingSection,
  SolutionSection
} from "./components/sections";

export const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <Header />

      <main>
        <HeroSection />
        <SolutionSection />
        <JourneySection />
        <BenefitsSection />
        <BackofficeSection />
        <CapabilitiesSection />
        <PricingSection />
        <GamesSection />
        <PerformanceSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
};
