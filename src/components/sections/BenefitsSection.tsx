import { benefitCards } from "../../data/siteContent";
import { Container } from "../layout/Container";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

export const BenefitsSection = () => {
  return (
    <section className="scroll-mt-24 bg-[linear-gradient(90deg,#16a34a_0%,#0b6b3a_100%)] py-16 text-white sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            align="center"
            description="YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football"
            theme="dark"
            title="Transformez vos ventes en expérience mémorable"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {benefitCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md sm:p-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Icon className="h-7 w-7" name={card.icon} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-center">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-5 text-white/80 text-center">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
