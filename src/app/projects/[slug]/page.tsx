import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview,
    openGraph: {
      title: project.title,
      description: project.overview,
      images: [`/api/og?title=${encodeURIComponent(project.title)}&type=project`],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Container size="content" className="py-8 md:py-12 pb-20">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${project.status === 'active' ? 'text-[#4A7C59] bg-[#4A7C5915]' : 'text-accent bg-accent/10'}`}>
          {project.status}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary">{project.title}</h1>
      <p className="mt-4 text-lg text-text-secondary max-w-2xl">{project.overview}</p>

      <div className="flex flex-wrap gap-3 mt-6">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 border border-border rounded-[var(--radius-md)] text-sm font-medium hover:bg-surface transition-colors">
            <Code2 className="w-4 h-4" /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 bg-text-primary text-white rounded-[var(--radius-md)] text-sm font-medium hover:bg-accent-hover transition-colors">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        )}
      </div>

      {/* Tech Stack */}
      <div className="mt-12 p-6 bg-surface rounded-[var(--radius-lg)]">
        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-bg-primary rounded-[var(--radius-md)] text-sm font-medium text-text-primary border border-border">{tech}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-12 prose-editorial"
        dangerouslySetInnerHTML={{
          __html: project.content
            .replace(/^---[\s\S]*?---\n*/m, "")
            .replace(/^## (.+)$/gm, "<h2>$1</h2>")
            .replace(/^### (.+)$/gm, "<h3>$1</h3>")
            .replace(/```(\w+)?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
            .replace(/`([^`]+)`/g, "<code>$1</code>")
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/^\- (.+)$/gm, "<li>$1</li>")
            .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
            .replace(/<\/ul>\s*<ul>/g, "")
            .replace(/^(?!<[huplbso])((?!^$).+)$/gm, "<p>$1</p>")
            .replace(/<p><\/p>/g, ""),
        }}
      />
    </Container>
  );
}
