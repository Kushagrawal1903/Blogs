import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="mx-auto max-w-[var(--container-max)] px-5 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-xl font-bold text-text-primary">
              Kush.
            </Link>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              Building things, analyzing data, and sharing ideas. A personal knowledge platform.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
              Navigate
            </h4>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              {siteConfig.secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/knowledge-graph"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Knowledge Graph
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <Link
                  href="/rss.xml"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} Kush Agrawal. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="/privacy-policy"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-text-muted/30">|</span>
            <Link
              href="/terms-and-conditions"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-text-muted/30">|</span>
            <Link
              href="/sitemap.xml"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              Sitemap
            </Link>
            <span className="text-text-muted/30">|</span>
            <Link
              href="/rss.xml"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
