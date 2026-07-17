import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Sitemap estático com as rotas institucionais.
 *
 * As URLs de produtos (`/produtos/[slug]`) serão adicionadas dinamicamente
 * a partir de `productsService.list()` assim que o catálogo estiver
 * conectado ao Supabase.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/produtos",
    "/sobre",
    "/avaliacoes",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
