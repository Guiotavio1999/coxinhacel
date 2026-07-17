import type { NextConfig } from "next";

const supabaseProjectRef = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Habilita otimização de imagens hospedadas no Supabase Storage.
      // NEXT_PUBLIC_SUPABASE_PROJECT_REF deve ser definido no .env (ver .env.example).
      ...(supabaseProjectRef
        ? [
            {
              protocol: "https" as const,
              hostname: `${supabaseProjectRef}.supabase.co`,
              pathname: "/storage/v1/object/public/**",
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;
