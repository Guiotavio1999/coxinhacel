import Link from "next/link";
import { Camera } from "lucide-react";

import { Logo } from "./logo";
import { mainNavItems, footerLegalItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { formatBrazilianPhone } from "@/lib/utils/phone";
import { getFormattedBusinessHours } from "@/lib/utils/store-hours";

export function Footer() {
  const hours = getFormattedBusinessHours();
  const year = new Date().getFullYear();

  return (
    <footer className="border-border-subtle bg-surface-1 border-t">
      <div className="container-site grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="text-muted mt-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.shortDescription}
          </p>
          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent-light mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <Camera className="h-4 w-4" aria-hidden="true" />
            {siteConfig.social.instagram.handle}
          </a>
        </div>

        <div>
          <h3 className="text-foreground text-sm font-semibold">Navegação</h3>
          <ul className="mt-4 space-y-3">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted hover:text-foreground text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-foreground text-sm font-semibold">Loja física</h3>
          <address className="text-muted mt-4 space-y-1 text-sm not-italic">
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.neighborhood} — {siteConfig.address.reference}
            </p>
            <p>
              {siteConfig.address.city}/{siteConfig.address.state} — CEP{" "}
              {siteConfig.address.zipCode}
            </p>
          </address>
          <p className="text-muted mt-4 text-sm">
            Telefone: {formatBrazilianPhone(siteConfig.contact.phone.number)}
          </p>
          <p className="text-muted text-sm">
            WhatsApp: {siteConfig.contact.whatsapp.display}
          </p>
        </div>

        <div>
          <h3 className="text-foreground text-sm font-semibold">
            Horário de funcionamento
          </h3>
          <ul className="mt-4 space-y-2">
            {hours.map((entry) => (
              <li
                key={entry.label}
                className="text-muted flex justify-between gap-4 text-sm"
              >
                <span>{entry.label}</span>
                <span className="text-foreground/80">{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-border-subtle border-t">
        <div className="container-site text-muted flex flex-col items-center justify-between gap-4 py-6 text-xs md:flex-row">
          <p>
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {footerLegalItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-center md:text-right">
            Preços e disponibilidade podem mudar sem aviso prévio.
          </p>
        </div>
      </div>
    </footer>
  );
}
