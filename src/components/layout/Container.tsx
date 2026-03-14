import clsx from "clsx";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-40 relative",
        className
      )}
    >
      {children}
    </div>
  );
};
