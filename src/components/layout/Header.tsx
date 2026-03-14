import { demoHref, navLinks } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { BrandMark, Icon } from "../ui/Icons";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <a className="flex items-center gap-3" href="#top">
            <BrandMark withExtra />
          </a>

          <div className="flex items-center gap-6">
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

            <div className="shrink-0">
              <Button
                className="hidden sm:inline-flex"
                href={demoHref}
                size="sm"
                trailingIcon={<Icon className="h-4 w-4" name="arrow-right" />}
              >
                Demander une démo
              </Button>
              <Button className="sm:hidden" href={demoHref} size="sm">
                Démo
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </header>
  );
};
