import { ShieldCheck, FileCheck, RefreshCcw, MapPin } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Procedência verificada" },
  { icon: FileCheck, label: "Garantia informada" },
  { icon: RefreshCcw, label: "Transferência de dados" },
  { icon: MapPin, label: "Atendimento em Betim" },
] as const;

/**
 * Faixa de confiança — continuação visual do hero, não uma seção de cards.
 * Textos neutros/genéricos: nenhuma certificação ou garantia específica é
 * declarada (nada disso está confirmado comercialmente nesta fase).
 */
export function TrustBand() {
  return (
    <div className="border-border-subtle border-y">
      <div className="container-site">
        {/* Técnica gap-px + bg: cria divisores de 1px corretos em grid 2D (divide-x/y do Tailwind não são cientes de grid multi-linha). */}
        <div className="bg-border-subtle grid grid-cols-2 gap-px sm:grid-cols-4">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-background-secondary text-muted flex items-center justify-center gap-2.5 px-4 py-5 text-center text-sm sm:justify-start sm:text-left"
            >
              <Icon className="text-accent-light h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-foreground/90 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
