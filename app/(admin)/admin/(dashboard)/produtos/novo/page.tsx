import { PackagePlus } from "lucide-react";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

/**
 * Formulário de cadastro de produto. O schema de validação já existe em
 * `lib/validations/product.ts` — este formulário será conectado a ele e
 * ao upload de imagens (Supabase Storage) no tópico "Cadastro de produtos".
 */
export default function AdminNovoProdutoPage() {
  return (
    <AdminPagePlaceholder
      icon={PackagePlus}
      title="Cadastro de produto"
      description="O formulário completo de cadastro (dados principais, características, preço, parcelamento, exibição e upload de imagens) será implementado neste espaço."
    />
  );
}
