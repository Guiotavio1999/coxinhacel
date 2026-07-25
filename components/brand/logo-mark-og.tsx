import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Elementos visuais da marca para rotas geradas via `next/og` `ImageResponse`
 * (favicon, apple-icon, opengraph-image, twitter-image), que rodam em
 * runtime Node.js e não têm acesso ao DOM/`next/image` — por isso a logo
 * real (`public/logo.png`) é lida do disco e embutida como data URI.
 */
export async function readLogoDataUri(): Promise<string> {
  const buffer = await readFile(join(process.cwd(), "public/logo.png"));
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export const OG_BACKGROUND = {
  backgroundColor: "#050506",
  backgroundImage:
    "radial-gradient(circle at 50% 35%, rgba(46,124,246,0.35), rgba(5,5,6,0) 60%)",
} as const;
