import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  phone: z.string().min(10, "Informe um telefone válido com DDD."),
  message: z.string().min(10, "Escreva uma mensagem com pelo menos 10 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
