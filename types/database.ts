/**
 * Placeholder para os tipos gerados automaticamente pelo Supabase.
 *
 * Quando o banco de dados for criado (próxima etapa do projeto), este
 * arquivo deverá ser substituído pelo resultado de:
 *
 *   npx supabase gen types typescript --project-id <PROJECT_ID> > types/database.ts
 *
 * Por enquanto, expomos um tipo `Database` mínimo apenas para que
 * `lib/supabase/client.ts` e `lib/supabase/server.ts` já fiquem tipados
 * corretamente com o client genérico do Supabase, sem travar o build.
 */

export type Json =
  string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      product_status: "draft" | "available" | "reserved" | "sold" | "inactive";
      product_condition: "new" | "semi_new" | "used";
    };
  };
}

export type AdminRole =
  "admin_geral" | "editor_produtos" | "editor_conteudo" | "visualizador";

export interface AdminProfile {
  id: string;
  fullName: string;
  email: string;
  role: AdminRole;
  isActive: boolean;
}
