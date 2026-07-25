"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";
import { EASE_PREMIUM } from "@/lib/motion";

/**
 * Botão flutuante de WhatsApp, fixo no canto inferior direito em todas as
 * páginas públicas. Usa a mensagem padrão da loja — mensagens específicas
 * de produto são geradas à parte, em `product-whatsapp-button.tsx`
 * (componente a ser criado no tópico de catálogo/produto).
 */
export function WhatsappFloatButton() {
  return (
    <motion.a
      href={buildDefaultWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Coxinha Cel no WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4, ease: EASE_PREMIUM }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="bg-whatsapp ease-premium fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full text-black shadow-[var(--shadow-card)] transition-shadow duration-[var(--duration-base)] hover:shadow-[var(--shadow-elevated)] md:right-8 md:bottom-8"
    >
      <MessageCircle className="h-7 w-7" fill="black" strokeWidth={0} />
    </motion.a>
  );
}
