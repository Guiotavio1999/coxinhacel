import type { Transition, Variants } from "framer-motion";

/**
 * Fonte única para animações do Framer Motion.
 *
 * `EASE_PREMIUM` espelha `--ease-premium` de `app/globals.css` — mantenha os
 * dois valores sincronizados manualmente (CSS vars não chegam ao JS).
 */
export const EASE_PREMIUM: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

/** Container de stagger — combine com `fadeUp`/`scaleIn` nos filhos. */
export function staggerContainer(
  staggerChildren = 0.12,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}
