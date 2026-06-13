"use client";

import { Container, Section } from "@/components/layout/container";
import { NewsletterForm } from "@/components/shared/newsletter-form";

export function NewsletterSection() {
  return (
    <Section background="secondary">
      <Container size="content">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            Newsletter
          </p>
          <h2 className="display text-text-primary">Stay in the loop</h2>
          <p className="mt-3 text-sm text-text-secondary">
            Join 1,000+ readers. Get weekly articles on development, data analytics, cybersecurity, and more — delivered straight to your inbox.
          </p>
          <div className="mt-6 max-w-md mx-auto">
            <NewsletterForm variant="hero" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
