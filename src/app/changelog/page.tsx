import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { Sparkles, Wrench, Bug } from "lucide-react";
import type { ChangelogEntry } from "@/types";

export const metadata: Metadata = {
  title: "Changelog",
  description: "A log of updates, improvements, and fixes to kushagrawal.in.",
};

const changelog: ChangelogEntry[] = [
  { date: "2026-06-04", title: "Website Launch", description: "Initial launch of kushagrawal.in — a personal knowledge platform with blog, projects, books, knowledge graph, and full-site search.", type: "feature" },
  { date: "2026-06-04", title: "Knowledge Graph", description: "Added interactive knowledge graph as a flagship feature to visualize connections between topics.", type: "feature" },
  { date: "2026-06-04", title: "CMD+K Search", description: "Implemented full-site search with keyboard navigation and instant results.", type: "feature" },
  { date: "2026-06-04", title: "Dynamic OG Images", description: "Added dynamic Open Graph image generation for all pages using Next.js ImageResponse.", type: "improvement" },
  { date: "2026-06-04", title: "Reading Progress", description: "Added reading progress bar and table of contents for blog articles.", type: "improvement" },
];

const typeConfig = {
  feature: { icon: Sparkles, color: "#4A7C59", label: "Feature" },
  improvement: { icon: Wrench, color: "#828475", label: "Improvement" },
  fix: { icon: Bug, color: "#C45D5D", label: "Fix" },
};

export default function ChangelogPage() {
  return (
    <Container size="article">
      <PageHeader
        title="Changelog"
        description="A log of what's new, improved, and fixed on this website."
        breadcrumbs={[{ label: "Changelog", href: "/changelog" }]}
      />

      <div className="space-y-8 pb-20">
        {changelog.map((entry, i) => {
          const config = typeConfig[entry.type];
          const Icon = config.icon;
          return (
            <div key={i} className="relative pl-8 border-l-2 border-border">
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full" style={{ backgroundColor: config.color }} />
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: config.color, backgroundColor: `${config.color}15` }}>
                  {config.label}
                </span>
                <time className="text-xs text-text-muted">{new Date(entry.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
              </div>
              <h3 className="text-base font-semibold text-text-primary">{entry.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{entry.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
