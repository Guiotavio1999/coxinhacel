/**
 * Utilitários de formatação monetária (Real brasileiro).
 * Todos os valores monetários no domínio da aplicação são armazenados
 * como `number` em reais (não centavos), ex.: 6999.9.
 */

const BRL_FORMATTER = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** Formata um número para o padrão "R$ 6.999,00". */
export function formatCurrency(value: number): string {
  return BRL_FORMATTER.format(value);
}

/** Formata sem o símbolo "R$", ex.: "6.999,00". */
export function formatCurrencyNumber(value: number): string {
  return BRL_FORMATTER.format(value).replace(/^R\$\s?/, "");
}

/**
 * Calcula o valor de cada parcela para um preço total, dado um número de
 * parcelas. Útil como fallback quando o produto não define `installments`
 * explicitamente.
 */
export function calculateInstallment(total: number, count: number): number {
  if (count <= 0) return total;
  return total / count;
}

/** Formata a linha de parcelamento, ex.: "12x de R$ 583,25". */
export function formatInstallmentLabel(count: number, value: number): string {
  return `${count}x de ${formatCurrency(value)}`;
}
