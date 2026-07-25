"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { adminNavItems } from "@/config/admin-navigation";
import { cn } from "@/lib/utils";

export function AdminTopbar() {
  const pathname = usePathname();
  const currentItem = adminNavItems.find((item) =>
    item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href),
  );

  return (
    <header className="border-border-subtle bg-background flex h-16 items-center justify-between border-b px-4 lg:h-20 lg:px-8">
      <h1 className="font-display text-foreground text-lg font-semibold">
        {currentItem?.label ?? "Painel"}
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Abrir menu do painel"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="sr-only">Painel administrativo</SheetTitle>
          <div className="mb-8">
            <Logo />
          </div>
          <nav
            className="flex flex-col gap-1"
            aria-label="Navegação do painel administrativo"
          >
            {adminNavItems.map((item) => {
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-foreground hover:bg-surface-2 flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                      isActive && "bg-surface-2 text-accent-light",
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
