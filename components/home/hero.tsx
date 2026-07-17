"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-32">
      {/* Brilho radial azul de fundo — assinatura visual da marca. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full"
        style={{ boxShadow: "var(--shadow-glow-strong)" }}
      />

      <div className="container-site relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="border-border-subtle bg-surface-1/80 text-muted mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
        >
          <MapPin className="text-accent-light h-3.5 w-3.5" aria-hidden="true" />
          Loja física em {siteConfig.address.city}, {siteConfig.address.state}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="font-display text-foreground max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          Seu próximo iPhone <span className="text-accent-light">começa aqui</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="text-muted mt-6 max-w-xl text-base leading-relaxed text-balance sm:text-lg"
        >
          Aparelhos novos e seminovos selecionados, com preço justo, procedência e
          atendimento especializado em {siteConfig.address.city}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="/produtos">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              Ver aparelhos
            </Link>
          </Button>
          <Button size="lg" variant="whatsapp" asChild>
            <a
              href={buildDefaultWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
