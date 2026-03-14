import clsx from "clsx";
import { useEffect, useState } from "react";

import { demoHref, navLinks } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { BrandMark, Icon } from "../ui/Icons";
import { Container } from "./Container";

const MenuToggleIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      ) : (
        <path
          d="M4 7H20M4 12H20M4 17H15"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )}
    </svg>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-18 items-center justify-between gap-4 py-3">
          <a className="flex items-center gap-3" href="#top" onClick={closeMenu}>
            <BrandMark withExtra />
          </a>

          <div className="flex items-center gap-3 lg:gap-6">
            <nav
              aria-label="Navigation principale"
              className="hidden items-center gap-1 lg:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden shrink-0 lg:block">
              <Button
                href={demoHref}
                size="sm"
                trailingIcon={<Icon className="h-4 w-4" name="arrow-right" />}
              >
                Demander une démo
              </Button>
            </div>

            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.35)] transition-colors duration-200 hover:border-slate-300 hover:text-slate-950 lg:hidden"
              onClick={() => setIsMenuOpen((previousState) => !previousState)}
              type="button"
            >
              <MenuToggleIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>

        <div
          className={clsx(
            "grid transition-all duration-300 ease-out lg:hidden",
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100 pb-4"
              : "grid-rows-[0fr] opacity-0"
          )}
          id="mobile-navigation"
        >
          <div className="min-h-0 overflow-hidden">
            <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_24px_40px_-28px_rgba(15,23,42,0.4)]">
              <nav
                aria-label="Navigation mobile"
                className="flex flex-col gap-1"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-3 border-t border-slate-200 pt-3">
                <Button
                  className="w-full"
                  href={demoHref}
                  size="sm"
                  trailingIcon={<Icon className="h-4 w-4" name="arrow-right" />}
                >
                  Demander une démo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
