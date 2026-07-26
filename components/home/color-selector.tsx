"use client";

import { cn } from "@/lib/utils";
import type { ProductColorOption } from "@/lib/iphone-17-colors";

interface ColorSelectorProps {
  options: ProductColorOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
}

/**
 * Seletor visual de cores do iPhone 17 — demonstração temporária (ver
 * lib/iphone-17-colors.ts). Não representa estoque ou disponibilidade
 * real; só varia a atmosfera de luz do `ProductVisual` ao lado.
 */
export function ColorSelector({ options, selectedId, onSelect, className }: ColorSelectorProps) {
  const selected = options.find((option) => option.id === selectedId) ?? options[0];

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <div className="flex items-center gap-3" role="group" aria-label="Cor do aparelho (ilustrativo)">
        {options.map((option) => {
          const isSelected = option.id === selectedId;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isSelected}
              aria-label={option.name}
              onClick={() => onSelect(option.id)}
              className={cn(
                "ease-premium h-8 w-8 shrink-0 rounded-full ring-offset-2 ring-offset-background transition-[transform,box-shadow] duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isSelected
                  ? "ring-2 ring-white/70 ring-offset-2"
                  : "hover:scale-110 hover:ring-2 hover:ring-white/30",
              )}
              style={{ backgroundColor: option.hex }}
            />
          );
        })}
      </div>
      <p className="text-muted text-sm">
        Cor: <span className="text-foreground font-medium">{selected?.name}</span>{" "}
        <span className="text-muted/70">(ilustrativo)</span>
      </p>
    </div>
  );
}
