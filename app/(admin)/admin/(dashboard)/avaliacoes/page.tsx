import { Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

export default function AdminAvaliacoesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted text-sm">
          Cadastre e gerencie os depoimentos exibidos no site.
        </p>
        <Button>
          <Plus className="h-4 w-4" />
          Nova avaliação
        </Button>
      </div>
      <AdminPagePlaceholder
        icon={Star}
        title="Nenhuma avaliação cadastrada ainda"
        description="O formulário de cadastro (nome, nota, texto, data aproximada, fonte e destaque) será implementado neste espaço."
      />
    </div>
  );
}
