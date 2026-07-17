import { ShieldCheck, Truck, Gift, Headset, Wallet, RefreshCcw } from "lucide-react";
import { SectionHeading } from "./section-heading";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Procedência garantida",
    description: "Aparelhos selecionados e revisados antes de chegar até você.",
  },
  {
    icon: Wallet,
    title: "Preço justo",
    description: "Preços competitivos, sem taxas escondidas ou surpresas.",
  },
  {
    icon: Headset,
    title: "Atendimento especializado",
    description: "Suporte real, antes e depois da compra, direto com nossa equipe.",
  },
  {
    icon: RefreshCcw,
    title: "Transferência de dados",
    description: "Ajudamos você a migrar seus dados para o novo aparelho.",
  },
  {
    icon: Truck,
    title: "Entrega",
    description: "Receba seu aparelho com segurança, sem sair de casa.",
  },
  {
    icon: Gift,
    title: "Brindes em algumas compras",
    description: "Condições especiais para clientes recorrentes e novos clientes.",
  },
] as const;

export function WhyUs() {
  return (
    <section className="border-border-subtle border-t py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Por que a Coxinha Cel"
          title="Tecnologia, confiança e preço justo"
          description="Cada detalhe da experiência de compra foi pensado para que você tenha segurança do primeiro contato até o pós-venda."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border-border-subtle bg-surface-1 hover:border-accent/40 rounded-2xl border p-6 transition-colors"
            >
              <div className="bg-accent/10 mb-4 flex h-11 w-11 items-center justify-center rounded-full">
                <Icon className="text-accent-light h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-foreground text-base font-semibold">
                {title}
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
