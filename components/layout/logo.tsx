import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZE_PX = {
  sm: 34,
  md: 42,
  lg: 60,
} as const;

/**
 * Logotipo oficial da Coxinha Cel (`public/logo.png`) — ponto único de uso
 * da marca em todo o site (header, rodapé, menu mobile, admin, login,
 * loading). A imagem já é o lockup completo (símbolo + "Coxinha Cell"), por
 * isso não há texto adicional aqui.
 */
export function Logo({ className, size = "md" }: LogoProps) {
  const px = SIZE_PX[size];

  return (
    <Link
      href="/"
      className={cn(
        "ease-premium inline-flex shrink-0 items-center transition-transform duration-[var(--duration-base)] hover:scale-105",
        className,
      )}
      aria-label="Coxinha Cel — página inicial"
    >
      <Image
        src="/logo.png"
        alt="Coxinha Cel"
        width={px}
        height={px}
        priority
        className="rounded-full"
      />
    </Link>
  );
}
