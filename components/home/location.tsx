import { MapPin, Clock, Phone } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { siteConfig } from "@/config/site";
import { formatBrazilianPhone } from "@/lib/utils/phone";
import { getFormattedBusinessHours } from "@/lib/utils/store-hours";
import { fadeUp, scaleIn } from "@/lib/motion";

export function Location() {
  const hours = getFormattedBusinessHours();
  const mapQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}`,
  );

  return (
    <section className="border-border-subtle border-t py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
        <ScrollReveal variants={fadeUp}>
          <SectionHeading eyebrow="Onde estamos" title="Nossa loja em Betim" />

          <dl className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin
                className="text-accent-light mt-0.5 h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              <div>
                <dt className="text-foreground text-sm font-semibold">Endereço</dt>
                <dd className="text-muted mt-1 text-sm">
                  {siteConfig.address.street}, {siteConfig.address.neighborhood}
                  <br />
                  {siteConfig.address.reference}
                  <br />
                  {siteConfig.address.city}/{siteConfig.address.state} — CEP{" "}
                  {siteConfig.address.zipCode}
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock
                className="text-accent-light mt-0.5 h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              <div>
                <dt className="text-foreground text-sm font-semibold">
                  Horário de funcionamento
                </dt>
                <dd className="text-muted mt-1 space-y-1 text-sm">
                  {hours.map((entry) => (
                    <p key={entry.label}>
                      {entry.label}: {entry.hours}
                    </p>
                  ))}
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone
                className="text-accent-light mt-0.5 h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              <div>
                <dt className="text-foreground text-sm font-semibold">Telefone</dt>
                <dd className="text-muted mt-1 text-sm">
                  {formatBrazilianPhone(siteConfig.contact.phone.number)}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no Google Maps
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Traçar rota
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal variants={scaleIn} delay={0.15}>
          <div className="border-border-subtle overflow-hidden rounded-2xl border">
            <iframe
              title="Localização da Coxinha Cel em Betim"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-80 w-full contrast-[1.1] grayscale invert-[0.92] lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
