import { BarChart3 } from "lucide-react";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

export default function AdminMetricasPage() {
  return (
    <AdminPagePlaceholder
      icon={BarChart3}
      title="Métricas"
      description="Visualizações por produto, cliques no WhatsApp e produtos mais procurados serão exibidos aqui, com base nas tabelas product_views e whatsapp_clicks."
    />
  );
}
