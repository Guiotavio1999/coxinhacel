import { z } from "zod";

/**
 * Schema de validação do formulário de produto (painel administrativo).
 * Compartilhado entre criação e edição — campos que só existem em edição
 * (ex.: id) são adicionados via `.extend()` no ponto de uso.
 */
export const productFormSchema = z.object({
  name: z.string().min(3, "Informe o nome completo do aparelho."),
  slug: z
    .string()
    .min(3, "O slug precisa ter pelo menos 3 caracteres.")
    .regex(/^[a-z0-9-]+$/, "Use apenas letras minúsculas, números e hífens."),
  code: z.string().min(3, "Informe o código interno do produto."),
  brand: z.string().min(2, "Informe a marca."),
  model: z.string().min(1, "Informe o modelo."),

  categoryIds: z.array(z.string().uuid()).min(1, "Selecione ao menos uma categoria."),

  shortDescription: z
    .string()
    .min(10, "A descrição curta precisa ter pelo menos 10 caracteres."),
  description: z
    .string()
    .min(20, "A descrição completa precisa ter pelo menos 20 caracteres."),

  condition: z.enum(["new", "semi_new", "used"]),
  status: z.enum(["draft", "available", "reserved", "sold", "inactive"]),

  color: z.string().min(2, "Informe a cor."),
  storageGb: z.number().int().positive().nullable(),
  ramGb: z.number().int().positive().nullable(),
  batteryHealth: z.number().int().min(0).max(100).nullable(),
  warrantyText: z.string().nullable(),
  includedAccessories: z.array(z.string()).default([]),
  internalNotes: z.string().optional(),

  priceCurrent: z.number().positive("O preço precisa ser maior que zero."),
  pricePrevious: z.number().positive().nullable(),
  installmentCount: z.number().int().min(0).max(24),
  paymentNote: z.string().nullable(),
  acceptsTradeIn: z.boolean().default(false),
  availableForDelivery: z.boolean().default(true),
  onSale: z.boolean().default(false),

  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  isNewArrival: z.boolean().default(false),
  isBestSeller: z.boolean().default(false),
  displayOrder: z.number().int().default(0),
  showPrice: z.boolean().default(true),
  showInCatalog: z.boolean().default(true),
  showOnHomepage: z.boolean().default(false),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
