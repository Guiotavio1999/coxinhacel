import { siteConfig } from "@/config/site";

/**
 * Utilitários derivados de `siteConfig.businessHours`.
 * Toda a lógica de "loja aberta agora" vive aqui para não ser duplicada
 * entre header, rodapé e página de contato.
 */

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getTodayHours() {
  const today = new Date().getDay();
  return siteConfig.businessHours.find((entry) => entry.day === today) ?? null;
}

/** Retorna true se a loja está aberta neste exato momento. */
export function isStoreOpenNow(referenceDate: Date = new Date()): boolean {
  const day = referenceDate.getDay();
  const todayEntry = siteConfig.businessHours.find((entry) => entry.day === day);

  if (!todayEntry || !todayEntry.open || !todayEntry.close) return false;

  const nowMinutes = referenceDate.getHours() * 60 + referenceDate.getMinutes();
  const openMinutes = parseTimeToMinutes(todayEntry.open);
  const closeMinutes = parseTimeToMinutes(todayEntry.close);

  return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
}

/** Texto curto para exibição, ex.: "Aberto agora · fecha às 20:00". */
export function getStoreStatusLabel(referenceDate: Date = new Date()): string {
  const todayEntry = siteConfig.businessHours.find(
    (entry) => entry.day === referenceDate.getDay(),
  );

  if (!todayEntry || !todayEntry.open || !todayEntry.close) {
    return "Fechado hoje";
  }

  return isStoreOpenNow(referenceDate)
    ? `Aberto agora · fecha às ${todayEntry.close}`
    : `Fechado agora · abre às ${todayEntry.open}`;
}

/** Lista completa formatada para exibição na página de contato / rodapé. */
export function getFormattedBusinessHours() {
  return siteConfig.businessHours.map((entry) => ({
    label: entry.label,
    hours: entry.open && entry.close ? `${entry.open} às ${entry.close}` : "Fechado",
  }));
}
