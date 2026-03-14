import { backofficeFeatures, demoHref } from "../../data/siteContent";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

export const BackofficeSection = () => {
  return (
    <section className="scroll-mt-24 border-y border-black/5 bg-[linear-gradient(180deg,#ffffff_0%,#f5f5f5_100%)] py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            align="center"
            description="Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie"
            eyebrow="Backoffice tout-en-un"
            eyebrowTone="emerald"
            title="Gérez tout depuis une interface unique"
            icon="gear"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {backofficeFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white/85 p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.2)] backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded bg-emerald-50 text-emerald-600">
                <Icon className="h-6 w-6" name={feature.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href={demoHref}
            trailingIcon={<Icon className="h-4 w-4" name="arrow-right" />}
          >
            Demander un accès au backoffice
          </Button>
        </div>
      </Container>
    </section>
  );
};
