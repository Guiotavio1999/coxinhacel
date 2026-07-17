# Arquitetura — Coxinha Cel

Este documento descreve as decisões técnicas tomadas na fundação do
projeto. Deve ser atualizado sempre que uma decisão relevante mudar.

## Stack

- **Next.js 16 (App Router)** + **React 19** + **TypeScript estrito**.
- **Tailwind CSS v4** (configuração CSS-first via `@theme`, sem
  `tailwind.config.ts` — ver `app/globals.css`).
- **shadcn/ui** (componentes em `components/ui`, estilo "new York",
  primitivas Radix UI). Ver nota sobre o CLI abaixo.
- **Framer Motion** para animações.
- **Supabase** (Postgres + Auth + Storage) como backend.
- **React Hook Form + Zod** para formulários e validação.
- **ESLint + Prettier** (com `prettier-plugin-tailwindcss` para ordenar
  classes automaticamente).

### Nota sobre o CLI do shadcn/ui

O ambiente em que este primeiro passo foi construído não tem acesso de
rede a `ui.shadcn.com`, então os componentes em `components/ui` foram
escritos manualmente seguindo fielmente os padrões oficiais do shadcn/ui
(mesmas primitivas Radix, mesma API, mesmas convenções de nomenclatura e
`cva`). O arquivo `components.json` já está configurado corretamente —
em um ambiente com acesso à internet, o CLI (`npx shadcn@latest add
<componente>`) funcionará normalmente para adicionar novos componentes
sem conflitar com os existentes.

### Tipografia

O projeto usa pilhas de fontes de sistema (`-apple-system`, `Segoe UI`
etc.) em vez de `next/font/google`, para não depender de download de
fontes externas em tempo de build. Isso também evita qualquer
dependência de rede em ambientes de CI restritos. O resultado visual em
dispositivos Apple é muito próximo de SF Pro. Se, no futuro, o cliente
fornecer uma fonte licenciada específica, ela pode ser adicionada via
`next/font/local` sem qualquer outra mudança estrutural.

## Estrutura de pastas

```
app/
  (public)/        Route group com layout raiz próprio (header, rodapé,
                    botão de WhatsApp). Contém todas as páginas públicas.
  (admin)/          Route group com layout raiz próprio (sem header/rodapé
                    públicos). Contém /admin/**.
    admin/
      login/         Fora do grupo (dashboard) — não tem sidebar.
      (dashboard)/   Sidebar + topbar compartilhados; protegido por
                     proxy.ts. Resolve para /admin, /admin/produtos etc.
                     (route groups não alteram a URL).
  robots.ts, sitemap.ts   Ficam na raiz de app/, fora dos dois grupos.
  globals.css        Tokens de design compartilhados pelos dois root layouts.

components/
  ui/                Primitivas shadcn/ui (Button, Input, Sheet etc.).
                     `Badge` e `Separator` já existem mas ainda não são
                     usados por nenhuma página — são peças do design
                     system preparadas para o CRUD de produtos (selos de
                     status "reservado"/"vendido") e formulários
                     administrativos futuros, não código morto.
  layout/            Header, Footer, Logo, MobileMenu, WhatsappFloatButton.
  home/               Seções da homepage.
  admin/             Sidebar, topbar, formulário de login, placeholders.
  products/          Reservado para os componentes de catálogo/produto
                     (tópico "Catálogo de produtos").
  shared/            Componentes reutilizados entre público e admin
                     (ex.: ContactForm, PagePlaceholder).

config/
  site.ts             Fonte única de verdade para dados comerciais (ver
                      abaixo). navigation.ts e admin-navigation.ts.

lib/
  supabase/           client.ts (navegador), server.ts (Server Components),
                     middleware.ts (helper usado por proxy.ts na raiz).
  validations/        Schemas Zod (produto, avaliação, contato, login).
  utils/              currency.ts, phone.ts, whatsapp.ts, slug.ts,
                     store-hours.ts. lib/utils.ts contém apenas `cn()`.

services/             Camada de acesso a dados (hoje com stubs que lançam
                     erro explícito — ver "Estado atual" abaixo).

types/                Tipos de domínio (product, category, review, store)
                     + database.ts (placeholder para os tipos gerados
                     pelo Supabase).

hooks/                Hooks client-side (ex.: use-store-status).

documentation/         Este arquivo e DATABASE.md.
```

## Por que dois "root layouts"?

O painel administrativo precisa de uma casca visual completamente
diferente do site público (sem header/rodapé/botão de WhatsApp
institucionais). Em vez de renderizar condicionalmente esses elementos
dentro de um único layout raiz, usamos o padrão oficial do Next.js de
[múltiplos root layouts via route groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts):
`app/(public)/layout.tsx` e `app/(admin)/layout.tsx` são dois layouts
raiz independentes (cada um com sua própria tag `<html>`/`<body>`), e o
Next.js decide qual usar com base na rota — sem afetar as URLs finais.

## Autenticação e proteção de `/admin`

- `proxy.ts` roda em todas as rotas sob `/admin` (ver `config.matcher`).
- Ele chama `updateSupabaseSession()` (`lib/supabase/middleware.ts`), que
  renova a sessão do Supabase a cada requisição.
- Se não houver usuário autenticado e a rota não for `/admin/login`,
  redireciona para o login preservando `redirectTo`.
- Não existe cadastro público de administradores — contas são criadas
  manualmente no painel do Supabase (Auth) pelo administrador geral.
- O controle fino de permissões por papel (`admin_geral`,
  `editor_produtos` etc., ver `types/database.ts`) ainda não está
  implementado; isso será resolvido junto da tabela `profiles`.

## Configuração central da loja

`config/site.ts` é a única fonte de dados comerciais (WhatsApp, telefone,
Instagram, endereço, horários, mensagem padrão) usada por todos os
componentes. **Nenhum componente deve concatenar ou hardcodar esses
dados diretamente.**

Dois números diferentes existem de propósito e nunca devem ser
confundidos:

- `siteConfig.contact.whatsapp` — usado em todos os links de conversão
  (`wa.me/...`).
- `siteConfig.contact.phone` — exibido apenas como informação de contato
  (identidade visual da loja).

Quando a tabela `store_settings` (Supabase) for implementada, ela deverá
sobrescrever estes valores em tempo de execução; `config/site.ts`
continuará funcionando como fallback estático caso o banco esteja
indisponível.

## Estado atual da camada de dados

Nenhuma tabela do Supabase foi criada ainda — isso é responsabilidade do
próximo tópico do projeto ("Banco de dados e Supabase"). Por isso:

- `services/*.service.ts` existem com as assinaturas finais dos métodos.
  **Desde a auditoria do primeiro tópico**, cada método retorna um
  resultado vazio e tipado (`[]` ou `null`) em vez de lançar erro —
  ver `services/pending-integration.ts`. A versão anterior lançava um
  `Error` explícito; isso foi revisto porque, assim que qualquer página
  passasse a chamar esses métodos, um erro em runtime derrubaria a
  página inteira. Um aviso (`console.warn`) ainda é emitido em
  desenvolvimento, para deixar claro que a integração está pendente sem
  arriscar a estabilidade da aplicação.
- As seções da homepage que dependeriam desses serviços (produtos em
  destaque, avaliações) não chamam os serviços ainda — exibem um estado
  vazio ("empty state") elegante e estruturalmente pronto para receber
  os dados assim que a integração for feita.
- `lib/supabase/client.ts` e `server.ts` lançam um erro claro caso as
  variáveis de ambiente não estejam configuradas, em vez de falhar
  silenciosamente. Isso é intencional e diferente dos `services/*`: esses
  clientes só são instanciados dentro de fluxos que já pressupõem
  Supabase configurado (login administrativo), nunca durante a
  renderização de uma página pública.

## Acessibilidade

- Skip link ("Pular para o conteúdo principal") no layout público.
- Foco visível consistente (`:focus-visible`) definido globalmente.
- `prefers-reduced-motion` respeitado globalmente em `globals.css`.
- Formulários usam `<Label htmlFor>` associado a cada campo.
- Ícones puramente decorativos usam `aria-hidden="true"`; ícones com
  função (ex.: botão de menu) têm `aria-label`.

## Por que não há um `loading.tsx` global

Durante a auditoria do primeiro tópico, um `app/(public)/loading.tsx`
global (cobrindo toda a árvore de rotas públicas, incluindo
`/produtos/[slug]`) foi testado e **causava um bug real**: `curl -I` em
`/produtos/algum-slug-inexistente` retornava `HTTP 200` em vez de `404`,
mesmo a página chamando `notFound()`.

Causa raiz (confirmada e documentada no próprio guia de streaming do
Next.js — `node_modules/next/dist/docs/01-app/02-guides/streaming.md`,
seção "Status codes"): quando existe um Suspense boundary ancestral
(todo `loading.tsx` cria um implicitamente), o Next.js precisa começar a
transmitir a resposta — e portanto já comprometer o cabeçalho HTTP como
`200 OK` — antes de saber se a página vai chamar `notFound()`. O status
real não pode mais ser alterado depois disso; o Next apenas injeta
`<meta name="robots" content="noindex">` como mitigação.

Testado empiricamente nos dois cenários (build + `next start` reais):

| Cenário                               | `GET /produtos/slug-inexistente` |
| ------------------------------------- | -------------------------------- |
| Com `app/(public)/loading.tsx` global | `200` (com `noindex`)            |
| Sem `loading.tsx` global              | `404` correto                    |

Decisão: **remover o `loading.tsx` global** e manter o indicador visual
como um componente comum (`components/shared/loading-state.tsx`) para
uso futuro. Hoje nenhuma página faz busca de dados assíncrona real
(nenhum `service` é chamado ainda), então um estado de loading global
não tem função prática neste momento — e o custo (quebrar o 404 real de
produto) supera o benefício.

Quando o próximo tópico conectar `productsService` ao Supabase:

- `/produtos` (listagem) pode receber um `loading.tsx` próprio com
  segurança, pois essa página nunca chama `notFound()`.
- `/produtos/[slug]` **não deve** receber um `loading.tsx` de segmento.
  Em vez disso, deve seguir o padrão recomendado pelo Next.js: fazer a
  checagem de existência do produto de forma síncrona/bloqueante (fora
  de qualquer `<Suspense>`) e chamar `notFound()` antes de qualquer
  `<Suspense>` interno — reservando `<Suspense>` apenas para blocos
  secundários mais lentos (ex.: produtos relacionados).

`error.tsx` e `not-found.tsx` (globais, em `app/(public)/`) não são
afetados por essa limitação — eles são error boundaries reais, não
fallbacks de Suspense, e continuam funcionando normalmente.

## Performance

- Server Components por padrão; `"use client"` só em componentes com
  interatividade real (menu mobile, formulários, sidebar do admin,
  botão flutuante).
- Nenhuma fonte externa é baixada em build.
- `next/image` será usado para imagens de produto assim que o Storage
  do Supabase estiver configurado (`next.config.ts` já prevê o
  `remotePattern` correspondente).
