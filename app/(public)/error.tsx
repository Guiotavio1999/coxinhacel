"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Em produção, este é o ponto de integração com uma ferramenta de
    // monitoramento de erros (ex.: Sentry), a ser definida em etapa futura.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-foreground text-2xl font-semibold">
        Algo deu errado.
      </h1>
      <p className="text-muted max-w-sm text-sm">
        Não foi possível carregar esta página. Tente novamente ou volte para a página
        inicial.
      </p>
      <div className="mt-2 flex gap-3">
        <Button onClick={reset}>Tentar novamente</Button>
        <Button variant="outline" asChild>
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </div>
  );
}
