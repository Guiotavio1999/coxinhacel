"use client";

import { useEffect, useState } from "react";
import { getStoreStatusLabel, isStoreOpenNow } from "@/lib/utils/store-hours";

/**
 * Hook client-side para exibir "Aberto agora" / "Fechado agora" de forma
 * atualizada, sem depender do horário de renderização no servidor (que
 * poderia ficar desatualizado em páginas cacheadas).
 */
export function useStoreStatus() {
  const [status, setStatus] = useState<{ label: string; isOpen: boolean } | null>(null);

  useEffect(() => {
    function update() {
      const now = new Date();
      setStatus({ label: getStoreStatusLabel(now), isOpen: isStoreOpenNow(now) });
    }

    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
