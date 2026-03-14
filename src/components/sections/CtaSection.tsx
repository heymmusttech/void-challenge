import { contactHref, demoHref } from "../../data/siteContent";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

export const CtaSection = () => {
  return (
    <section
      className="scroll-mt-24 bg-[linear-gradient(90deg,#dc2626_0%,#b01219_100%)] py-16 text-white sm:py-20"
      id="cta"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            align="center"
            description="Rejoignez les marques qui engagent leurs fans avec YouCanWin"
            theme="dark"
            title="Prêt à transformer votre marketing ?"
          />

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button
              className="w-full sm:w-auto"
              href={demoHref}
              size="lg"
              leadingIcon={<Icon className="h-5 w-5 text-red-700" name="calendar" />}
              variant="light"
            >
              Planifier une démo gratuite
            </Button>
            <Button
              className="w-full sm:w-auto"
              href={contactHref}
              leadingIcon={<Icon className="h-5 w-5" name="letter" />}
              size="lg"
              variant="glass"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
