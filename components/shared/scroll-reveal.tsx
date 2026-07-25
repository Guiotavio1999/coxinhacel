"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  /** Variantes do Framer Motion; padrão: fade + slide-up. */
  variants?: Variants;
  className?: string;
  /** Atraso em segundos antes de iniciar a animação (útil em listas). */
  delay?: number;
  /** Elemento HTML a renderizar; padrão: div. */
  as?: "div" | "li";
}

/**
 * Wrapper de "reveal ao rolar a página", usado em todas as seções da home
 * para evitar repetir o boilerplate de `initial`/`whileInView`/`transition`.
 */
export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;

  // Variantes definem sua própria `transition`, que tem precedência sobre a
  // prop `transition` do componente — por isso o delay é injetado aqui.
  const resolvedVariants: Variants = delay
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as { transition?: object })?.transition,
            delay,
          },
        },
      }
    : variants;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={resolvedVariants}
    >
      {children}
    </MotionTag>
  );
}
