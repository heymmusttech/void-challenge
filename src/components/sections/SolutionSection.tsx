import { demoHref, solutionFeatures } from "../../data/siteContent";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

export const SolutionSection = () => {
  return (
    <section
      className="scroll-mt-24 border-y border-black/5 bg-[linear-gradient(180deg,#ffffff_0%,#f5f5f5_100%)] py-20"
      id="about"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,448px)_minmax(0,592px)] lg:items-center lg:justify-between">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute inset-0 rounded-4xl bg-slate-950/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_25px_50px_-20px_rgba(15,23,42,0.35)] h-150">
              <img
                alt="Fans de football avec smartphones"
                className="w-full object-cover scale-[1.2]"
                src="/images/solution.png"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-slate-950/10 to-transparent" />
            </div>
          </div>

          <div>
            <SectionHeading
              description="YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d'engagement avec vos consommateurs."
              eyebrow="Solution complète"
              eyebrowTone="emerald"
              title="Le terrain de jeu digital de votre marque"
              icon="cycle-check"
            />

            <div className="mt-10 grid gap-5">
              {solutionFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="flex gap-4 items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-6 w-6" name={feature.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href={demoHref}
                trailingIcon={<Icon className="h-4 w-4" name="calendar" />}
                variant="accent"
              >
                Planifier une démo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
