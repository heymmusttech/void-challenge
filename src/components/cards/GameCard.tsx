import clsx from "clsx";

import type { GameItem } from "../../data/siteContent";
import { Icon } from "../ui/Icons";

interface GameCardProps {
  game: GameItem;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_24px_-20px_rgba(15,23,42,0.25)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          alt={game.imageAlt}
          className="aspect-4/3 w-full object-cover"
          src={game.imageSrc}
        />
        {game.badgeLabel ? (
          <span
            className={clsx(
              "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em]",
              {
                "bg-[linear-gradient(90deg,#dc2626_0%,#b01219_100%)] text-white":
                  game.badgeTone === "red",
                "bg-slate-900 text-white": game.badgeTone === "slate",
                "bg-emerald-100 text-emerald-700":
                  game.badgeTone === "emerald"
              }
            )}
          >
            {game.badgeLabel}
          </span>
        ) : null}
      </div>

      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
          {game.title}
        </h3>
        <p className="min-h-12 text-sm leading-5 text-slate-600">
          {game.description}
        </p>
        <div className="min-h-4">
          {game.ctaLabel ? (
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600! transition-colors duration-200 hover:text-emerald-700!"
              href="#cta"
            >
              <span>{game.ctaLabel}</span>
              <Icon className="h-4 w-4" name="arrow-right" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
