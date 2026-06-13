"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";

const projects = [
  {
    slug: "gotrip",
    title: "GoTrip",
    description: "An AI-powered travel planning platform that generates personalized itineraries using machine learning and real-time data.",
    techStack: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    status: "Active",
    statusColor: "#4A7C59",
    emoji: "✈️",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "A real-time analytics dashboard for visualizing business metrics, processing millions of data points with sub-second query times.",
    techStack: ["React", "D3.js", "ClickHouse", "Kafka"],
    status: "Completed",
    statusColor: "#828475",
    emoji: "📊",
  },
  {
    slug: "NetScan",
    title: "NetScan",
    description: "A network security monitoring tool that uses machine learning to detect anomalous traffic patterns and potential intrusions.",
    techStack: ["Python", "Scikit-learn", "FastAPI", "React"],
    status: "Active",
    statusColor: "#4A7C59",
    emoji: "🛡️",
  },
];

export function ProjectsSection() {
  return (
    <Section background="surface">
      <Container>
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
              What I&apos;m Building
            </p>
            <h2 className="display text-text-primary">Featured Projects</h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            All projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block bg-bg-primary rounded-[var(--radius-lg)] p-5 md:p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="shrink-0 w-11 h-11 rounded-[var(--radius-md)] bg-bg-secondary flex items-center justify-center text-xl">
                    {project.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          color: project.statusColor,
                          backgroundColor: `${project.statusColor}15`,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2 py-0.5 bg-surface rounded-full text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-accent font-medium">View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
