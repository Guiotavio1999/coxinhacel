import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Painel administrativo — Coxinha Cel",
    template: "%s | Painel Coxinha Cel",
  },
  robots: { index: false, follow: false },
};

/**
 * Root layout independente para o grupo `/admin`.
 *
 * O painel administrativo tem sua própria casca visual (sem o header,
 * rodapé e botão de WhatsApp do site público) — por isso este é um
 * segundo "root layout" do Next.js, seguindo o padrão oficial de múltiplos
 * root layouts por route group. Ele compartilha os mesmos tokens de design
 * (`globals.css`), mas não a navegação pública.
 */
export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="bg-background font-body text-foreground min-h-full">
        {children}
      </body>
    </html>
  );
}
