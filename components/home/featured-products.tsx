import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";

/**
 * Seção de produtos em destaque.
 *
 * Estruturalmente pronta para receber os dados de `productsService.listFeatured()`
 * assim que o Supabase estiver conectado (próximo tópico do projeto). Por ora,
 * exibe um estado vazio elegante em vez de dados fictícios — o briefing
 * proíbe explicitamente o uso de lorem ipsum ou dados fixos simulando produtos reais.
 */
export function FeaturedProducts() {
  return (
    <section className="border-border-subtle border-t py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Destaques"
            title="Aparelhos selecionados"
            description="Os melhores aparelhos disponíveis agora na loja, escolhidos pela nossa equipe."
          />
          <Button variant="outline" asChild>
            <Link href="/produtos">Ver catálogo completo</Link>
          </Button>
        </div>

        <div className="border-border-subtle bg-surface-1/50 mt-14 flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-20 text-center">
          <PackageSearch className="text-muted h-8 w-8" aria-hidden="true" />
          <p className="text-muted mt-4 max-w-sm text-sm">
            Os aparelhos em destaque aparecerão aqui assim que o catálogo for publicado
            pelo painel administrativo.
          </p>
        </div>
      </div>
    </section>
  );
}
