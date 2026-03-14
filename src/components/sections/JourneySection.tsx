import clsx from "clsx";
import { journeySteps } from "../../data/siteContent";
import { Container } from "../layout/Container";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

export const JourneySection = () => {
  return (
    <section className="scroll-mt-24 py-20" id="journey">
      <Container>
        <SectionHeading
          align="center"
          description="De l'achat du produit à la récompense, en 5 étapes"
          title="Un parcours client simple et engageant"
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {journeySteps.map((step, index) => (
            <li
              key={step.step}
              className="relative rounded-3xl p-6 flex flex-col items-center"
            >
              <span className={clsx(
                "absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full  text-xs font-semibold text-white",
                index <= 2 ?  "bg-emerald-600": "bg-red-600"
              )}>
                {step.step}
              </span>
              <div className={clsx(
                "flex h-16 w-16 items-center justify-center rounded-2xl border bg-white",
                index <= 2 ?  "border-emerald-300 text-emerald-600": "border-red-300 text-red-600"
              )}>
                <Icon className="h-7 w-7" name={step.icon} />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-slate-950 text-center">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-5 text-slate-600 text-center">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};
