import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container size="article" className="py-32 text-center">
      <p className="text-8xl font-display font-bold text-border mb-6">404</p>
      <h1 className="text-3xl font-display font-semibold text-text-primary mb-4">
        Page not found
      </h1>
      <p className="text-lg text-text-secondary mb-10 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center h-[52px] px-8 bg-text-primary text-white font-medium rounded-[var(--radius-md)] hover:bg-accent-hover transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center h-[52px] px-8 border border-border text-text-primary font-medium rounded-[var(--radius-md)] hover:bg-surface transition-colors"
        >
          Read Blog
        </Link>
      </div>
    </Container>
  );
}
