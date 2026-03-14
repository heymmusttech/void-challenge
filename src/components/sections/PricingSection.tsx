import { demoHref, pricingPlans } from "../../data/siteContent";
import { PricingCard } from "../cards/PricingCard";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";

export const PricingSection = () => {
  return (
    <section
      className="scroll-mt-24 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20"
      id="pricing"
    >
      <Container>
        <SectionHeading
          align="center"
          description="Choisissez la solution qui correspond à vos besoins et votre ambition"
          title="Des formules adaptées à votre échelle"
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard ctaHref={demoHref} key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
};
