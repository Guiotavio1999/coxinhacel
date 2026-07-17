import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Logo textual da Coxinha Cel.
 *
 * A logo real da loja (aplicada no Instagram e nos materiais gráficos) é uma
 * marca em 3D com uma maçã e uma gota azul. Este componente reproduz a
 * mesma ideia de forma tipográfica e leve para a web — "Coxinha" em branco
 * e "Cel" destacado em azul elétrico, com um pequeno indicador circular
 * (o "pingo") que ecoa o anel de brilho da marca. Quando o arquivo de logo
 * (SVG/PNG) for fornecido pelo administrador, ele poderá substituir este
 * componente via `store_settings.logoUrl`.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group font-display text-foreground flex items-center gap-2 text-xl font-semibold tracking-tight",
        className,
      )}
      aria-label="Coxinha Cel — página inicial"
    >
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className="bg-accent absolute inset-0 rounded-full shadow-[0_0_12px_2px_rgba(46,124,246,0.7)] transition-transform duration-300 group-hover:scale-125" />
      </span>
      Coxinha<span className="text-accent-light">Cel</span>
    </Link>
  );
}
