"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { buildWhatsappLink } from "@/lib/utils/whatsapp";

/**
 * Formulário de contato público.
 *
 * O briefing não prevê backend de contato na primeira versão (sem
 * checkout/backend próprio) — em vez de simular um envio que não existe,
 * o formulário monta a mensagem já preenchida e abre o WhatsApp comercial,
 * mantendo a conversão real onde o negócio já opera.
 */
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(values: ContactFormValues) {
    const message = [
      `Olá! Meu nome é ${values.name}.`,
      `Telefone para contato: ${values.phone}.`,
      "",
      values.message,
    ].join("\n");

    const link = buildWhatsappLink(message);
    window.open(link, "_blank", "noopener,noreferrer");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" autoComplete="name" {...register("name")} />
        {errors.name ? (
          <p className="text-danger text-xs">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefone (com DDD)</Label>
        <Input id="phone" autoComplete="tel" inputMode="tel" {...register("phone")} />
        {errors.phone ? (
          <p className="text-danger text-xs">{errors.phone.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          placeholder="Conte o que você procura ou tire sua dúvida"
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-danger text-xs">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" variant="whatsapp" className="w-full" disabled={isSubmitting}>
        Enviar pelo WhatsApp
      </Button>
    </form>
  );
}
