import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Star,
  Home,
  Settings,
  Users,
  BarChart3,
} from "lucide-react";

export interface AdminNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const adminNavItems: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Produtos", href: "/admin/produtos", icon: Package },
  { label: "Categorias", href: "/admin/categorias", icon: FolderTree },
  { label: "Avaliações", href: "/admin/avaliacoes", icon: Star },
  { label: "Página inicial", href: "/admin/pagina-inicial", icon: Home },
  { label: "Métricas", href: "/admin/metricas", icon: BarChart3 },
  { label: "Usuários", href: "/admin/usuarios", icon: Users },
  { label: "Configurações", href: "/admin/configuracoes", icon: Settings },
];
