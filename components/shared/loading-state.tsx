/**
 * Indicador de carregamento reutilizável.
 *
 * Não é mais registrado como `loading.tsx` no nível raiz de `app/(public)/`
 * — ver documentation/ARCHITECTURE.md, seção "Por que não há um
 * loading.tsx global", para o motivo (resumo: um Suspense boundary
 * ancestral força o Next.js a comprometer o status HTTP 200 antes de
 * `notFound()` rodar em `/produtos/[slug]`, quebrando o 404 real).
 *
 * Use este componente diretamente dentro de um `<Suspense fallback={...}>`
 * local, ou crie um `loading.tsx` específico por rota apenas em segmentos
 * que nunca chamam `notFound()`.
 */
export function LoadingState() {
  return (
    <div
      role="status"
      aria-label="Carregando"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4"
    >
      <div className="border-border-subtle border-t-accent h-10 w-10 animate-spin rounded-full border-2" />
      <p className="text-muted text-sm">Carregando…</p>
    </div>
  );
}
