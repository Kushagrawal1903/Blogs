import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/layout/container";
import { Monitor, Laptop, Code2, Wrench, Globe, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Uses",
  description: "Hardware, software, tools, and setup that Kush Agrawal uses daily.",
};

const categories = [
  {
    icon: Laptop,
    title: "Hardware",
    items: [
      { name: "MacBook Pro 14\"", detail: "M3 Pro, 18GB RAM — Primary development machine" },
      { name: "Dell UltraSharp 27\"", detail: "4K monitor for focused work sessions" },
      { name: "Keychron K2", detail: "Mechanical keyboard with brown switches" },
      { name: "Logitech MX Master 3S", detail: "Precision mouse for long coding sessions" },
      { name: "Sony WH-1000XM5", detail: "Noise-canceling headphones for deep focus" },
    ],
  },
  {
    icon: Code2,
    title: "Development",
    items: [
      { name: "VS Code", detail: "Primary editor with Vim keybindings" },
      { name: "Warp Terminal", detail: "Modern terminal with AI assistance" },
      { name: "GitHub", detail: "Version control and CI/CD" },
      { name: "Docker", detail: "Containerized development environments" },
      { name: "Postman", detail: "API testing and documentation" },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    items: [
      { name: "Next.js", detail: "React framework for production applications" },
      { name: "TypeScript", detail: "Type-safe JavaScript for every project" },
      { name: "Tailwind CSS", detail: "Utility-first CSS framework" },
      { name: "Vercel", detail: "Deployment and hosting platform" },
      { name: "Figma", detail: "UI/UX design and prototyping" },
    ],
  },
  {
    icon: Wrench,
    title: "Productivity",
    items: [
      { name: "Notion", detail: "Knowledge base and project management" },
      { name: "Raycast", detail: "Launcher and workflow automation" },
      { name: "Arc Browser", detail: "Primary browser for development" },
      { name: "Obsidian", detail: "Personal knowledge management" },
      { name: "Linear", detail: "Issue tracking for personal projects" },
    ],
  },
  {
    icon: Palette,
    title: "Design & Content",
    items: [
      { name: "Figma", detail: "Interface design and prototyping" },
      { name: "Excalidraw", detail: "Architecture diagrams and whiteboarding" },
      { name: "Grammarly", detail: "Writing assistance and proofreading" },
      { name: "OBS Studio", detail: "Screen recording for tutorials" },
    ],
  },
  {
    icon: Monitor,
    title: "Data & Security",
    items: [
      { name: "Python", detail: "Primary language for data analysis" },
      { name: "Jupyter Notebooks", detail: "Interactive data exploration" },
      { name: "Wireshark", detail: "Network packet analysis" },
      { name: "Burp Suite", detail: "Web security testing" },
      { name: "Nmap", detail: "Network reconnaissance" },
    ],
  },
];

export default function UsesPage() {
  return (
    <Container>
      <PageHeader
        title="Uses"
        description="A detailed look at the hardware, software, and tools that power my daily workflow."
        breadcrumbs={[{ label: "Uses", href: "/uses" }]}
      />

      <div className="space-y-8 pb-14">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-surface rounded-[var(--radius-lg)] p-6">
            <div className="flex items-center gap-3 mb-4">
              <cat.icon className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-semibold text-text-primary">{cat.title}</h2>
            </div>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2.5 border-b border-border/50 last:border-0">
                  <span className="text-sm font-medium text-text-primary whitespace-nowrap">{item.name}</span>
                  <span className="text-sm text-text-secondary">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
