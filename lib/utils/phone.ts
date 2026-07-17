/**
 * Utilitários para números de telefone brasileiros.
 * Os números "de origem" são mantidos em `config/site.ts` no formato E.164
 * sem símbolos (ex.: "5531992244180"). Este arquivo cuida apenas de exibição
 * e normalização — nunca de disparo de mensagens (ver `whatsapp.ts`).
 */

/** Remove tudo que não for dígito. */
export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Formata um número brasileiro (com ou sem DDI 55) para exibição:
 * "5531992244180" -> "(31) 99224-4180"
 * "31975987167"     -> "(31) 97598-7167"
 */
export function formatBrazilianPhone(rawValue: string): string {
  let digits = onlyDigits(rawValue);

  // Remove o DDI 55 se presente e o número tiver DDD + 9 dígitos (13 no total).
  if (digits.length === 13 && digits.startsWith("55")) {
    digits = digits.slice(2);
  }

  if (digits.length === 11) {
    const ddd = digits.slice(0, 2);
    const firstPart = digits.slice(2, 7);
    const secondPart = digits.slice(7);
    return `(${ddd}) ${firstPart}-${secondPart}`;
  }

  if (digits.length === 10) {
    const ddd = digits.slice(0, 2);
    const firstPart = digits.slice(2, 6);
    const secondPart = digits.slice(6);
    return `(${ddd}) ${firstPart}-${secondPart}`;
  }

  // Não foi possível normalizar com segurança: devolve o valor original.
  return rawValue;
}

/** Garante o formato E.164 (com DDI 55, só dígitos) para uso em links. */
export function toE164Brazil(rawValue: string): string {
  const digits = onlyDigits(rawValue);
  if (digits.startsWith("55")) return digits;
  return `55${digits}`;
}
