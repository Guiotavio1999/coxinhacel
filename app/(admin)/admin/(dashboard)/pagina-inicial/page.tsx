import { LayoutTemplate } from "lucide-react";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

export default function AdminPaginaInicialPage() {
  return (
    <AdminPagePlaceholder
      icon={LayoutTemplate}
      title="Conteúdo da página inicial"
      description="Edição do hero, banners, produtos em destaque, avaliações selecionadas e ordem/ativação das seções será implementada neste espaço."
    />
  );
}
