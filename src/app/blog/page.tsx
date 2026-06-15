import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Container, PageHeader } from "@/components/layout/container";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { getAllPosts, getReadingStats } from "@/lib/content";
import { formatDate } from "@/lib/utils";

import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on software development, data analytics, cybersecurity, and writing.",
  ...getPageMetadata("blog"),
};

export default function BlogPage() {
  const posts = getAllPosts();
  const stats = getReadingStats();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteConfig.url}/blog`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Container>
        <PageHeader
          title="Blog"
          description="Thoughts, analysis, and experiments across development, data, and security."
          breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        />

        {/* Reading Stats Bar */}
        <div className="flex flex-wrap gap-5 md:gap-8 pb-8 mb-8 border-b border-border">
          <div>
            <p className="text-[1.375rem] font-semibold text-text-primary">{stats.totalArticles}</p>
            <p className="text-xs text-text-muted">Articles</p>
          </div>
          <div>
            <p className="text-[1.375rem] font-semibold text-text-primary">{stats.totalWords.toLocaleString()}</p>
            <p className="text-xs text-text-muted">Words Written</p>
          </div>
          <div>
            <p className="text-[1.375rem] font-semibold text-text-primary">{stats.estimatedReadingHours}h</p>
            <p className="text-xs text-text-muted">Reading Time</p>
          </div>
          <div>
            <p className="text-[1.375rem] font-semibold text-text-primary">{stats.categoriesCovered}</p>
            <p className="text-xs text-text-muted">Categories</p>
          </div>
        </div>

        {/* Editorial Article Rows */}
        <div className="space-y-0">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-border last:border-b-0">
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col md:flex-row gap-5 py-6 md:py-8"
              >
                {/* Thumbnail */}
                <div className="shrink-0 w-full md:w-48 lg:w-56 aspect-[16/10] rounded-[var(--radius-md)] bg-bg-secondary overflow-hidden relative">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent-light/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <span className="text-3xl opacity-20">
                        {post.category === "development" ? "💻" : post.category === "data-analytics" ? "📊" : post.category === "cybersecurity" ? "🛡️" : "✍️"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {post.category.replace("-", " ")}
                    </span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime} min read
                    </span>
                  </div>
                  <h2 className="text-lg md:text-[1.375rem] font-display font-semibold text-text-primary group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-2.5 flex items-center gap-4">
                    <time className="text-sm text-text-muted">
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="py-16 text-center text-text-muted">
            <p className="text-lg">No articles yet. Check back soon!</p>
          </div>
        )}
      </Container>

      {/* Newsletter */}
      <div className="mt-14 mb-14">
        <Container size="content">
          <NewsletterForm />
        </Container>
      </div>
    </>
  );
}
