import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

/**
 * Client Supabase para uso em Client Components ("use client").
 *
 * Usa exclusivamente a chave pública (anon key) — nunca a service role key.
 * Chame `createSupabaseBrowserClient()` dentro do componente/hook que precisa
 * dele; evite instanciar um singleton em nível de módulo para não vazar
 * estado entre requisições no lado do servidor durante o SSR.
 */
export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Variáveis de ambiente do Supabase ausentes. Configure NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY (ver .env.example).",
    );
  }

  return createBrowserClient<Database>(url, anonKey);
}
