import { Camera } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { siteConfig } from "@/config/site";
import { scaleIn } from "@/lib/motion";

export function InstagramCta() {
  return (
    <section className="border-border-subtle border-t py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal variants={scaleIn}>
          <div className="border-border-subtle bg-surface-1 relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl border px-6 py-16 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: "var(--gradient-radial-accent)" }}
            />
            <Camera className="text-accent-light relative h-8 w-8" aria-hidden="true" />
            <div className="relative">
              <SectionHeading
                title="Novidades e ofertas no Instagram"
                description="Acompanhe chegadas de aparelhos, promoções e bastidores da loja em Betim."
                align="center"
              />
            </div>
            <Button className="relative" asChild>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir {siteConfig.social.instagram.handle}
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
