/**
 * Configuração central da Coxinha Cel.
 *
 * Este arquivo é a fonte única de verdade para dados comerciais e institucionais
 * usados em todo o site (header, rodapé, botão de WhatsApp, SEO, JSON-LD etc.).
 *
 * IMPORTANTE:
 * - Existem dois números distintos: o WhatsApp comercial (usado para conversão)
 *   e o telefone exibido na identidade visual da loja. Eles são mantidos
 *   separados de propósito — não assuma que são o mesmo número.
 * - Nenhum componente deve concatenar números de telefone manualmente.
 *   Use sempre as funções em `lib/utils/whatsapp.ts` e `lib/utils/phone.ts`.
 * - Em uma etapa futura, estes dados poderão ser sobrescritos pela tabela
 *   `store_settings` do Supabase (ver documentation/DATABASE.md). Este arquivo
 *   continuará servindo como fallback caso o banco ainda não esteja configurado.
 */

export const siteConfig = {
  name: "Coxinha Cel",
  legalName: "Coxinha Cel",
  shortDescription: "iPhones novos e seminovos com procedência em Betim.",
  description:
    "Loja física de celulares em Betim, MG, especializada em iPhones novos e seminovos, aparelhos Android, iPads, Apple Watches e acessórios. Procedência, preço justo, transparência e atendimento especializado antes e depois da compra.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.coxinhacel.com.br",

  contact: {
    /** Número usado nos links "wa.me" e nos botões de conversão do site. */
    whatsapp: {
      /** Formato E.164 sem símbolos, usado para montar o link wa.me. */
      number: "5531992244180",
      /** Formato de exibição, quando necessário mostrar o número em texto. */
      display: "(31) 99224-4180",
    },
    /** Telefone exibido na identidade visual da loja (diferente do WhatsApp). */
    phone: {
      number: "5531975987167",
      display: "(31) 97598-7167",
    },
    email: "contato@coxinhacel.com.br",
  },

  social: {
    instagram: {
      handle: "@coxinhacel",
      url: "https://www.instagram.com/coxinhacel/",
    },
  },

  address: {
    street: "Av. Amazonas, 181, sala 401",
    neighborhood: "Centro",
    reference: "Ao lado do SENAI",
    city: "Betim",
    state: "MG",
    zipCode: "32600-065",
    country: "BR",
    /** Preenchido quando a coordenada exata for definida (usado no mapa incorporado). */
    coordinates: {
      lat: null as number | null,
      lng: null as number | null,
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Amazonas+181+sala+401+Centro+Betim+MG",
  },

  /**
   * Horário de funcionamento. Índice 0 = domingo, seguindo o padrão de
   * `Date.getDay()`, para facilitar o cálculo de "loja aberta agora".
   */
  businessHours: [
    { day: 0, label: "Domingo", open: null, close: null }, // fechado
    { day: 1, label: "Segunda-feira", open: "08:00", close: "20:00" },
    { day: 2, label: "Terça-feira", open: "08:00", close: "20:00" },
    { day: 3, label: "Quarta-feira", open: "08:00", close: "20:00" },
    { day: 4, label: "Quinta-feira", open: "08:00", close: "20:00" },
    { day: 5, label: "Sexta-feira", open: "08:00", close: "20:00" },
    { day: 6, label: "Sábado", open: "08:00", close: "15:00" },
  ] as const,

  /** Mensagem padrão enviada quando o cliente clica no botão flutuante genérico. */
  whatsappDefaultMessage:
    "Olá! Vim pelo site da Coxinha Cel e gostaria de saber mais sobre os aparelhos disponíveis.",

  seo: {
    defaultTitle: "Coxinha Cel — iPhones novos e seminovos em Betim, MG",
    titleTemplate: "%s | Coxinha Cel",
    defaultDescription:
      "Aparelhos novos e seminovos selecionados, com preço justo, procedência e atendimento especializado em Betim, MG. Loja física e atendimento pelo WhatsApp.",
    keywords: [
      "iPhone Betim",
      "iPhone seminovo Betim",
      "loja de celulares Betim",
      "Coxinha Cel",
      "Apple Watch Betim",
      "iPad Betim",
    ],
  },

  theme: {
    accent: "#2E7CF6",
    accentLight: "#5AA0FF",
    background: "#050506",
  },
} as const;

export type SiteConfig = typeof siteConfig;
