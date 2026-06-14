import { HeroSection } from "@/components/home/hero";
import { ExpertiseSection } from "@/components/home/expertise";
import { FeaturedArticlesSection } from "@/components/home/featured-articles";
import { ProjectsSection } from "@/components/home/projects-section";
import BooksSection from "@/components/books/BooksSection";
import { KnowledgeGraphSection } from "@/components/home/knowledge-graph-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { getFeaturedPosts, getAllBooks } from "@/lib/content";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const books = getAllBooks();

  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <FeaturedArticlesSection posts={featuredPosts} />
      <ProjectsSection />
      <BooksSection books={books} isHomePage={true} />
      <KnowledgeGraphSection />
      <NewsletterSection />
    </>
  );
}

