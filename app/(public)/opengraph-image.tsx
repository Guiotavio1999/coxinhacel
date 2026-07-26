import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { readLogoDataUri, OG_BACKGROUND } from "@/components/brand/logo-mark-og";

/**
 * Imagem de compartilhamento (Open Graph / Twitter Card) gerada via código,
 * usando a logo oficial (`public/logo.png`) embutida como data URI — ver
 * `readLogoDataUri` em `components/brand/logo-mark-og.tsx`.
 */
export const alt = siteConfig.seo.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoDataUri = await readLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ...OG_BACKGROUND,
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (satori) exige <img>, não next/image */}
        <img src={logoDataUri} width={220} height={220} alt="" />
        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            color: "#9299a6",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          iPhones novos e seminovos com procedência em Betim, MG
        </div>
      </div>
    ),
    { ...size },
  );
}
