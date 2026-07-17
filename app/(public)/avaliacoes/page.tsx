import type { Metadata } from "next";
import { Star, MessageSquareQuote } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  alternates: { canonical: "/avaliacoes" },
  title: "Avaliações",
  description:
    "Veja o que os clientes dizem sobre a experiência de compra na Coxinha Cel.",
};

/**
 * Página de avaliações. Estrutura preparada para `reviewsService.listAll()`
 * (nota média + lista completa de depoimentos). Ver nota em
 * `components/home/testimonials.tsx` sobre por que nenhum depoimento é
 * simulado neste primeiro passo.
 */
export default function AvaliacoesPage() {
  return (
    <div className="py-16 md:py-24">
      <section className="container-narrow text-center">
        <p className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase">
          Avaliações
        </p>
        <h1 className="font-display text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          O que dizem sobre a Coxinha Cel
        </h1>
        <div className="mt-6 flex items-center justify-center gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="fill-accent-light text-accent-light h-5 w-5" />
          ))}
        </div>
      </section>

      <section className="container-site border-border-subtle bg-surface-1/50 mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-24 text-center">
        <MessageSquareQuote className="text-muted h-8 w-8" aria-hidden="true" />
        <p className="text-muted mt-4 max-w-sm text-sm">
          As avaliações cadastradas pela equipe da Coxinha Cel aparecerão aqui.
        </p>
        <Button variant="outline" size="sm" className="mt-6" asChild>
          <a
            href="https://www.google.com/search?q=Coxinha+Cel+Betim+avaliações"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avaliar no Google
          </a>
        </Button>
      </section>
    </div>
  );
}
