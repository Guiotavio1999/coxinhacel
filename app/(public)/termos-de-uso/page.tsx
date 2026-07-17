import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/termos-de-uso" },
  title: "Termos de Uso",
  description: "Condições de uso do site da Coxinha Cel.",
};

export default function TermosDeUsoPage() {
  return (
    <div className="container-narrow py-16 md:py-24">
      <p className="text-accent-light mb-3 text-xs font-semibold tracking-[0.14em] uppercase">
        Legal
      </p>
      <h1 className="font-display text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
        Termos de Uso
      </h1>
      <p className="text-muted mt-2 text-sm">Última atualização: julho de 2026.</p>

      <div className="text-muted mt-10 space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            1. Objetivo do site
          </h2>
          <p className="mt-3">
            Este site tem finalidade institucional e comercial, apresentando os produtos
            disponíveis na {siteConfig.legalName} e viabilizando o contato direto com
            nossa equipe pelo WhatsApp. Nesta versão, o site não realiza vendas ou
            pagamentos online — toda negociação é concluída diretamente com a equipe da
            loja.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            2. Disponibilidade e preços
          </h2>
          <p className="mt-3">
            Preços, condições de pagamento e disponibilidade dos produtos exibidos no site
            podem mudar sem aviso prévio, e devem sempre ser confirmados diretamente com a
            equipe da loja antes da compra.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            3. Uso adequado do site
          </h2>
          <p className="mt-3">
            Ao utilizar este site, você concorda em não tentar acessar áreas restritas sem
            autorização, não utilizar o site para fins ilícitos e não reproduzir seu
            conteúdo sem permissão prévia da {siteConfig.legalName}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            4. Propriedade intelectual
          </h2>
          <p className="mt-3">
            A marca, o logotipo e os textos originais deste site pertencem à{" "}
            {siteConfig.legalName} e não podem ser utilizados sem autorização.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            5. Alterações
          </h2>
          <p className="mt-3">
            Estes termos podem ser atualizados periodicamente. Recomendamos revisar esta
            página com regularidade.
          </p>
        </section>

        <section>
          <h2 className="font-display text-foreground text-lg font-semibold">
            6. Contato
          </h2>
          <p className="mt-3">
            Dúvidas sobre estes termos podem ser enviadas para {siteConfig.contact.email}{" "}
            ou pelo WhatsApp comercial da loja.
          </p>
        </section>
      </div>
    </div>
  );
}
