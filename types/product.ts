/**
 * Tipos relacionados a produtos.
 *
 * Estes tipos são a representação "de aplicação" (já normalizada) dos dados
 * que, futuramente, virão da tabela `products` do Supabase. Ver
 * documentation/DATABASE.md para o desenho completo do banco.
 */

import type { Category } from "./category";

/** Status do ciclo de vida comercial do produto. */
export type ProductStatus = "draft" | "available" | "reserved" | "sold" | "inactive";

/** Condição física do aparelho. */
export type ProductCondition = "new" | "semi_new" | "used";

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  position: number;
  isPrimary: boolean;
}

export interface ProductInstallment {
  count: number;
  value: number;
  /** Texto livre para condições específicas, ex.: "sem juros no cartão". */
  note?: string;
}

export interface Product {
  id: string;
  slug: string;
  /** Código interno exibido ao cliente (ex.: CXC-0158), usado na mensagem de WhatsApp. */
  code: string;

  name: string;
  brand: string;
  model: string;

  shortDescription: string;
  description: string;

  condition: ProductCondition;
  status: ProductStatus;

  color: string;
  storageGb: number | null;
  ramGb: number | null;
  /** Percentual de saúde da bateria, relevante para seminovos. */
  batteryHealth: number | null;
  warrantyText: string | null;
  includedAccessories: string[];

  /** Observações internas, nunca exibidas publicamente. */
  internalNotes?: string;

  priceCurrent: number;
  pricePrevious: number | null;
  installments: ProductInstallment | null;
  paymentNote: string | null;
  acceptsTradeIn: boolean;
  availableForDelivery: boolean;
  onSale: boolean;

  isActive: boolean;
  isFeatured: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  displayOrder: number;
  showPrice: boolean;
  showInCatalog: boolean;
  showOnHomepage: boolean;

  images: ProductImage[];
  categories: Category[];

  createdAt: string;
  updatedAt: string;
}

/** Formato reduzido usado em cards de listagem (catálogo, destaques, relacionados). */
export type ProductSummary = Pick<
  Product,
  | "id"
  | "slug"
  | "code"
  | "name"
  | "condition"
  | "status"
  | "color"
  | "storageGb"
  | "batteryHealth"
  | "priceCurrent"
  | "pricePrevious"
  | "installments"
  | "onSale"
  | "isFeatured"
  | "availableForDelivery"
> & {
  primaryImage: ProductImage | null;
};

export interface ProductFilters {
  categorySlug?: string;
  brand?: string;
  model?: string;
  condition?: ProductCondition;
  color?: string;
  minPrice?: number;
  maxPrice?: number;
  minBatteryHealth?: number;
  availableForDelivery?: boolean;
  onSale?: boolean;
  search?: string;
  sortBy?: "price_asc" | "price_desc" | "recent" | "featured";
}
