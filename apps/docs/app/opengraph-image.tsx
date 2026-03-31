import { ImageResponse } from "next/og";

export const alt = "CortexUI social preview showing UI that speaks to humans and machines.";
export const size = {
  width: 1290,
  height: 970
};
export const contentType = "image/png";

export default function OpenGraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 100% 100%, rgba(16, 36, 74, 0.45) 0%, rgba(6, 8, 31, 0) 28%), linear-gradient(135deg, #05071c 0%, #05071c 58%, #07112a 100%)",
          color: "#f8f6f2",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "flex-start",
          padding: "42px 56px 54px",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "rgba(61, 17, 24, 0.88)",
            borderRadius: 999,
            color: "#f78a70",
            display: "flex",
            fontSize: 44,
            fontWeight: 500,
            gap: 24,
            letterSpacing: "-0.02em",
            padding: "22px 42px"
          }}
        >
          <span
            style={{
              background: "#ff6139",
              borderRadius: 999,
              display: "flex",
              height: 26,
              width: 26
            }}
          />
          <span style={{ display: "flex" }}>AI-native design system</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 168,
            fontWeight: 700,
            letterSpacing: "-0.08em",
            lineHeight: 0.92,
            marginTop: 112,
            textAlign: "center"
          }}
        >
          <span style={{ display: "flex" }}>UI that speaks</span>
          <span style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>to</span>
          <span
            style={{
              color: "#ff4b22",
              display: "flex",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            humans and
          </span>
          <span
            style={{
              color: "#ff4b22",
              display: "flex",
              justifyContent: "center",
              marginTop: 14
            }}
          >
            machines
          </span>
        </div>
      </div>
    ),
    size
  );
}
