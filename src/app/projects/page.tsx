import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/layout/container";
import { getAllProjects } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects spanning AI, data analytics, cybersecurity, and web development.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container>
      <PageHeader
        title="Projects"
        description="Things I've built, am building, or have contributed to."
        breadcrumbs={[{ label: "Projects", href: "/projects" }]}
      />

      <div className="space-y-6 pb-20">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block bg-surface rounded-[var(--radius-lg)] p-8 md:p-10 hover:shadow-[var(--shadow-md)] transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <span
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{
                      color: project.status === "active" ? "#4A7C59" : "#828475",
                      backgroundColor: project.status === "active" ? "#4A7C5915" : "#82847515",
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">{project.overview}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1 bg-bg-primary rounded-full text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
