import { Camera } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function InstagramCta() {
  return (
    <section className="border-border-subtle border-t py-20 md:py-28">
      <div className="container-site">
        <div className="border-border-subtle bg-surface-1 flex flex-col items-center gap-6 rounded-2xl border px-6 py-16 text-center">
          <Camera className="text-accent-light h-8 w-8" aria-hidden="true" />
          <SectionHeading
            title="Novidades e ofertas no Instagram"
            description="Acompanhe chegadas de aparelhos, promoções e bastidores da loja em Betim."
            align="center"
          />
          <Button asChild>
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Seguir {siteConfig.social.instagram.handle}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
