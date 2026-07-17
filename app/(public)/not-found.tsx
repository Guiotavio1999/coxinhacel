import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildDefaultWhatsappLink } from "@/lib/utils/whatsapp";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-display text-accent-light text-sm font-semibold tracking-[0.14em] uppercase">
        Erro 404
      </p>
      <h1 className="font-display text-foreground max-w-md text-3xl font-semibold text-balance">
        Não encontramos esta página.
      </h1>
      <p className="text-muted max-w-sm text-sm">
        O conteúdo pode ter sido movido ou o link pode estar incorreto. Volte para o
        catálogo ou fale com a gente pelo WhatsApp.
      </p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/produtos">Ver aparelhos</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href={buildDefaultWhatsappLink()} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
