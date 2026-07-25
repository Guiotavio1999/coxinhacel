"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { mainNavItems } from "@/config/navigation";
import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "ease-premium sticky top-0 z-40 border-b backdrop-blur-md transition-[height,background-color,border-color] duration-[var(--duration-base)]",
        scrolled
          ? "border-border-subtle bg-background/90 h-[68px]"
          : "border-transparent bg-background/60 h-[76px]",
      )}
    >
      <div className="container-site flex h-full items-center justify-between">
        <Logo size={scrolled ? "sm" : "md"} />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative text-sm font-medium transition-colors duration-[var(--duration-fast)]",
                  isActive ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "bg-accent ease-premium absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-[var(--duration-base)] group-hover:scale-x-100",
                    isActive && "scale-x-100",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
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
