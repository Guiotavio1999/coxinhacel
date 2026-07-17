import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/politica-de-privacidade" },
  title: "Política de Privacidade",
  description: "Como a Coxinha Cel coleta, usa e protege seus dados pessoais.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="container-narrow py-16 md:py-24">
      <p className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase">
        Legal
      </p>
      <h1 className="font-display text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
        Política de Privacidade
      </h1>
      <p className="text-muted mt-2 text-sm">Última atualização: julho de 2026.</p>

      <div className="prose-coxinha text-muted mt-10 space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            1. Quem somos
          </h2>
          <p className="mt-3">
            A {siteConfig.legalName} é uma loja física de celulares localizada em{" "}
            {siteConfig.address.street}, {siteConfig.address.city}/
            {siteConfig.address.state}. Este site tem finalidade institucional e
            comercial, apresentando produtos e permitindo contato direto com nossa equipe
            pelo WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            2. Quais dados coletamos
          </h2>
          <p className="mt-3">
            Quando você utiliza o formulário de contato do site, coletamos o nome,
            telefone e a mensagem informados, exclusivamente para possibilitar o
            atendimento pelo WhatsApp. Também podemos coletar dados de navegação de forma
            agregada e anônima (como páginas visitadas e cliques no botão de WhatsApp),
            com o objetivo de entender quais produtos geram mais interesse.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            3. Como usamos seus dados
          </h2>
          <p className="mt-3">
            Os dados de contato são usados apenas para responder à sua solicitação. Não
            vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para
            fins de marketing de terceiros.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            4. Cookies e métricas
          </h2>
          <p className="mt-3">
            O site pode utilizar cookies e ferramentas de análise para medir visualizações
            de produtos e cliques no botão de WhatsApp, exclusivamente para fins internos
            de gestão comercial.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            5. Seus direitos
          </h2>
          <p className="mt-3">
            Você pode solicitar, a qualquer momento, a exclusão dos dados informados no
            formulário de contato, entrando em contato pelo WhatsApp comercial ou pelo
            e-mail {siteConfig.contact.email}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            6. Contato
          </h2>
          <p className="mt-3">
            Dúvidas sobre esta política podem ser enviadas para {siteConfig.contact.email}{" "}
            ou pelo WhatsApp comercial da loja.
          </p>
        </section>
      </div>
    </div>
  );
}
