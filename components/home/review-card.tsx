import { Star } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Review } from "@/types/review";

const SOURCE_LABEL: Record<Review["source"], string> = {
  google: "Google",
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  presencial: "Loja física",
  outro: "Avaliação",
};

interface ReviewCardProps {
  review: Review;
  className?: string;
}

/**
 * Card definitivo de avaliação. `Review` não tem campo de foto — em vez de
 * alterar o tipo/banco, o avatar é gerado a partir da inicial do nome
 * (mesma abordagem de "sem dados fictícios" do restante do projeto).
 */
export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <Card hoverable className={cn("flex h-full flex-col gap-4 p-6", className)}>
      <div className="flex items-center gap-3">
        <div className="bg-accent/15 text-accent-light font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-semibold">
          {review.authorName.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-foreground text-sm font-semibold">{review.authorName}</p>
          <p className="text-muted text-xs">
            {SOURCE_LABEL[review.source]} · {review.approximateDate}
          </p>
        </div>
      </div>

      <div className="flex gap-0.5" aria-label={`${review.rating} de 5 estrelas`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={cn(
              "h-4 w-4",
              index < review.rating
                ? "fill-accent-light text-accent-light"
                : "text-border-strong",
            )}
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="text-muted flex-1 text-sm leading-relaxed">{review.text}</p>
    </Card>
  );
}
