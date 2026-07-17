/**
 * Tipos que espelham a futura tabela `store_settings` e as tabelas de
 * conteúdo editável da página inicial (`banners`, `site_sections`).
 *
 * Enquanto o Supabase não estiver conectado, `config/site.ts` funciona como
 * fallback estático para estes dados.
 */

export interface StoreSettings {
  name: string;
  logoUrl: string | null;
  faviconUrl: string | null;
  whatsappNumber: string;
  phoneNumber: string;
  instagramUrl: string;
  address: string;
  googleMapsUrl: string;
  whatsappDefaultMessage: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string | null;
  imageUrl: string;
  videoUrl: string | null;
  primaryCtaLabel: string | null;
  primaryCtaHref: string | null;
  secondaryCtaLabel: string | null;
  secondaryCtaHref: string | null;
  isActive: boolean;
  displayOrder: number;
}

export type SiteSectionKey =
  | "hero"
  | "featured_products"
  | "why_us"
  | "categories"
  | "experience"
  | "testimonials"
  | "instagram"
  | "location"
  | "final_cta";

export interface SiteSection {
  key: SiteSectionKey;
  isActive: boolean;
  displayOrder: number;
  /** Conteúdo livre em JSON, específico de cada tipo de seção. */
  content: Record<string, unknown>;
}
