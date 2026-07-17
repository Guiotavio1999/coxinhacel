import type { Product, ProductFilters, ProductSummary } from "@/types/product";
import { warnPendingIntegration } from "./pending-integration";

/**
 * Camada de serviço de produtos.
 *
 * Esta camada isola os componentes de página da fonte de dados. Hoje ela
 * não está conectada ao Supabase — isso será feito no próximo tópico do
 * projeto (banco de dados + CRUD). Cada método retorna um resultado vazio
 * e tipado, e nunca lança erro durante a renderização normal — ver
 * `services/pending-integration.ts`.
 *
 * Quando o Supabase for conectado, cada método passará a chamar
 * `createSupabaseServerClient()` (para Server Components) e fazer o mapeamento
 * das linhas de `products` + `product_images` + `product_categories` para
 * os tipos em `types/product.ts`.
 */
export const productsService = {
  async listFeatured(): Promise<ProductSummary[]> {
    warnPendingIntegration("productsService.listFeatured");
    return [];
  },

  async list(_filters: ProductFilters): Promise<ProductSummary[]> {
    warnPendingIntegration("productsService.list");
    return [];
  },

  async getBySlug(_slug: string): Promise<Product | null> {
    warnPendingIntegration("productsService.getBySlug");
    return null;
  },
};
