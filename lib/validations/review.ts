import { z } from "zod";

export const reviewFormSchema = z.object({
  authorName: z.string().min(2, "Informe o nome do cliente."),
  rating: z.number().int().min(1).max(5),
  text: z.string().min(10, "O depoimento precisa ter pelo menos 10 caracteres."),
  approximateDate: z.string().min(1, "Informe a data aproximada."),
  source: z.enum(["google", "instagram", "whatsapp", "presencial", "outro"]),
  isFeatured: z.boolean().default(false),
  isActive: z.boolean().default(true),
});

export type ReviewFormValues = z.infer<typeof reviewFormSchema>;
