import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/layout/container";
import { getAllPosts } from "@/lib/content";
import { Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Writing",
  description: "A curated index of all articles, series, notes, and guides by Kush Agrawal.",
};

export default function WritingPage() {
  const posts = getAllPosts();
  const grouped: Record<string, typeof posts> = {};

  posts.forEach((post) => {
    const cat = post.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(post);
  });

  return (
    <Container>
      <PageHeader
        title="Writing"
        description="A curated index of everything I've written — articles, guides, tutorials, and notes organized by topic."
        breadcrumbs={[{ label: "Writing", href: "/writing" }]}
      />

      <div className="space-y-16 pb-20">
        {Object.entries(grouped).map(([category, categoryPosts]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold text-text-primary mb-6 pb-3 border-b border-border">
              {category}
              <span className="ml-3 text-sm font-normal text-text-muted">
                {categoryPosts.length} {categoryPosts.length === 1 ? "article" : "articles"}
              </span>
            </h2>
            <div className="space-y-4">
              {categoryPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-3 hover:bg-surface -mx-4 px-4 rounded-[var(--radius-md)] transition-colors"
                >
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors truncate">
                      {post.title}
                    </h3>
                  </div>
                  <div className="shrink-0 flex items-center gap-3 text-sm text-text-muted">
                    <span className="hidden sm:flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}m
                    </span>
                    <time className="whitespace-nowrap">{formatDate(post.publishedAt)}</time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
