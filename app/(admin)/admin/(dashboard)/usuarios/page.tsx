import { Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

export default function AdminUsuariosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted text-sm">
          Gerencie quem tem acesso ao painel administrativo.
        </p>
        <Button>
          <Plus className="h-4 w-4" />
          Convidar usuário
        </Button>
      </div>
      <AdminPagePlaceholder
        icon={Users}
        title="Usuários administrativos"
        description="Gestão de papéis (administrador geral, editor de produtos, editor de conteúdo, visualizador) será implementada nesta etapa futura do projeto."
      />
    </div>
  );
}
