import { PackageSearch } from "lucide-react";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

/** Edição de produto existente — mesmo formulário de `produtos/novo`, pré-preenchido. */
export default async function AdminEditarProdutoPage({ params }: EditProductPageProps) {
  await params;
  return (
    <AdminPagePlaceholder
      icon={PackageSearch}
      title="Edição de produto"
      description="O formulário de edição, incluindo alteração de status (disponível, reservado, vendido, inativo) e reordenação de imagens, será implementado neste espaço."
    />
  );
}
