"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, MapPin, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";
import { fadeUp, staggerContainer, EASE_PREMIUM } from "@/lib/motion";

const PARTICLES = [
  { top: "18%", left: "12%", size: 10, duration: 7, delay: 0 },
  { top: "68%", left: "82%", size: 14, duration: 9, delay: 1.2 },
  { top: "32%", left: "88%", size: 8, duration: 6, delay: 0.5 },
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid de pontos sutil — textura de fundo grafite. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:radial-gradient(rgba(245,245,247,0.14)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      {/* Brilho radial azul de fundo — assinatura visual da marca. */}
      <motion.div
        aria-hidden="true"
        style={{ y: glowY, opacity: glowOpacity, boxShadow: "var(--shadow-glow-strong)" }}
        className="pointer-events-none absolute top-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full"
      />

      {/* Partículas flutuantes decorativas. */}
      {PARTICLES.map((particle, index) => (
        <motion.div
          key={index}
          aria-hidden="true"
          className="bg-accent-light/60 pointer-events-none absolute rounded-full blur-[2px]"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="container-site relative flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.12)}
      >
        <motion.div
          variants={fadeUp}
          className="border-border-subtle bg-surface-1/80 text-muted mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
        >
          <MapPin className="text-accent-light h-3.5 w-3.5" aria-hidden="true" />
          Loja física em {siteConfig.address.city}, {siteConfig.address.state}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-foreground max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl md:text-8xl"
        >
          Seu próximo iPhone <span className="text-accent-light">começa aqui</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-muted mt-7 max-w-xl text-base leading-relaxed text-balance sm:text-lg"
        >
          Aparelhos novos e seminovos selecionados, com preço justo, procedência e
          atendimento especializado em {siteConfig.address.city}.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
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
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 2, repeat: Infinity, ease: EASE_PREMIUM } }}
        className="text-muted/60 absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
