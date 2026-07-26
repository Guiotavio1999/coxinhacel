"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ReviewCard } from "./review-card";
import { Button } from "@/components/ui/button";
import type { Review } from "@/types/review";

interface ReviewsCarouselProps {
  reviews: Review[];
}

/**
 * Carrossel horizontal de avaliações (scroll-snap nativo — sem dependência
 * extra). Recebe `reviews` já filtradas/ordenadas pelo chamador
 * (`reviewsService.listFeatured()`, a ser conectado no tópico de banco).
 */
export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: "prev" | "next") {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-review-card]");
    const amount = (card?.offsetWidth ?? 320) + 16;
    track.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  }

  if (reviews.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            data-review-card
            className="w-[85%] shrink-0 snap-start sm:w-[380px]"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollByCard("prev")}
          aria-label="Avaliação anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollByCard("next")}
          aria-label="Próxima avaliação"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
