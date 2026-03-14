import { capabilityHighlights } from "../../data/siteContent";
import { Container } from "../layout/Container";
import { Icon } from "../ui/Icons";

export const CapabilitiesSection = () => {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {capabilityHighlights.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded bg-emerald-50 text-emerald-600">
                <Icon className="h-6 w-6" name={item.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
