import Link from "next/link";
import { MessageSquareQuote } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";

/**
 * Seção de avaliações da página inicial.
 *
 * As avaliações reais dos clientes serão cadastradas pelo administrador em
 * `/admin/avaliacoes` e consumidas via `reviewsService.listFeatured()`.
 * Optou-se por não inventar textos de depoimento atribuídos a clientes
 * reais neste primeiro passo — isso será resolvido quando o CRUD de
 * avaliações estiver implementado.
 */
export function Testimonials() {
  return (
    <section className="border-border-subtle border-t py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Avaliações"
          title="Quem compra, recomenda"
          description="Depoimentos reais de clientes que compraram na Coxinha Cel."
          align="center"
        />

        <div className="border-border-subtle bg-surface-1/50 mt-14 flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-20 text-center">
          <MessageSquareQuote className="text-muted h-8 w-8" aria-hidden="true" />
          <p className="text-muted mt-4 max-w-sm text-sm">
            As avaliações cadastradas pela equipe da Coxinha Cel aparecerão aqui.
          </p>
          <Button variant="outline" size="sm" className="mt-6" asChild>
            <Link href="/avaliacoes">Ver todas as avaliações</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
