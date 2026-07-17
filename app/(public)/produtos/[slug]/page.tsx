import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Página individual de produto.
 *
 * Preparada para consumir `productsService.getBySlug(slug)` assim que o
 * Supabase estiver conectado. A galeria de imagens, mensagem automática de
 * WhatsApp (`buildProductWhatsappLink`), produtos relacionados e os dados
 * estruturados (JSON-LD) de produto serão implementados no tópico
 * "Página do produto".
 *
 * Até lá, qualquer slug retorna 404 propositalmente — não existe fonte de
 * dados real para simular um produto sem inventar informações comerciais.
 */
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Produto — ${slug}`,
    alternates: { canonical: `/produtos/${slug}` },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  await params;
  notFound();
}
