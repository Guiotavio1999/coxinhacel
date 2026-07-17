import { Settings } from "lucide-react";
import { AdminPagePlaceholder } from "@/components/admin/admin-page-placeholder";

export default function AdminConfiguracoesPage() {
  return (
    <AdminPagePlaceholder
      icon={Settings}
      title="Configurações da loja"
      description="Nome, logo, WhatsApp, telefone, Instagram, endereço, horários e mensagem padrão de WhatsApp — hoje definidos em config/site.ts — poderão ser editados aqui assim que store_settings estiver implementado."
    />
  );
}
