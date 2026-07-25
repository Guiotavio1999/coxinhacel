import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloatButton } from "@/components/layout/whatsapp-float-button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Space Grotesk (títulos) + Inter (texto corrido) via next/font/google —
 * baixadas uma vez em build time e auto-hospedadas (sem CDN externa em
 * runtime, sem layout shift). As variáveis CSS geradas alimentam
 * --font-display/--font-body em app/globals.css.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(spaceGrotesk.variable, inter.variable, "h-full antialiased")}
    >
      <body className="bg-background font-body text-foreground flex min-h-full flex-col">
        <a
          href="#conteudo-principal"
          className="focus:bg-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsappFloatButton />
      </body>
    </html>
  );
}
