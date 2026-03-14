import clsx from "clsx";

import type { StatItem } from "../../data/siteContent";
import { Icon } from "../ui/Icons";

interface FloatingInfoCardProps {
  className?: string;
  description: string;
  icon: "gift" | "qr";
  title: string;
}

interface HeroPreviewProps {
  stats: StatItem[];
}

const FloatingInfoCard = ({
  className,
  description,
  icon,
  title,
}: FloatingInfoCardProps) => {
  return (
    <div
      className={clsx(
        "hidden max-w-56 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_30px_-18px_rgba(15,23,42,0.18)] sm:block",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className={clsx(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded bg-emerald-50 text-emerald-700",
          {gift: "bg-red-50 text-red-700", qr: "bg-emerald-100 text-emerald-800"}[icon]
        )}>
          <Icon className="h-5 w-5" name={icon} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const HeroPreview = ({ stats }: HeroPreviewProps) => {
  return (
    <div className="relative mx-auto w-full max-w-152 lg:mr-0">
      <FloatingInfoCard
        className="absolute right-0 top-0 z-20 translate-x-4 -translate-y-4"
        description="Debloquer une carte"
        icon="qr"
        title="Scan QR Code"
      />
      <FloatingInfoCard
        className="absolute -bottom-4 left-0 z-20 -translate-x-4"
        description="Tirage hebdomadaire"
        icon="gift"
        title="Recompense"
      />

      <div className="relative rounded-[40px] bg-slate-950 p-3 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.35)] max-w-md w-full min-h-199 mx-auto">
        <div className="absolute inset-0 m-2 h-[calc(100%-16px)] w-[calc(100%-16px)] overflow-hidden rounded-4xl border border-slate-800 bg-slate-900">
          <div className="border-b border-slate-800  p-4 bg-white min-h-full">
            <div className="bg-[linear-gradient(180deg,#16A34A_0%,#0B6B3A_100%)] p-4 text-white -mx-4 -mt-4">
              <p className="text-sm font-medium text-slate-300">Album Digital 2025</p>
              <h3 className="mt-2 text-3xl font-bold tracking-[-0.03em]">
                Ma Collection
              </h3>
              <div className="mt-6 flex gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs tracking-[0.18em] text-white">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-3/4 rounded-xl bg-[linear-gradient(135deg,#f1f5f9_0%,#e2e8f0_100%)]"
                />
              ))}
            </div>
          </div>

          <div className="relative px-6 py-4 -top-19 border-t border-slate-300">
            <div className="grid grid-cols-4 gap-2">
              {["Collection", "Scanner", "Echanges", "Profil"].map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center gap-2 text-center text-[11px] font-medium tracking-[0.12em] text-slate-400"
                >
                  <span className="flex h-5 w-5 rounded-md bg-slate-300/80" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
