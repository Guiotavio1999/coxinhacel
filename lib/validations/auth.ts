import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Informe um e-mail válido."),
  password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres."),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
