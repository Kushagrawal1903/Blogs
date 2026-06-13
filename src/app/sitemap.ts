import type { MetadataRoute } from "next";
import { getAllPosts, getAllProjects, getAllBooks } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kushagrawal.in";

  const staticPages = [
    "", "/blog", "/projects", "/books", "/about", "/contact",
    "/uses", "/now", "/writing", "/resources", "/changelog",
    "/newsletter", "/knowledge-graph", "/search",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.7,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projects = getAllProjects().map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const books = getAllBooks().map((b) => ({
    url: `${baseUrl}/books/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...posts, ...projects, ...books];
}
