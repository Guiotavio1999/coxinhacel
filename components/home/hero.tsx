"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductVisual } from "@/components/home/product-visual";
import { ColorSelector } from "@/components/home/color-selector";
import { IPHONE_17_COLOR_OPTIONS } from "@/lib/iphone-17-colors";
import { buildWhatsappLink } from "@/lib/utils/whatsapp";
import { fadeUp, staggerContainer, EASE_PREMIUM } from "@/lib/motion";

const SPECIALIST_WHATSAPP_MESSAGE =
  "Olá! Vi o iPhone 17 no site da Coxinha Cel e gostaria de consultar modelos, cores, disponibilidade e formas de pagamento.";

export function Hero() {
  const [selectedColorId, setSelectedColorId] = useState(IPHONE_17_COLOR_OPTIONS[0].id);
  const selectedColor =
    IPHONE_17_COLOR_OPTIONS.find((option) => option.id === selectedColorId) ??
    IPHONE_17_COLOR_OPTIONS[0];

  return (
    <section className="border-border-subtle relative overflow-hidden border-b">
      {/* Grid técnico de baixa opacidade — textura de fundo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="container-site relative grid gap-14 py-20 lg:min-h-[92vh] lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12)}
          className="relative flex flex-col items-start text-left"
        >
          <motion.div
            variants={fadeUp}
            className="border-border-subtle bg-surface-1/80 text-muted mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase"
          >
            Nova geração
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-foreground text-[clamp(2.75rem,2.8vw+2.9rem,6.5rem)] leading-[1.04] font-semibold tracking-tight text-balance"
          >
            <span className="text-accent-light">iPhone 17.</span>
            <br />O futuro chegou a Betim.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted mt-6 max-w-md text-lg leading-relaxed text-balance"
          >
            Tecnologia, procedência e atendimento especializado para você escolher seu
            próximo iPhone com segurança.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <ColorSelector
              options={IPHONE_17_COLOR_OPTIONS}
              selectedId={selectedColorId}
              onSelect={setSelectedColorId}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/produtos">Explorar iPhone 17</Link>
            </Button>
            <Button size="lg" variant="whatsapp" asChild>
              <a
                href={buildWhatsappLink(SPECIALIST_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com especialista
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.2 }}
          className="flex items-center justify-center py-4 lg:py-0"
        >
          <ProductVisual tintHex={selectedColor.hex} className="w-full max-w-sm" />
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: EASE_PREMIUM },
        }}
        className="text-muted/60 absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
