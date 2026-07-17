import Link from "next/link";
import { SectionHeading } from "./section-heading";
import { Smartphone, Watch, Tablet, Headphones } from "lucide-react";

/**
 * Grade de categorias de acesso rápido. Os itens abaixo refletem o
 * catálogo previsto no briefing (iPhones novos e seminovos, Android, Apple
 * Watch, iPad e acessórios). Quando conectado ao Supabase, esta seção passa
 * a renderizar apenas categorias ativas com produtos vinculados
 * (`categoriesService.listActive()`), na ordem definida pelo administrador.
 */
const categoryPreview = [
  { icon: Smartphone, name: "iPhones novos" },
  { icon: Smartphone, name: "iPhones seminovos" },
  { icon: Smartphone, name: "Android" },
  { icon: Watch, name: "Apple Watch" },
  { icon: Tablet, name: "iPad" },
  { icon: Headphones, name: "Acessórios" },
] as const;

export function Categories() {
  return (
    <section className="border-border-subtle border-t py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Catálogo"
          title="Encontre por categoria"
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categoryPreview.map(({ icon: Icon, name }) => (
            <Link
              key={name}
              href="/produtos"
              className="group border-border-subtle bg-surface-1 hover:border-accent/40 flex flex-col items-center gap-3 rounded-2xl border px-4 py-8 text-center transition-colors"
            >
              <Icon
                className="text-muted group-hover:text-accent-light h-6 w-6 transition-colors"
                aria-hidden="true"
              />
              <span className="text-foreground text-sm font-medium">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
