import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            color: "#c8a14b",
            fontSize: 20,
            fontWeight: 900,
            fontFamily: "Georgia, serif",
            letterSpacing: "-1px",
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size }
  );
}
