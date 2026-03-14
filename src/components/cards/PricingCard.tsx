import clsx from "clsx";

import type { PricingPlan } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icons";

interface PricingCardProps {
  ctaHref: string;
  plan: PricingPlan;
}

export const PricingCard = ({ ctaHref, plan }: PricingCardProps) => {
  return (
    <article
      className={clsx(
        "relative rounded-[28px] border bg-white p-8 transition-transform duration-200 hover:-translate-y-1",
        {
          "border-red-200 shadow-[0_30px_60px_-30px_rgba(220,38,38,0.35)]":
            plan.highlighted,
          "border-slate-200 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.2)]":
            !plan.highlighted
        }
      )}
    >
      {plan.badgeLabel ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#dc2626_0%,#b01219_100%)] px-4 py-1.5 text-sm font-semibold tracking-[0.03em] text-white shadow-[0_10px_24px_-14px_rgba(220,38,38,0.8)]">
          {plan.badgeLabel}
        </div>
      ) : null}

      <div
        className={clsx(
          "flex h-12 w-12 items-center justify-center rounded",
          {
            "bg-red-50 text-red-600": plan.highlighted,
            "bg-emerald-50 text-emerald-600": !plan.highlighted
          }
        )}
      >
        <Icon className="h-6 w-6" name={plan.icon} />
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
          {plan.name}
        </h3>
        <p className={clsx(
          "text-sm font-medium",
          {
            "text-red-600": plan.highlighted,
            "text-emerald-600": !plan.highlighted
          }
        )}>
          {plan.subtitle}
        </p>
      </div>

      <p className="mt-4 text-base leading-7 text-slate-600">{plan.description}</p>

      <div className="mt-6 border-y border-slate-200 py-4 text-sm text-slate-500">
        {plan.priceNote}
      </div>

      <ul className="mt-6 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
            <span className={clsx(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              {
                "text-red-600": plan.highlighted,
                "text-emerald-600": !plan.highlighted
              }
            )}>
              <Icon className="h-4.5 w-4.5" name="check" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button fullWidth href={ctaHref} variant={plan.buttonVariant}>
          {plan.ctaLabel}
        </Button>
      </div>
    </article>
  );
};
