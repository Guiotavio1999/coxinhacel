"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, Watch, Tablet, Headphones } from "lucide-react";

import { SectionHeading } from "./section-heading";
import { fadeUp, staggerContainer } from "@/lib/motion";

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

        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.06)}
        >
          {categoryPreview.map(({ icon: Icon, name }) => (
            <motion.div key={name} variants={fadeUp}>
              <Link
                href="/produtos"
                className="group border-border-subtle bg-surface-1 hover:border-accent/40 ease-premium flex h-full flex-col items-center gap-3 rounded-2xl border px-4 py-8 text-center transition-[border-color,transform,box-shadow] duration-[var(--duration-base)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <Icon
                  className="text-muted group-hover:text-accent-light h-6 w-6 transition-colors"
                  aria-hidden="true"
                />
                <span className="text-foreground text-sm font-medium">{name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
