import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/types/database";

/**
 * Client Supabase para uso em Server Components, Server Actions e Route
 * Handlers. Lê/escreve a sessão via cookies do Next.js.
 *
 * Assim como o client de navegador, usa apenas a anon key. A service role
 * key (quando necessária, ex.: jobs administrativos) deve viver em um
 * client separado, usado somente em Route Handlers server-only, e nunca
 * deve ser importada por código que também roda no navegador.
 */
export async function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Variáveis de ambiente do Supabase ausentes. Configure NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY (ver .env.example).",
    );
  }

  const cookieStore = await cookies();

  return createServerClient<Database>(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // `setAll` pode ser chamado a partir de um Server Component, onde
          // não é permitido escrever cookies. Isso é seguro de ignorar
          // quando existe um proxy renovando a sessão (ver proxy.ts).
        }
      },
    },
  });
}
