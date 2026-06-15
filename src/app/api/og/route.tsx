import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Kush Agrawal";
  const description = searchParams.get("description") || "Developer, Analyst, Writer";
  const type = searchParams.get("type") || "page";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#FEFEFE",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#828475",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              K
            </div>
            <span style={{ fontSize: "18px", color: "#5F6368" }}>blog.kushagrawal.in</span>
          </div>
          <div
            style={{
              fontSize: type === "article" ? "52px" : "64px",
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.15,
              maxWidth: "900px",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: "24px",
                color: "#5F6368",
                marginTop: "20px",
                maxWidth: "700px",
                lineHeight: 1.5,
              }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            {["#828475", "#6E7066", "#4A7C59", "#C45D5D"].map((c) => (
              <div
                key={c}
                style={{
                  width: "32px",
                  height: "6px",
                  borderRadius: "3px",
                  backgroundColor: c,
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: "16px", color: "#9CA0A5" }}>
            {type === "article" ? "Article" : type === "project" ? "Project" : ""}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
