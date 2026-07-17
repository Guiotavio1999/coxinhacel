import type { Metadata } from "next";
import { MapPin, Clock, Phone, Camera } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/config/site";
import { formatBrazilianPhone } from "@/lib/utils/phone";
import { getFormattedBusinessHours } from "@/lib/utils/store-hours";
import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";

export const metadata: Metadata = {
  alternates: { canonical: "/contato" },
  title: "Contato",
  description:
    "Fale com a Coxinha Cel pelo WhatsApp, Instagram ou visite nossa loja física em Betim, MG.",
};

export default function ContatoPage() {
  const hours = getFormattedBusinessHours();
  const mapQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}`,
  );

  return (
    <div className="py-16 md:py-24">
      <div className="container-site">
        <div className="max-w-xl">
          <p className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase">
            Contato
          </p>
          <h1 className="font-display text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Fale com a gente
          </h1>
          <p className="text-muted mt-4">
            Tire dúvidas, confirme disponibilidade ou visite nossa loja física em{" "}
            {siteConfig.address.city}.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="border-border-subtle bg-surface-1 rounded-2xl border p-8">
            <h2 className="font-display text-foreground text-lg font-semibold">
              Envie uma mensagem
            </h2>
            <p className="text-muted mt-1 text-sm">
              Sua mensagem será enviada diretamente para o nosso WhatsApp.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <Button variant="whatsapp" className="w-full sm:w-auto" asChild>
                <a
                  href={buildDefaultWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp agora
                </a>
              </Button>
            </div>

            <dl className="space-y-6">
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

              <div className="flex gap-4">
                <Camera
                  className="text-accent-light mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-foreground text-sm font-semibold">Instagram</dt>
                  <dd className="text-muted mt-1 text-sm">
                    <a
                      href={siteConfig.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground"
                    >
                      {siteConfig.social.instagram.handle}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <div className="border-border-subtle mt-14 overflow-hidden rounded-2xl border">
          <iframe
            title="Localização da Coxinha Cel em Betim"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-80 w-full contrast-[1.1] grayscale invert-[0.92]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
