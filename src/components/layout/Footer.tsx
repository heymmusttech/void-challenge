import {
  footerLegalLinks,
  footerQuickLinks,
  socialLinks
} from "../../data/siteContent";
import { BrandMark, Icon } from "../ui/Icons";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer
      className="border-t border-slate-200 bg-slate-50 py-12"
      id="footer"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_288px_288px]">
          <div>
            <a className="flex items-center gap-3" href="#top">
               <BrandMark />
            </a>

            <p className="mt-6 max-w-xl text-sm leading-5 text-slate-600">
              Plateforme de jeux digitaux pour engager vos communautés autour
              du football. Un service d&apos;Agency.Africa.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 transition-colors duration-200 hover:border-slate-300 hover:text-slate-950"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
              Liens rapides
            </h3>
            <ul className="mt-5 space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-950"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
              Contact &amp; Légal
            </h3>
            <ul className="mt-5 space-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-950"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-slate-500">
              © 2025 Youcanwin. Tous droits réservés.
            </p>
            <p className="text-sm text-slate-500">
              Un service de{" "}
              <span className="font-semibold text-slate-700">Agency.Africa</span>{" "}
              · games.agency.africa
            </p>
          </div>

          <div className="mt-6 flex justify-center lg:justify-start">
            <div className="mx-auto inline-flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <Icon className="h-5 w-5" name="shield" />
              <span>Site conforme CNDP Maroc</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
