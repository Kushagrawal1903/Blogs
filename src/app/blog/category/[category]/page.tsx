import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, PageHeader } from "@/components/layout/container";
import { getPostsByCategory } from "@/lib/content";
import { siteConfig } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

interface Props { params: Promise<{ category: string }>; }

export async function generateStaticParams() {
  return siteConfig.categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = siteConfig.categories.find((c) => c.slug === category);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = siteConfig.categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const posts = getPostsByCategory(category);

  return (
    <Container>
      <PageHeader
        title={cat.name}
        description={cat.description}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: cat.name, href: `/blog/category/${cat.slug}` },
        ]}
      />

      <div className="space-y-0 pb-20">
        {posts.map((post) => (
          <article key={post.slug} className="group border-b border-border last:border-b-0">
            <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row gap-6 py-8 md:py-10">
              <div className="shrink-0 w-full md:w-56 lg:w-64 aspect-[16/10] md:aspect-[4/3] rounded-[var(--radius-md)] bg-bg-secondary overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent-light/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <span className="text-4xl opacity-20">
                    {category === "development" ? "💻" : category === "data-analytics" ? "📊" : category === "cybersecurity" ? "🛡️" : "✍️"}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">{cat.name}</span>
                  <span className="text-xs text-text-muted flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime} min read</span>
                </div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-text-primary group-hover:text-accent transition-colors leading-tight">{post.title}</h2>
                <p className="mt-2 text-text-secondary line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="mt-3 flex items-center gap-4">
                  <time className="text-sm text-text-muted">{formatDate(post.publishedAt)}</time>
                  <span className="text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </div>
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="py-20 text-center text-text-muted">
            <p className="text-lg">No articles in this category yet.</p>
            <Link href="/blog" className="mt-4 inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors">
              <ArrowRight className="w-4 h-4" /> Browse all articles
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
}
