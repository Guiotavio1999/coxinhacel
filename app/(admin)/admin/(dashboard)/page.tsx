import { Package, Star, MessageCircle, Eye } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const metrics = [
  { label: "Produtos ativos", value: "—", icon: Package },
  { label: "Produtos em destaque", value: "—", icon: Star },
  { label: "Visualizações (30 dias)", value: "—", icon: Eye },
  { label: "Cliques no WhatsApp (30 dias)", value: "—", icon: MessageCircle },
] as const;

/**
 * Dashboard administrativo — visão geral da operação.
 *
 * Os cartões de indicadores estão estruturados e prontos para receber
 * dados reais de `metricsService` e `productsService` assim que o Supabase
 * estiver conectado. Por ora exibem "—" em vez de números fictícios.
 */
export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted text-sm font-medium">{label}</CardTitle>
              <Icon className="text-accent-light h-4 w-4" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <p className="font-display text-foreground text-3xl font-semibold">
                {value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Últimos produtos cadastrados</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted text-sm">
            Assim que produtos forem cadastrados, os mais recentes aparecerão aqui.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
