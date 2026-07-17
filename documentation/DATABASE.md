# Banco de dados — Coxinha Cel (planejamento)

Este documento descreve o desenho de banco de dados **previsto** para o
Supabase (Postgres). Nenhuma tabela foi criada ainda nesta primeira etapa
— a implementação real (migrations, RLS, seeds) é o próximo tópico do
projeto. O objetivo aqui é registrar as decisões para que os tipos em
`types/` e os serviços em `services/` já estejam alinhados com o desenho
final, evitando retrabalho.

## Tabelas previstas

| Tabela               | Responsabilidade                                                                                                                                                      |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `profiles`           | Perfis de administradores, vinculados a `auth.users`. Campos: `full_name`, `role` (`admin_geral`, `editor_produtos`, `editor_conteudo`, `visualizador`), `is_active`. |
| `categories`         | Categorias do catálogo (iPhones novos, seminovos, Android, Apple Watch, iPad, Acessórios...).                                                                         |
| `products`           | Produto. Ver detalhamento de status/condição abaixo.                                                                                                                  |
| `product_images`     | Imagens de um produto (`product_id`, `url`, `position`, `is_primary`, `alt`).                                                                                         |
| `product_categories` | Tabela de junção N:N entre `products` e `categories`.                                                                                                                 |
| `reviews`            | Avaliações/depoimentos cadastrados manualmente pelo administrador.                                                                                                    |
| `banners`            | Banners/hero configuráveis da página inicial.                                                                                                                         |
| `site_sections`      | Ativação, ordem e conteúdo (JSON) de cada seção da homepage.                                                                                                          |
| `store_settings`     | Configuração da loja editável em runtime (sobrescreve `config/site.ts`).                                                                                              |
| `product_views`      | Evento de visualização de produto (métricas).                                                                                                                         |
| `whatsapp_clicks`    | Evento de clique em botão de WhatsApp (métricas), com origem (`product`, `header`, `float_button`, `contact_form` etc.).                                              |
| `admin_logs`         | Auditoria de ações administrativas relevantes (quem alterou o quê e quando).                                                                                          |

## Enums

```sql
create type product_status as enum ('draft', 'available', 'reserved', 'sold', 'inactive');
create type product_condition as enum ('new', 'semi_new', 'used');
create type admin_role as enum ('admin_geral', 'editor_produtos', 'editor_conteudo', 'visualizador');
```

Estes mesmos valores já estão espelhados em `types/product.ts` e
`types/database.ts` no código TypeScript, para que a UI possa ser
construída sem esperar a criação real das tabelas.

## Regras de negócio já definidas

- Produtos com status `sold` **podem continuar visíveis** publicamente
  como prova social, mas sem botão de interesse/compra ativo.
- Produtos com status `inactive` **nunca** aparecem no site público.
- Produtos com status `reserved` devem ter identificação visual clara no
  catálogo (badge).
- Exclusão definitiva de produtos deve ser restrita (preferir
  `inactive` a `DELETE`); quando permitida, deve gerar registro em
  `admin_logs`.
- Alterações relevantes (preço, status, destaque) devem gerar entrada em
  `admin_logs`.

## Segurança prevista (Row Level Security)

- **Leitura pública**: apenas produtos com `status != 'inactive'` e
  `show_in_catalog = true` (ou `show_on_homepage = true`, conforme a
  consulta); apenas categorias, avaliações e banners com `is_active = true`.
- **Escrita**: restrita a usuários autenticados presentes em `profiles`
  com papel compatível com a ação (ex.: `visualizador` não deve poder
  escrever).
- **`admin_logs`**: somente inserção via trigger/Route Handler
  server-side; nunca editável diretamente pelo cliente.
- A **service role key** do Supabase nunca deve ser usada em código que
  roda no navegador — apenas em Route Handlers/Server Actions
  server-only, quando estritamente necessário (ex.: rotinas
  administrativas que precisem contornar RLS de forma controlada).

## Próximos passos (fora do escopo deste primeiro passo)

1. Criar as migrations reais das tabelas acima.
2. Gerar `types/database.ts` a partir do schema real
   (`supabase gen types typescript`).
3. Implementar as políticas de RLS.
4. Conectar `services/*.service.ts` ao Supabase, substituindo os stubs
   atuais.
5. Popular `categories` com as categorias iniciais do catálogo.
