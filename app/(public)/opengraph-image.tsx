import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

/**
 * Imagem de compartilhamento (Open Graph / Twitter Card) gerada via código.
 *
 * Evita depender de um arquivo estático (`og-image.png`) que ninguém
 * forneceu ainda — a imagem é gerada em build time a partir dos tokens de
 * design reais do projeto (fundo escuro + brilho azul elétrico), mantendo
 * a mesma identidade visual do site em vez de um placeholder genérico.
 * Quando a loja fornecer artes próprias, este arquivo pode ser substituído
 * por um `opengraph-image.png` estático no mesmo diretório.
 */
export const alt = siteConfig.seo.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050506",
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(46,124,246,0.35), rgba(5,5,6,0) 60%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 84,
          fontWeight: 700,
          color: "#f5f5f7",
          letterSpacing: -2,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "9999px",
            backgroundColor: "#2e7cf6",
            boxShadow: "0 0 40px 10px rgba(46,124,246,0.8)",
          }}
        />
        <span>
          Coxinha<span style={{ color: "#5aa0ff" }}>Cel</span>
        </span>
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 32,
          color: "#8e8e96",
          textAlign: "center",
          maxWidth: 820,
        }}
      >
        iPhones novos e seminovos com procedência em Betim, MG
      </div>
    </div>,
    { ...size },
  );
}
