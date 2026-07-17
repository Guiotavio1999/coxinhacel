import { Button } from "@/components/ui/button";
import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";

export function FinalCta() {
  return (
    <section className="border-border-subtle relative overflow-hidden border-t py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ boxShadow: "var(--shadow-glow)" }}
      />
      <div className="container-narrow relative text-center">
        <h2 className="font-display text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Encontrou o aparelho ideal?
        </h2>
        <p className="text-muted mx-auto mt-4 max-w-md text-balance">
          Fale com nossa equipe e confirme disponibilidade, condições de pagamento e
          entrega.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="whatsapp" asChild>
            <a
              href={buildDefaultWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a Coxinha Cel
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
