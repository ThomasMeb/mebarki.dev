import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Thomas Mebarki — ML Engineer & Entrepreneur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0a0b 0%, #111113 50%, #0a0a0b 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "64px", fontWeight: 800, color: "#00d4aa" }}>T</span>
          <span style={{ fontSize: "64px", fontWeight: 800, color: "#ffffff" }}>M</span>
        </div>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#e5e5e5",
            margin: "0 0 12px 0",
            textAlign: "center",
          }}
        >
          Thomas Mebarki
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#00d4aa",
            margin: "0 0 32px 0",
          }}
        >
          ML Engineer & Entrepreneur
        </p>
        <div
          style={{
            display: "flex",
            gap: "32px",
            color: "#888",
            fontSize: "20px",
          }}
        >
          <span>Machine Learning</span>
          <span style={{ color: "#333" }}>|</span>
          <span>NLP</span>
          <span style={{ color: "#333" }}>|</span>
          <span>Computer Vision</span>
          <span style={{ color: "#333" }}>|</span>
          <span>SaaS</span>
        </div>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginTop: "40px",
          }}
        >
          mebarki.dev
        </p>
      </div>
    ),
    { ...size }
  );
}
