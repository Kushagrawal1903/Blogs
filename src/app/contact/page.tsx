import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { ContactFormClient } from "@/components/shared/contact-form";
import { Globe, Link as LinkIcon, AtSign, Mail } from "lucide-react";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kush Agrawal for collaborations, speaking, or just to say hello.",
  ...getPageMetadata("contact"),
};

const socials = [
  { icon: Globe, label: "GitHub", href: "https://github.com/Kushagrawal1903" },
  { icon: LinkIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/kush-agrawal-491ba2286/" },
  { icon: AtSign, label: "Twitter", href: "https://twitter.com/kushagrawal" },
  { icon: Mail, label: "Email", href: "mailto:hello@kushagrawal.in" },
];

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Kush Agrawal",
    "description": "Contact page of Kush Agrawal for professional collaborations, internships, and freelance opportunities.",
    "url": `${siteConfig.url}/contact`
  };

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
        "name": "Contact",
        "item": `${siteConfig.url}/contact`
      }
    ]
  };

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        title="Contact"
        description="Have a question, want to collaborate, or just want to say hello? I'd love to hear from you."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 pb-14">
        {/* Form and Privacy */}
        <div>
          <ContactFormClient />
          <p className="mt-5 text-xs text-text-muted leading-relaxed border-t border-border/50 pt-4">
            <strong>Privacy Notice:</strong> Information submitted through this form is only used to respond to inquiries and is never sold, shared, or leased to third parties.
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Professional Inquiry */}
          <div className="bg-surface rounded-[var(--radius-lg)] p-5 border border-border">
            <h3 className="text-sm font-semibold text-text-primary mb-2">Professional Inquiry</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              I welcome outreach regarding:
            </p>
            <ul className="mt-2 text-xs text-text-secondary list-disc pl-4 space-y-1">
              <li>Software engineering internships</li>
              <li>Data analytics projects & research</li>
              <li>Technical writing & textbooks</li>
              <li>Freelance development & security audits</li>
            </ul>
          </div>

          {/* Availability */}
          <div className="bg-surface rounded-[var(--radius-lg)] p-5 border border-border">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
              <h3 className="text-sm font-semibold text-text-primary">Available for opportunities</h3>
            </div>
            <p className="text-sm text-text-secondary">
              I&apos;m currently open to internships, freelance projects, and interesting collaborations.
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-surface rounded-[var(--radius-lg)] p-5 border border-border">
            <h3 className="text-sm font-semibold text-text-primary mb-2.5">Connect</h3>
            <div className="space-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-surface rounded-[var(--radius-lg)] p-5 border border-border">
            <h3 className="text-sm font-semibold text-text-primary mb-1.5">Response Time</h3>
            <p className="text-sm text-text-secondary">
              I typically respond within 24–48 hours. For urgent matters, reach out on Twitter or LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
