import { siteConfig } from "@/config/site";
import { formatCurrency } from "./currency";
import { toE164Brazil } from "./phone";

/**
 * Geração de links e mensagens de WhatsApp.
 *
 * Regra importante do briefing: o link SEMPRE usa `siteConfig.contact.whatsapp`,
 * nunca `siteConfig.contact.phone` — são números diferentes com propósitos
 * diferentes. Nenhum componente deve montar esse link manualmente.
 */

interface ProductWhatsappMessageInput {
  name: string;
  code: string;
  price: number;
  /** URL absoluta da página do produto, incluída na mensagem. */
  url: string;
}

/** Monta a URL final "https://wa.me/<numero>?text=<mensagem>". */
export function buildWhatsappLink(message: string, phoneOverride?: string): string {
  const number = toE164Brazil(phoneOverride ?? siteConfig.contact.whatsapp.number);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
}

/** Link de WhatsApp com a mensagem padrão da loja (botão flutuante). */
export function buildDefaultWhatsappLink(): string {
  return buildWhatsappLink(siteConfig.whatsappDefaultMessage);
}

/**
 * Mensagem automática gerada a partir dos dados do produto, conforme o
 * modelo definido no planejamento:
 *
 * "Olá! Vi no site da Coxinha Cel o iPhone 15 Pro Max 256 GB Titânio,
 * anunciado por R$ 6.999,00. O código do produto é CXC-0158. Ele ainda
 * está disponível? Gostaria de saber as condições de pagamento."
 */
export function buildProductWhatsappMessage({
  name,
  code,
  price,
  url,
}: ProductWhatsappMessageInput): string {
  return [
    `Olá! Vi no site da Coxinha Cel o ${name}, anunciado por ${formatCurrency(price)}.`,
    `O código do produto é ${code}.`,
    `Ele ainda está disponível? Gostaria de saber as condições de pagamento.`,
    `Link: ${url}`,
  ].join("\n\n");
}

export function buildProductWhatsappLink(input: ProductWhatsappMessageInput): string {
  return buildWhatsappLink(buildProductWhatsappMessage(input));
}
