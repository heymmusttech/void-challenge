import { performanceStats } from "../../data/siteContent";
import { Container } from "../layout/Container";
import { Icon } from "../ui/Icons";

export const PerformanceSection = () => {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {performanceStats.map((stat) => (
            <article
              key={stat.label}
              className="text-center"
            >
              <div className="mx-auto flex items-center justify-center text-slate-700">
                <Icon className="h-8 w-8 text-emerald-600" name={stat.icon} />
              </div>
              <p className="mt-5 text-3xl font-bold tracking-[-0.03em] text-slate-950">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
