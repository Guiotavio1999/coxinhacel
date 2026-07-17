import type { Metadata } from "next";
import { PackageSearch } from "lucide-react";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/produtos" },
  title: "Produtos",
  description:
    "Catálogo completo de iPhones novos e seminovos, Android, iPads, Apple Watches e acessórios na Coxinha Cel.",
};

/**
 * Catálogo público de produtos.
 *
 * Estrutura preparada para busca, filtros (categoria, marca, condição,
 * armazenamento, cor, faixa de preço, saúde da bateria) e ordenação, a
 * serem implementados no tópico "Catálogo de produtos" descrito em
 * documentation/ARCHITECTURE.md, quando `productsService.list()` estiver
 * conectado ao Supabase.
 */
export default function ProdutosPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase">
            Catálogo
          </p>
          <h1 className="font-display text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Todos os aparelhos
          </h1>
          <p className="text-muted mt-4">
            iPhones novos e seminovos, Android, iPads, Apple Watches e acessórios
            disponíveis em {siteConfig.address.city}.
          </p>
        </div>

        <div className="border-border-subtle bg-surface-1/50 mt-14 flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-24 text-center">
          <PackageSearch className="text-muted h-8 w-8" aria-hidden="true" />
          <p className="text-muted mt-4 max-w-sm text-sm">
            O catálogo com busca, filtros e ordenação será publicado assim que os produtos
            forem cadastrados no painel administrativo.
          </p>
        </div>
      </div>
    </section>
  );
}
