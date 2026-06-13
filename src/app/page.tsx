import { HeroSection } from "@/components/home/hero";
import { ExpertiseSection } from "@/components/home/expertise";
import { FeaturedArticlesSection } from "@/components/home/featured-articles";
import { ProjectsSection } from "@/components/home/projects-section";
import { BooksSection } from "@/components/home/books-section";
import { KnowledgeGraphSection } from "@/components/home/knowledge-graph-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { getFeaturedPosts } from "@/lib/content";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <FeaturedArticlesSection posts={featuredPosts} />
      <ProjectsSection />
      <BooksSection />
      <KnowledgeGraphSection />
      <NewsletterSection />
    </>
  );
}

