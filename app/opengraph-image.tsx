import { ImageResponse } from "next/og";

export const alt = "Neon Muse — AI Creators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          color: "#fff",
          background:
            "radial-gradient(circle at 12% 10%, rgba(121, 78, 255, 0.35), transparent 40%), radial-gradient(circle at 90% 20%, rgba(255, 65, 163, 0.25), transparent 40%), #07070a",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#c4b5fd" }}>Neon Muse</div>
        <div style={{ marginTop: 24, fontSize: 84, fontWeight: 600, letterSpacing: -3, lineHeight: 1 }}>
          Creators that feel surprisingly real.
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "rgba(255, 255, 255, 0.6)" }}>
          AI creators across tech, travel, fashion and wellness.
        </div>
      </div>
    ),
    size,
  );
}
