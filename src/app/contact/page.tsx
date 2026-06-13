import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { ContactFormClient } from "@/components/shared/contact-form";
import { Globe, Link as LinkIcon, AtSign, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kush Agrawal for collaborations, speaking, or just to say hello.",
};

const socials = [
  { icon: Globe, label: "GitHub", href: "https://github.com/kushagrawal" },
  { icon: LinkIcon, label: "LinkedIn", href: "https://linkedin.com/in/kushagrawal" },
  { icon: AtSign, label: "Twitter", href: "https://twitter.com/kushagrawal" },
  { icon: Mail, label: "Email", href: "mailto:hello@kushagrawal.in" },
];

export default function ContactPage() {
  return (
    <Container>
      <PageHeader
        title="Contact"
        description="Have a question, want to collaborate, or just want to say hello? I'd love to hear from you."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 pb-14">
        {/* Form */}
        <ContactFormClient />

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Availability */}
          <div className="bg-surface rounded-[var(--radius-lg)] p-5">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
              <h3 className="text-sm font-semibold text-text-primary">Available for opportunities</h3>
            </div>
            <p className="text-sm text-text-secondary">
              I&apos;m currently open to internships, freelance projects, and interesting collaborations.
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-surface rounded-[var(--radius-lg)] p-5">
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
          <div className="bg-surface rounded-[var(--radius-lg)] p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-1.5">Response Time</h3>
            <p className="text-sm text-text-secondary">
              I typically respond within 24–48 hours. For urgent matters, reach out on Twitter.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
