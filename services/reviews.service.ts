import type { Review } from "@/types/review";
import { warnPendingIntegration } from "./pending-integration";

/**
 * Camada de serviço de avaliações. Ver nota de arquitetura em
 * `products.service.ts` — implementação real pendente da conexão Supabase.
 * Retorna lista vazia em vez de lançar erro (ver `pending-integration.ts`).
 */
export const reviewsService = {
  async listFeatured(): Promise<Review[]> {
    warnPendingIntegration("reviewsService.listFeatured");
    return [];
  },

  async listAll(): Promise<Review[]> {
    warnPendingIntegration("reviewsService.listAll");
    return [];
  },
};
