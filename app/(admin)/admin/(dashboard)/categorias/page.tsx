import { Plus, FolderTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

export default function AdminCategoriasPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted text-sm">
          Organize as categorias exibidas no catálogo e na página inicial.
        </p>
        <Button>
          <Plus className="h-4 w-4" />
          Nova categoria
        </Button>
      </div>
      <AdminPagePlaceholder
        icon={FolderTree}
        title="Nenhuma categoria cadastrada ainda"
        description="Cadastro, edição, ordenação e vínculo de produtos serão implementados neste espaço."
      />
    </div>
  );
}
