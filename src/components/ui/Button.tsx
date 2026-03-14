import clsx from "clsx";
import type { ReactNode } from "react";

import type { ButtonVariant } from "../../types/ui";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  href: string;
  leadingIcon?: ReactNode;
  size?: "sm" | "md" | "lg";
  trailingIcon?: ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  className,
  fullWidth = false,
  href,
  leadingIcon,
  size = "md",
  trailingIcon,
  variant = "primary"
}: ButtonProps) => {
  return (
    <a
      className={clsx(
        "inline-flex items-center justify-center gap-3 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        {
          "h-10 px-4 text-sm": size === "sm",
          "h-12 px-5 text-sm sm:text-base": size === "md",
          "h-14 px-6 text-base": size === "lg",
          "w-full": fullWidth,
          "bg-linear-to-r from-emerald-600 to-emerald-800 text-white! shadow-[0_10px_30px_-15px_rgba(22,163,74,0.85)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-18px_rgba(22,163,74,0.9)] focus-visible:ring-emerald-500":
            variant === "primary",
          "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-400":
            variant === "outline",
          "bg-red-600 text-white! shadow-[0_12px_30px_-18px_rgba(220,38,38,0.8)] hover:-translate-y-0.5 hover:bg-red-700 focus-visible:ring-red-500":
            variant === "accent",
          "bg-white text-red-800! shadow-[0_12px_30px_-16px_rgba(15,23,42,0.25)] hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:ring-white":
            variant === "light",
          "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/15 focus-visible:ring-white":
            variant === "glass"
        },
        className
      )}
      href={href}
    >
      {leadingIcon ? <span className="shrink-0">{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span className="shrink-0">{trailingIcon}</span> : null}
    </a>
  );
};
