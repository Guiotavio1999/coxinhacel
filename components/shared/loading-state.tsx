"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn, EASE_PREMIUM } from "@/lib/motion";

/**
 * Indicador de carregamento reutilizável, com a marca da loja.
 *
 * Não é registrado como `loading.tsx` no nível raiz de `app/(public)/`
 * — ver documentation/ARCHITECTURE.md, seção "Por que não há um
 * loading.tsx global", para o motivo (resumo: um Suspense boundary
 * ancestral força o Next.js a comprometer o status HTTP 200 antes de
 * `notFound()` rodar em `/produtos/[slug]`, quebrando o 404 real).
 *
 * Use este componente diretamente dentro de um `<Suspense fallback={...}>`
 * local, ou crie um `loading.tsx` específico por rota apenas em segmentos
 * que nunca chamam `notFound()`.
 */
export function LoadingState() {
  return (
    <motion.div
      role="status"
      aria-label="Carregando"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="flex min-h-[60vh] flex-col items-center justify-center gap-5"
    >
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6], scale: [0.96, 1, 0.96] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: EASE_PREMIUM }}
        className="drop-shadow-[0_0_18px_rgba(47,128,255,0.55)]"
      >
        <Image src="/logo.png" alt="Coxinha Cel" width={56} height={56} className="rounded-full" />
      </motion.div>
      <p className="text-muted text-sm">Carregando…</p>
    </motion.div>
  );
}
