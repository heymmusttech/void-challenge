import clsx from "clsx";
import { Icon } from "./Icons";
import type { AppIconName } from "./Icons";

interface SectionHeadingProps {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  eyebrowTone?: "emerald" | "red" | "slate" | "white";
  theme?: "light" | "dark";
  title: string;
  icon?: AppIconName;
}

export const SectionHeading = ({
  align = "left",
  description,
  eyebrow,
  eyebrowTone = "slate",
  theme = "light",
  title,
  icon
}: SectionHeadingProps) => {
  return (
    <div
      className={clsx("space-y-4", {
        "text-left": align === "left",
        "mx-auto text-center": align === "center"
      })}
    >
      {eyebrow ? (
        <span
          className={clsx(
            "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
            {
              "bg-emerald-50 text-emerald-700": eyebrowTone === "emerald",
              "bg-red-50 text-red-700": eyebrowTone === "red",
              "bg-slate-100 text-slate-600": eyebrowTone === "slate",
              "bg-white/10 text-white ring-1 ring-white/15":
                eyebrowTone === "white"
            }
          )}
        >
          {icon && <Icon className="mr-2 h-3 w-3 p-0!" name={icon} />}
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={clsx(
          "text-balance text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.25rem]",
          {
            "text-slate-950": theme === "light",
            "text-white": theme === "dark"
          }
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx("text-balance text-lg leading-6", {
            "text-slate-600": theme === "light",
            "text-white/80": theme === "dark"
          })}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};
