import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminTopbar } from "@/components/admin/admin-topbar";

/**
 * Layout compartilhado por todas as rotas autenticadas do painel
 * (tudo em /admin exceto /admin/login). A proteção de acesso em si é
 * feita pelo proxy raiz (`proxy.ts`), não por este layout —
 * este componente cuida apenas da casca visual (sidebar + topbar).
 */
export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminTopbar />
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
