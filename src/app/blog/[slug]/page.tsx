import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { ArticleContent } from "@/components/blog/article-content";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    ...getPageMetadata(`blog/${slug}`),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      url: `${siteConfig.url}/blog/${slug}`,
      images: [`/api/og?title=${encodeURIComponent(post.title)}&type=article`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, post.tags);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.coverImage ? `${siteConfig.url}${post.coverImage}` : undefined,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": `${siteConfig.url}/about`
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "publisher": {
      "@type": "Person",
      "name": "Kush Agrawal",
      "url": siteConfig.url
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ArticleContent post={post} />

      {/* Newsletter */}
      <div className="py-16 bg-surface">
        <Container size="article">
          <NewsletterForm />
        </Container>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="py-16">
          <Container size="content">
            <h2 className="text-2xl font-semibold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block bg-surface rounded-[var(--radius-lg)] p-6 hover:shadow-[var(--shadow-sm)] transition-all"
                >
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {r.category.replace("-", " ")}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-text-primary group-hover:text-accent transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                    {r.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
                    <Clock className="w-3 h-3" />
                    {r.readingTime} min read
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
