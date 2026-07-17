"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="mb-8">Menu</SheetTitle>
        <nav className="flex flex-col gap-1" aria-label="Navegação principal">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-foreground hover:bg-surface-2 rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive && "bg-surface-2 text-accent-light",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-8">
          <Button variant="whatsapp" asChild>
            <a
              href={buildDefaultWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
          <p className="text-muted text-center text-xs">
            {siteConfig.address.street} — {siteConfig.address.city}/
            {siteConfig.address.state}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
