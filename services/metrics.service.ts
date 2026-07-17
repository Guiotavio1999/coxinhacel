import { warnPendingIntegration } from "./pending-integration";

/**
 * Camada de serviço de métricas (visualizações de produto e cliques de
 * WhatsApp). Gravará eventos nas tabelas `product_views` e `whatsapp_clicks`
 * assim que o Supabase estiver conectado.
 *
 * Diferente dos demais serviços, estes métodos já eram "seguros por
 * padrão" (não lançavam erro), pois uma falha ao registrar métrica nunca
 * pode bloquear a navegação do usuário. Mantido assim, apenas com o aviso
 * de integração pendente centralizado.
 */
export const metricsService = {
  async recordProductView(_productId: string): Promise<void> {
    warnPendingIntegration("metricsService.recordProductView");
  },

  async recordWhatsappClick(_productId: string | null, _origin: string): Promise<void> {
    warnPendingIntegration("metricsService.recordWhatsappClick");
  },
};
