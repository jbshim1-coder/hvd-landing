import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#971b2f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            color: "#c8a14b",
            fontSize: 110,
            fontWeight: 900,
            fontFamily: "Georgia, serif",
            letterSpacing: "-4px",
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size }
  );
}
