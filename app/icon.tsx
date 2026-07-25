import { ImageResponse } from "next/og";

import { readLogoDataUri } from "@/components/brand/logo-mark-og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logoDataUri = await readLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050506",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (satori) exige <img>, não next/image */}
        <img src={logoDataUri} width={32} height={32} alt="" />
      </div>
    ),
    { ...size },
  );
}
