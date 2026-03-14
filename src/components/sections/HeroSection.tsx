import clsx from "clsx";
import {
  demoHref,
  heroPreviewStats,
  heroStats,
  trustLogos
} from "../../data/siteContent";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icons";
import { HeroPreview } from "./HeroPreview";

const HeroUnderline = () => {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[-0.3em] left-[-0.1em] h-[0.24em] w-[3.8em] overflow-visible -z-1"
      preserveAspectRatio="none"
      viewBox="0 0 270 10"
    >
      <defs>
        <linearGradient id="hero-underline-gradient" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#0B6B3A" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
      </defs>
      <path
        d="M4 7.4C56 2.5 117 1.1 176 1.1c33 0 62 1.6 90 4.9"
        fill="none"
        stroke="url(#hero-underline-gradient)"
        strokeLinecap="round"
        strokeWidth="4.5"
      />
    </svg>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative scroll-mt-24 overflow-hidden" id="top">
      <div className={clsx(
        "bg-[linear-gradient(180deg,rgba(226,232,240,0.3)_1.56%,rgba(226,232,240,0)_1.56%),linear-gradient(90deg,rgba(226,232,240,0.3)_1.56%,rgba(226,232,240,0)_1.56%),linear-gradient(135deg,#F0FDF4_0%,#FFFFFF_50%,#FEF2F2_100%)]",
        "absolute inset-0 w-full h-full z-0"
      )}></div>

      <Container>
        <div className="grid gap-12 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(480px,608px)] lg:items-center lg:gap-10 lg:pb-20 lg:pt-16">
          <div className="max-w-152 lg:max-w-none">
            <h1 className="mt-6 text-[2.5rem] font-bold leading-[0.96] tracking-[-0.03em] text-slate-950 sm:text-[4.5rem] lg:w-180.25 lg:text-[72px] lg:leading-none">
              <span className="block">Transformez</span>
              <span className="block">
                chaque{" "}
                <span className="relative inline-block bg-linear-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                  produit
                  <HeroUnderline />
                </span>
              </span>
              <span className="block">en expérience de</span>
              <span className="block">jeu</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              YouCanWin connecte vos marques aux fans de football à travers des
              mécaniques de gamification innovantes. Codes QR, cartes digitales,
              défis et récompenses.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className=" backdrop-blur-sm"
                >
                  <p className={clsx(
                    "text-4xl font-bold tracking-[-0.03em] text-slate-950", 
                    {
                      emerald: "text-emerald-700!",
                      red: "text-red-700!"
                    }[stat.color!]
                  )}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href={demoHref}
                trailingIcon={<Icon className="h-3 w-3" name="arrow-right" />}
              >
                Voir la démo
              </Button>
              <Button
                href="#journey"
                leadingIcon={<Icon className="h-4 w-4" name="play" />}
                variant="outline"
              >
                Comment ça marche
              </Button>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.3px] text-slate-500">
                Ils nous font confiance
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
                {trustLogos.map((logo) => (
                  <span key={logo}>{logo}</span>
                ))}
              </div>
            </div>
          </div>

          <HeroPreview stats={heroPreviewStats} />
        </div>
      </Container>
    </section>
  );
};
