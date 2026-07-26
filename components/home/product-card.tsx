import Image from "next/image";
import Link from "next/link";
import { Smartphone, Truck } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { formatCurrency, formatInstallmentLabel } from "@/lib/utils/currency";
import { buildProductWhatsappLink } from "@/lib/utils/whatsapp";
import type { ProductCondition, ProductSummary } from "@/types/product";

const CONDITION_LABEL: Record<ProductCondition, string> = {
  new: "Novo",
  semi_new: "Seminovo",
  used: "Usado",
};

interface ProductCardProps {
  product: ProductSummary;
}

/**
 * Card definitivo de produto (vitrine/catálogo/destaques). Layout final
 * pronto para receber dados reais de `productsService` — ainda não é
 * conectado a nenhuma fonte de dados (ver `documentation/DATABASE.md`).
 */
export function ProductCard({ product }: ProductCardProps) {
  const productUrl = `${siteConfig.url}/produtos/${product.slug}`;
  const whatsappLink = buildProductWhatsappLink({
    name: product.name,
    code: product.code,
    price: product.priceCurrent,
    url: productUrl,
  });

  return (
    <Card hoverable className="group flex h-full flex-col overflow-hidden p-0">
      <Link
        href={`/produtos/${product.slug}`}
        className="bg-surface-2 relative block aspect-[4/5] w-full overflow-hidden"
      >
        {product.primaryImage ? (
          <Image
            src={product.primaryImage.url}
            alt={product.primaryImage.alt}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            className="ease-premium object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Smartphone className="text-muted h-10 w-10" aria-hidden="true" />
          </div>
        )}

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge>{CONDITION_LABEL[product.condition]}</Badge>
          {product.onSale && <Badge variant="warning">Oferta</Badge>}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <Link href={`/produtos/${product.slug}`}>
          <h3 className="font-display text-foreground line-clamp-2 text-base font-semibold">
            {product.name}
          </h3>
        </Link>

        {(product.storageGb || product.batteryHealth) && (
          <p className="text-muted text-xs">
            {[
              product.storageGb ? `${product.storageGb} GB` : null,
              product.batteryHealth ? `Bateria ${product.batteryHealth}%` : null,
              product.color,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-1">
          {product.onSale && product.pricePrevious ? (
            <span className="text-muted text-sm line-through">
              {formatCurrency(product.pricePrevious)}
            </span>
          ) : null}
          <span className="font-display text-foreground text-xl font-semibold">
            {formatCurrency(product.priceCurrent)}
          </span>
          {product.installments ? (
            <span className="text-muted text-xs">
              {formatInstallmentLabel(
                product.installments.count,
                product.installments.value,
              )}
            </span>
          ) : null}
        </div>

        {product.availableForDelivery && (
          <div className="text-muted flex items-center gap-1.5 text-xs">
            <Truck className="h-3.5 w-3.5" aria-hidden="true" />
            Disponível para entrega
          </div>
        )}

        <Button variant="whatsapp" size="sm" className="mt-1 w-full" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </Card>
  );
}
