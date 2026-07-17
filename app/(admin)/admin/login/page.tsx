import type { Metadata } from "next";
import { Suspense } from "react";

import { Logo } from "@/components/layout/logo";
import { AdminLoginForm } from "@/components/admin/admin-login-form";

export const metadata: Metadata = {
  title: "Login administrativo",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="bg-background flex min-h-[calc(100vh-1px)] flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="border-border-subtle bg-surface-1 rounded-2xl border p-8">
          <h1 className="font-display text-foreground text-xl font-semibold">
            Painel administrativo
          </h1>
          <p className="text-muted mt-1 text-sm">
            Acesso restrito à equipe da Coxinha Cel.
          </p>
          <div className="mt-6">
            <Suspense fallback={null}>
              <AdminLoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
