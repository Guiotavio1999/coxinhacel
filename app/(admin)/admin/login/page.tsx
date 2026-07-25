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
    <div className="bg-background relative flex min-h-[calc(100vh-1px)] flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
        style={{ boxShadow: "var(--shadow-glow)" }}
      />
      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo size="lg" />
        </div>
        <div className="border-border-subtle bg-surface-1 rounded-2xl border p-8 shadow-[var(--shadow-elevated)]">
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
