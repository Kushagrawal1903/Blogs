import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { BookOpen, Wrench, GraduationCap, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "Recommended books, tools, courses, websites, and developer resources curated by Kush Agrawal.",
};

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Books",
    items: [
      { name: "Designing Data-Intensive Applications", by: "Martin Kleppmann", url: "#", description: "The bible for understanding modern distributed systems." },
      { name: "Clean Code", by: "Robert C. Martin", url: "#", description: "Timeless principles for writing readable, maintainable code." },
      { name: "The Pragmatic Programmer", by: "David Thomas & Andrew Hunt", url: "#", description: "Practical wisdom for software craftspeople." },
      { name: "Hacking: The Art of Exploitation", by: "Jon Erickson", url: "#", description: "Deep dive into how exploits work at the systems level." },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Raycast", url: "https://raycast.com", description: "Supercharged productivity launcher for macOS." },
      { name: "Linear", url: "https://linear.app", description: "The best issue tracker I've used. Clean and fast." },
      { name: "Excalidraw", url: "https://excalidraw.com", description: "Hand-drawn style diagrams. Perfect for architecture sketches." },
      { name: "Obsidian", url: "https://obsidian.md", description: "Local-first knowledge management with bidirectional links." },
    ],
  },
  {
    icon: GraduationCap,
    title: "Courses",
    items: [
      { name: "CS50", url: "https://cs50.harvard.edu", description: "Harvard's intro to CS. The gold standard." },
      { name: "Full Stack Open", url: "https://fullstackopen.com", description: "Deep dive into modern web development with React & Node." },
      { name: "TryHackMe", url: "https://tryhackme.com", description: "Hands-on cybersecurity learning through guided CTFs." },
    ],
  },
  {
    icon: Globe,
    title: "Websites",
    items: [
      { name: "Hacker News", url: "https://news.ycombinator.com", description: "Tech news and discussion. My daily read." },
      { name: "roadmap.sh", url: "https://roadmap.sh", description: "Interactive roadmaps for every tech career path." },
      { name: "Refactoring Guru", url: "https://refactoring.guru", description: "Design patterns explained with beautiful illustrations." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <Container>
      <PageHeader
        title="Resources"
        description="A curated collection of books, tools, courses, and websites I genuinely recommend."
        breadcrumbs={[{ label: "Resources", href: "/resources" }]}
      />

      <div className="space-y-12 pb-20">
        {resourceCategories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3 mb-6">
              <cat.icon className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-semibold text-text-primary">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-surface rounded-[var(--radius-lg)] p-6 hover:shadow-[var(--shadow-sm)] transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">{item.name}</h3>
                      {"by" in item && <p className="text-xs text-text-muted mt-0.5">by {item.by}</p>}
                    </div>
                    <Star className="w-4 h-4 text-accent-light shrink-0" />
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
