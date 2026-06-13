import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { getReadingStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to Kush Agrawal's newsletter for weekly articles on development, data analytics, and cybersecurity.",
};

export default function NewsletterPage() {
  const stats = getReadingStats();

  return (
    <Container size="article" className="py-12 md:py-20 pb-32">
      <div className="text-center">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Newsletter</p>
        <h1 className="display-xl text-text-primary">
          Stay in the loop.
        </h1>
        <p className="mt-6 text-lg text-text-secondary max-w-lg mx-auto leading-relaxed">
          Join 1,000+ readers who get weekly articles on software development, data analytics, cybersecurity, and more. No spam. Unsubscribe anytime.
        </p>

        <div className="mt-10 max-w-md mx-auto">
          <NewsletterForm variant="hero" />
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
          <div>
            <p className="text-3xl font-semibold text-text-primary">{stats.totalArticles}</p>
            <p className="text-sm text-text-muted mt-1">Articles Published</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-text-primary">{stats.categoriesCovered}</p>
            <p className="text-sm text-text-muted mt-1">Topics Covered</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-text-primary">Weekly</p>
            <p className="text-sm text-text-muted mt-1">Publishing Cadence</p>
          </div>
        </div>

        <div className="mt-16 bg-surface rounded-[var(--radius-lg)] p-8 text-left max-w-lg mx-auto">
          <h3 className="font-semibold text-text-primary mb-4">What you&apos;ll get:</h3>
          <ul className="space-y-3 text-text-secondary">
            <li className="flex items-start gap-3"><span className="text-accent mt-0.5">✓</span> Deep-dive technical articles</li>
            <li className="flex items-start gap-3"><span className="text-accent mt-0.5">✓</span> Project breakdowns and case studies</li>
            <li className="flex items-start gap-3"><span className="text-accent mt-0.5">✓</span> Cybersecurity insights and CTF walkthroughs</li>
            <li className="flex items-start gap-3"><span className="text-accent mt-0.5">✓</span> Curated resources and tool recommendations</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
