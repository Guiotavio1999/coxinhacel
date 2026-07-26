"use client";

import type { PointerEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";
import { scaleIn } from "@/lib/motion";

/**
 * Caminho da imagem real do iPhone 17, quando a loja fornecer uma foto
 * licenciada (ver public/assets/products/iphone-17/README.txt). Enquanto
 * for `null`, o componente renderiza um placeholder abstrato — não uma
 * foto — e nenhuma outra parte do hero/layout precisa mudar quando esse
 * valor for preenchido.
 */
const PRODUCT_HERO_IMAGE_SRC: string | null = null;

/** Textura granulada quase imperceptível (ruído SVG), aplicada sobre o placeholder. */
const GRAIN_BACKGROUND =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface ProductVisualProps {
  /** Cor selecionada no seletor — usada só para tingir sutilmente a luz de fundo. */
  tintHex?: string;
  className?: string;
}

export function ProductVisual({ tintHex = "#2f80ff", className }: ProductVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.4 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: 1200 }}
    >
      {/* Campo de luz — palco do produto, tingido sutilmente pela cor selecionada. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full transition-[background] duration-500 ease-out"
        style={{
          background: `radial-gradient(circle, ${tintHex}40, transparent 70%)`,
          filter: "blur(var(--blur-lg))",
        }}
      />

      {PRODUCT_HERO_IMAGE_SRC ? (
        <Image
          src={PRODUCT_HERO_IMAGE_SRC}
          alt="iPhone 17 disponível na Coxinha Cel"
          width={520}
          height={1040}
          priority
          className="h-auto w-full max-w-[280px] drop-shadow-[0_40px_80px_rgba(47,128,255,0.35)] sm:max-w-[340px]"
        />
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          style={
            prefersReducedMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }
          }
          className="border-border-strong relative aspect-[9/18.5] w-full max-w-[240px] overflow-hidden rounded-[2.75rem] border shadow-[var(--shadow-elevated)] sm:max-w-[280px]"
        >
          {/* Superfície metálica. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, #232a36 0%, #151a22 45%, #0a0d12 100%)",
            }}
          />

          {/* "Tela" — glow azul central, como interface acesa. */}
          <div
            className="absolute inset-[6%] overflow-hidden rounded-[2.1rem]"
            style={{ background: "#050709" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 38%, rgba(102,180,255,0.35), transparent 60%)",
              }}
            />
          </div>

          {/* Reflexo de lente percorrendo a superfície — congelado se prefers-reduced-motion. */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 w-1/3 -skew-x-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
            }}
            initial={{ x: "-120%" }}
            animate={prefersReducedMotion ? undefined : { x: ["-120%", "220%"] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          />

          {/* Textura granulada quase imperceptível. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{ backgroundImage: GRAIN_BACKGROUND }}
          />
        </motion.div>
      )}
    </div>
  );
}
