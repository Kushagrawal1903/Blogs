import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { Calendar, Briefcase, BookOpen, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Now",
  description: "What Kush Agrawal is currently learning, building, and focusing on.",
};

const sections = [
  {
    icon: Briefcase,
    title: "Building",
    items: [
      "GoTrip , AI-powered travel planning platform",
      "This personal knowledge platform (blog.kushagrawal.in)",
      "A cybersecurity monitoring tool using ML anomaly detection",
    ],
  },
  {
    icon: BookOpen,
    title: "Learning",
    items: [
      "Advanced system design patterns",
      "Machine learning fundamentals with PyTorch",
      "Cloud security architecture (AWS)",
      "Technical writing craft",
    ],
  },
  {
    icon: Zap,
    title: "Focusing On",
    items: [
      "Building a consistent writing habit , publishing weekly",
      "Contributing to open-source security tools",
      "Growing the newsletter to 1,000 subscribers",
      "Preparing for placement season",
    ],
  },
  {
    icon: Calendar,
    title: "Reading",
    items: [
      "\"Designing Data-Intensive Applications\" by Martin Kleppmann",
      "\"The Pragmatic Programmer\" by David Thomas & Andrew Hunt",
      "\"Zero to One\" by Peter Thiel",
    ],
  },
];

export default function NowPage() {
  return (
    <Container size="article">
      <PageHeader
        title="Now"
        description="What I'm currently working on, learning, and thinking about. Inspired by Derek Sivers' /now page movement."
        breadcrumbs={[{ label: "Now", href: "/now" }]}
      />

      <p className="text-sm text-text-muted mb-12">
        Last updated: June 2026 · Jaipur, India
      </p>

      <div className="space-y-12 pb-20">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-semibold text-text-primary">{section.title}</h2>
            </div>
            <ul className="space-y-3 pl-8">
              {section.items.map((item) => (
                <li key={item} className="text-text-secondary leading-relaxed relative before:absolute before:left-[-1rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
