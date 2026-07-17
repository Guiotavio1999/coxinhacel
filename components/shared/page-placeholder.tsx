interface PagePlaceholderProps {
  eyebrow: string;
  title: string;
  description: string;
}

/**
 * Placeholder elegante para rotas públicas cujo conteúdo completo será
 * implementado em um tópico futuro (ver documentation/ARCHITECTURE.md).
 * Mantém a identidade visual do site mesmo em páginas ainda não finalizadas.
 */
export function PagePlaceholder({ eyebrow, title, description }: PagePlaceholderProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
        style={{ boxShadow: "var(--shadow-glow)" }}
      />
      <div className="container-narrow relative text-center">
        <p className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="text-muted mx-auto mt-5 max-w-lg text-balance">{description}</p>
      </div>
    </section>
  );
}
