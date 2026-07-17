import type { Metadata } from "next";
import { ShieldCheck, Handshake, MapPin, Headset } from "lucide-react";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/sobre" },
  title: "Sobre a Coxinha Cel",
  description:
    "Conheça a Coxinha Cel, loja física de celulares em Betim, MG, especializada em iPhones novos e seminovos com procedência e atendimento especializado.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Procedência e transparência",
    description:
      "Todo aparelho vendido passa por seleção criteriosa, com informações claras sobre estado, condição e histórico.",
  },
  {
    icon: Handshake,
    title: "Preço justo",
    description:
      "Preços competitivos praticados com honestidade, sem taxas escondidas ou promessas que não podem ser cumpridas.",
  },
  {
    icon: Headset,
    title: "Atendimento especializado",
    description:
      "Suporte real antes e depois da compra — incluindo ajuda na transferência de dados para o novo aparelho.",
  },
  {
    icon: MapPin,
    title: "Atuação em Betim e região",
    description:
      "Loja física no Centro de Betim, com atendimento presencial e entrega para toda a região.",
  },
] as const;

export default function SobrePage() {
  return (
    <div className="py-16 md:py-24">
      <section className="container-narrow text-center">
        <p className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase">
          Sobre a Coxinha Cel
        </p>
        <h1 className="font-display text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Compre com quem entende e acompanha você depois da venda.
        </h1>
        <p className="text-muted mx-auto mt-6 max-w-xl text-balance">
          A Coxinha Cel nasceu em Betim com um propósito simples: oferecer iPhones, iPads,
          Apple Watches, aparelhos Android e acessórios com procedência garantida, preço
          justo e um atendimento que não termina na hora da compra.
        </p>
      </section>

      <section className="container-site mt-20 grid gap-6 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="border-border-subtle bg-surface-1 rounded-2xl border p-8"
          >
            <div className="bg-accent/10 mb-4 flex h-11 w-11 items-center justify-center rounded-full">
              <Icon className="text-accent-light h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="font-display text-foreground text-lg font-semibold">
              {title}
            </h2>
            <p className="text-muted mt-2 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </section>

      <section className="container-narrow mt-20 text-center">
        <h2 className="font-display text-foreground text-2xl font-semibold">
          Nosso compromisso
        </h2>
        <p className="text-muted mx-auto mt-4 max-w-xl">
          Manter, em cada venda, os mesmos princípios que construíram a reputação da loja
          em {siteConfig.address.city}: transparência, qualidade nos aparelhos e um
          relacionamento de confiança com cada cliente — muitos deles, hoje, clientes
          recorrentes.
        </p>
      </section>
    </div>
  );
}
