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
          background: "linear-gradient(135deg, #0b0a0a 0%, #131211 50%, #0b0a0a 100%)",
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
          <span style={{ fontSize: "64px", fontWeight: 800, color: "#ff5e3a" }}>T</span>
          <span style={{ fontSize: "64px", fontWeight: 800, color: "#ffffff" }}>M</span>
        </div>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#ece7df",
            margin: "0 0 12px 0",
            textAlign: "center",
          }}
        >
          Thomas Mebarki
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#ff5e3a",
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
