import type { Category } from "@/types/category";
import { warnPendingIntegration } from "./pending-integration";

/**
 * Camada de serviço de categorias. Ver nota de arquitetura em
 * `products.service.ts` — implementação real pendente da conexão Supabase.
 * Retorna lista vazia em vez de lançar erro (ver `pending-integration.ts`).
 */
export const categoriesService = {
  async listActive(): Promise<Category[]> {
    warnPendingIntegration("categoriesService.listActive");
    return [];
  },
};
