import { NextRequest, NextResponse } from "next/server";
import { generateSearchIndex } from "@/lib/content";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const index = generateSearchIndex();

  const results = index
    .filter((item) => {
      const searchable = `${item.title} ${item.excerpt} ${item.category} ${item.tags}`.toLowerCase();
      return query.split(" ").every((word) => searchable.includes(word));
    })
    .slice(0, 8);

  return NextResponse.json({ results });
}
