import Link from "next/link";

import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { mainNavItems } from "@/config/navigation";
import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";

export function Header() {
  return (
    <header className="border-border-subtle/80 bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="whatsapp" size="sm" className="hidden md:inline-flex" asChild>
            <a
              href={buildDefaultWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
