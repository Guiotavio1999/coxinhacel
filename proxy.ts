import { NextResponse, type NextRequest } from "next/server";
import { updateSupabaseSession } from "@/lib/supabase/middleware";

/**
 * Protege todas as rotas administrativas.
 *
 * Regra: qualquer rota sob /admin, exceto /admin/login, exige um usuário
 * Supabase autenticado. Sem sessão válida, redireciona para /admin/login
 * preservando a URL de destino em `redirectTo` para retorno após o login.
 *
 * O controle de permissões por papel (admin geral, editor de produtos etc.)
 * será refinado quando `profiles`/`admin_logs` forem implementados — este
 * proxy cobre apenas a camada de autenticação.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { response, user } = await updateSupabaseSession(request);

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/admin/login";

  if (isAdminRoute && !isLoginRoute && !user) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginRoute && user) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
