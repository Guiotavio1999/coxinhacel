# Coxinha Cel

Plataforma institucional e comercial da **Coxinha Cel**, loja física de
celulares em Betim, MG, especializada em iPhones novos e seminovos,
aparelhos Android, iPads, Apple Watches e acessórios.

Este repositório contém a **fundação técnica** do projeto: arquitetura,
identidade visual, estrutura de rotas e integrações preparadas para as
próximas etapas (banco de dados, CRUD de produtos, autenticação
administrativa completa etc.). Ver `documentation/ARCHITECTURE.md` para
o detalhamento das decisões técnicas e `documentation/DATABASE.md` para
o desenho do banco de dados.

> Este projeto passou por uma auditoria completa (instalação, build,
> lint, typecheck, todas as 16 rotas testadas em servidor real). Ver
> "Auditoria e testes realizados" mais abaixo para o que foi
> efetivamente validado e como.

## Stack

Next.js 16 (App Router) · TypeScript estrito · Tailwind CSS v4 ·
shadcn/ui · Framer Motion · Supabase (Postgres + Auth + Storage) ·
React Hook Form + Zod · ESLint + Prettier.

## Pré-requisitos

- Node.js 20 ou superior
- npm 10 ou superior
- Uma conta e um projeto no [Supabase](https://supabase.com) (para as
  funcionalidades de autenticação administrativa — o site público
  funciona normalmente sem isso nesta primeira etapa)

## Instalação

```bash
npm install
```

## Variáveis de ambiente

Copie o arquivo de exemplo e preencha com os dados do seu projeto Supabase:

```bash
cp .env.example .env.local
```

Veja `.env.example` para a lista completa e a explicação de cada
variável. Em resumo:

| Variável                           | Obrigatória               | Descrição                                           |
| ---------------------------------- | ------------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`         | Para login administrativo | URL do projeto Supabase                             |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`    | Para login administrativo | Chave pública (anon)                                |
| `NEXT_PUBLIC_SUPABASE_PROJECT_REF` | Para imagens de produto   | Referência do projeto (subdomínio)                  |
| `SUPABASE_SERVICE_ROLE_KEY`        | Ainda não utilizada       | Chave de administrador — nunca expor no navegador   |
| `NEXT_PUBLIC_SITE_URL`             | Recomendada               | URL pública do site, usada em SEO/sitemap/canonical |

**Sem essas variáveis, o site público funciona normalmente.** O login em
`/admin/login` continua carregando; apenas ao tentar autenticar, o
formulário informa de forma controlada que o Supabase ainda não foi
configurado (sem quebrar a página — testado neste estado).

Sem `NEXT_PUBLIC_SITE_URL` definida, o site usa
`https://www.coxinhacel.com.br` como padrão em `config/site.ts`. Ajuste
essa variável antes de publicar em produção com o domínio real.

## Executando localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Scripts disponíveis

```bash
npm run dev            # ambiente de desenvolvimento
npm run build           # build de produção
npm run start            # servir o build de produção
npm run lint              # ESLint
npm run typecheck         # checagem de tipos (tsc --noEmit)
npm run format            # formata o projeto com Prettier
npm run format:check      # verifica formatação sem alterar arquivos
```

## Estrutura do projeto

Ver `documentation/ARCHITECTURE.md` para a árvore completa comentada.
Resumo rápido:

- `app/(public)/` — site público (home, produtos, sobre, avaliações,
  contato, políticas), com seu próprio root layout (header, rodapé,
  botão de WhatsApp).
- `app/(admin)/admin/` — painel administrativo, com root layout próprio
  (sem header/rodapé públicos) e protegido por `proxy.ts`.
- `components/` — organizados por domínio (`ui`, `layout`, `home`,
  `admin`, `shared`).
- `config/site.ts` — fonte única de dados comerciais da loja (telefone e
  WhatsApp mantidos como campos separados, de propósito).
- `lib/` — clientes Supabase, validações Zod, funções utilitárias.
- `services/` — camada de acesso a dados. Hoje retorna resultados vazios
  e tipados (nunca lança erro em runtime) — ver seção abaixo.
- `types/` — tipos de domínio compartilhados.
- `documentation/` — arquitetura e desenho do banco de dados.

## Autenticação administrativa

- Cliente Supabase de navegador (`lib/supabase/client.ts`) e de servidor
  (`lib/supabase/server.ts`), usando exclusivamente a chave pública
  (anon key).
- `proxy.ts` (raiz do projeto — convenção do Next.js 16, antigo
  `middleware.ts`) protege todas as rotas `/admin/*`, exceto
  `/admin/login`, redirecionando para o login com `redirectTo` quando
  não há sessão.
- Não existe cadastro público de administradores — contas são criadas
  manualmente no painel do Supabase (Auth).
- A `SUPABASE_SERVICE_ROLE_KEY` não é referenciada em nenhum lugar do
  código-fonte nesta etapa (confirmado por busca no repositório).

**Importante sobre o que foi testado**: o fluxo de proteção de rotas
(redirecionamento sem sessão, `/admin/login` acessível, retorno de
`redirectTo`) foi testado em um servidor de produção real. O fluxo de
autenticação bem-sucedida (login real com Supabase Auth) **não foi
testado**, pois exige um projeto Supabase real configurado, que não
existe neste ambiente — o código segue o padrão oficial de
`@supabase/ssr`, mas essa validação específica fica pendente para quando
houver um projeto Supabase real conectado.

## O que está funcional (testado)

- Todas as 16 rotas do briefing carregam corretamente em um servidor de
  produção real (`npm run build && npm run start`), com os status HTTP
  esperados — inclusive `/produtos/[slug]` retornando um `404` real para
  produtos inexistentes (verificado via `curl -I`, não apenas
  visualmente).
- Header, menu mobile (fecha ao navegar), rodapé e botão flutuante de
  WhatsApp, com o link/mensagem gerados por uma única função central
  (`lib/utils/whatsapp.ts`) — sem links `wa.me` manuais espalhados pelo
  código (confirmado por busca no repositório).
- Formulário de contato público (`components/shared/contact-form.tsx`),
  que monta a mensagem e abre o WhatsApp comercial.
- Proteção de `/admin/*` por `proxy.ts`, com redirecionamento testado em
  todas as 9 rotas administrativas.
- Painel administrativo navegável (sidebar + topbar responsivos, menu
  mobile fecha ao navegar), com todas as telas previstas como
  placeholders estruturados — nenhuma exibe dado simulado de produto,
  avaliação ou métrica.
- SEO: metadados por página, `alternates.canonical` em todas as páginas
  públicas, Open Graph e Twitter Card com imagem de compartilhamento
  **gerada dinamicamente por código** (`app/(public)/opengraph-image.tsx`,
  usando `next/og` — testada e confirmada como PNG 1200×630 válido, não
  um placeholder quebrado), `sitemap.xml` e `robots.txt` funcionais.
- `npm run build`, `npm run lint` e `npx tsc --noEmit` passam sem erros
  ou avisos.

## O que foi apenas preparado para os próximos passos

- **Banco de dados**: nenhuma tabela existe ainda no Supabase. O desenho
  completo está documentado em `documentation/DATABASE.md`, e os tipos
  TypeScript (`types/product.ts`, `category.ts`, `review.ts`, `store.ts`,
  `database.ts`) já refletem esse desenho.
- **CRUD de produtos, categorias e avaliações**: os schemas de validação
  Zod já existem (`lib/validations/`), mas os formulários administrativos
  são placeholders — a implementação depende do banco de dados.
- **`services/*.service.ts`**: as assinaturas dos métodos já estão
  definidas e retornam resultados vazios e tipados (`[]`/`null`), com um
  aviso apenas em desenvolvimento (`services/pending-integration.ts`).
  Nenhuma página chama esses serviços ainda — quando passarem a chamar,
  o comportamento já é seguro por padrão (não derruba a página).
- **Métricas** (`product_views`, `whatsapp_clicks`): estrutura de
  serviço criada (`services/metrics.service.ts`), sem gravação real
  ainda.
- **Upload e otimização de imagens**: `next.config.ts` já libera o
  domínio do Supabase Storage; o componente de upload em si ainda não
  existe.
- **Login administrativo**: implementado com Supabase Auth seguindo o
  padrão oficial, mas não testado com um projeto Supabase real (ver
  seção "Autenticação administrativa" acima).

## O que ainda não foi implementado

- Migrations e políticas de RLS do banco de dados.
- CRUD completo de produtos, categorias e avaliações.
- Gestão de conteúdo da página inicial (banners/seções) pelo painel.
- Controle de permissões por papel no painel administrativo.
- Registro real de métricas (`admin_logs`, `product_views`,
  `whatsapp_clicks`).

## Auditoria e testes realizados

Uma auditoria completa da fundação foi realizada antes de avançar para o
banco de dados. Resumo do que foi encontrado e corrigido:

1. **Dependência não utilizada removida**: `@supabase/supabase-js` estava
   instalada mas nunca importada diretamente (`@supabase/ssr` já cobre o
   necessário) — removida do `package.json`.
2. **Serviços pendentes corrigidos**: `services/*.service.ts` lançavam
   erro explícito; agora retornam resultado vazio e tipado por padrão,
   para que nenhuma página quebre ao passar a consumi-los.
3. **Bug real de SEO encontrado e corrigido**: um `loading.tsx` global em
   `app/(public)/` fazia `/produtos/[slug]` retornar `HTTP 200` em vez de
   `404` para produtos inexistentes (limitação documentada do streaming
   SSR do Next.js quando há um Suspense boundary ancestral). Testado
   antes e depois da correção — ver
   `documentation/ARCHITECTURE.md`, seção "Por que não há um
   `loading.tsx` global".
4. **SEO incompleto corrigido**: faltavam `alternates.canonical` em
   todas as páginas (adicionados e testados via `curl`) e a imagem Open
   Graph apontava para um arquivo estático que nunca existiu
   (substituída por uma imagem gerada dinamicamente via `next/og`,
   testada e confirmada como PNG válido).
5. **Terminologia atualizada**: `middleware.ts` renomeado para
   `proxy.ts`, conforme a convenção do Next.js 16 (identificado durante
   o build, que emite aviso de depreciação para o nome antigo).

Vulnerabilidade conhecida e aceita: `npm audit` reporta uma vulnerabilidade
moderada de `postcss` que é uma dependência **transitiva interna do
próprio Next.js** (usada nas ferramentas de build do framework, não em
código exposto ao usuário). A correção sugerida pelo `npm audit fix
--force` rebaixaria o Next.js para uma versão `9.x`, o que não é viável.
Sem ação necessária no momento — deve ser revisada quando uma nova versão
do Next.js atualizar essa dependência interna.

**Limitação de teste conhecida**: este ambiente não tem um navegador real
disponível para testes visuais pixel-a-pixel em breakpoints específicos
(320px, 375px, 390px, 768px, 1024px, 1440px). A responsividade foi
validada por revisão de código (classes Tailwind mobile-first, ausência
de larguras fixas fora de elementos decorativos já protegidos por
`overflow-hidden`) e pela inspeção do HTML renderizado, não por
captura de tela real em cada largura.

## Deploy

O projeto está pronto para ser versionado no GitHub e implantado na
Vercel:

1. Suba o repositório para o GitHub.
2. Importe o repositório na Vercel.
3. Configure as mesmas variáveis de ambiente do `.env.example` no painel
   da Vercel (Production e Preview) — especialmente `NEXT_PUBLIC_SITE_URL`
   com o domínio real, usado em canonical, sitemap e Open Graph.
4. Deploy automático a cada push na branch principal.
