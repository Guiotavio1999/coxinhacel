import type { LucideIcon } from "lucide-react";

interface AdminPagePlaceholderProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}

/**
 * Placeholder padrão para telas administrativas cujo CRUD completo será
 * implementado nos próximos tópicos do projeto (ver documentation/
 * ARCHITECTURE.md). Mantém a experiência do painel consistente mesmo antes
 * da funcionalidade estar pronta, em vez de deixar uma página em branco.
 */
export function AdminPagePlaceholder({
  icon: Icon,
  title,
  description,
  action,
}: AdminPagePlaceholderProps) {
  return (
    <div className="border-border-subtle bg-surface-1/50 flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-20 text-center">
      <Icon className="text-muted h-8 w-8" aria-hidden="true" />
      <h2 className="font-display text-foreground mt-4 text-lg font-semibold">{title}</h2>
      <p className="text-muted mt-2 max-w-sm text-sm">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
