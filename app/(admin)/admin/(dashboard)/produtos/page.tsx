import Link from "next/link";
import { Package, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

/**
 * Listagem administrativa de produtos. Preparada para receber a tabela
 * completa (busca, filtros por status, ações de editar/duplicar/arquivar)
 * no tópico "Cadastro de produtos", quando o CRUD for implementado.
 */
export default function AdminProdutosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted text-sm">Gerencie o catálogo de aparelhos da loja.</p>
        <Button asChild>
          <Link href="/admin/produtos/novo">
            <Plus className="h-4 w-4" />
            Novo produto
          </Link>
        </Button>
      </div>

      <AdminPagePlaceholder
        icon={Package}
        title="Nenhum produto cadastrado ainda"
        description="A listagem completa, com busca, filtros por status e ações em lote, será exibida aqui assim que o banco de dados estiver conectado."
      />
    </div>
  );
}
