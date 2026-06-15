import type { Metadata } from "next";
import { Container, Section } from "@/components/layout/container";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Kush Agrawal , developer, data analyst, cybersecurity enthusiast, and author.",
  ...getPageMetadata("about"),
};

const journey = [
  { title: "The Beginning", description: "My journey into technology started with curiosity , taking apart gadgets, writing my first lines of code, and discovering the power of building things from scratch. Computer science wasn't just a major; it became a lens through which I see the world." },
  { title: "Development", description: "Full-stack development became my craft. From building REST APIs to architecting React applications, I've learned that great software isn't just about code , it's about solving real problems elegantly. Next.js, TypeScript, Python, and cloud infrastructure are my daily tools." },
  { title: "Data Analytics", description: "Data tells stories that humans miss. I fell in love with the process of extracting insights from noise , building pipelines, creating visualizations, and using statistical analysis to drive decisions. Every dataset is a puzzle waiting to be solved." },
  { title: "Cybersecurity", description: "The intersection of technology and security fascinates me. Understanding how systems can be compromised makes you a better builder. I explore network security, penetration testing, and security architecture through CTFs and hands-on research." },
  { title: "Writing", description: "Writing is thinking made visible. I write to learn, to teach, and to contribute to the collective knowledge of the developer community. Clear technical communication is an undervalued superpower." },
  { title: "Vision", description: "I believe in building technology that matters, sharing knowledge openly, and creating a body of work that stands the test of time. This website is my digital home , a place where all these threads come together." },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Kush Agrawal",
    "description": "Learn about Kush Agrawal, Computer Science Student, Full Stack Developer, Cybersecurity Intern & Author.",
    "url": `${siteConfig.url}/about`,
    "mainEntity": {
      "@type": "Person",
      "name": "Kush Agrawal",
      "jobTitle": "Computer Science Student, Full Stack Developer, Cybersecurity Intern & Author",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "IPS IES Academy, Indore"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Edunet Foundation"
      }
    }
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
        "name": "About",
        "item": `${siteConfig.url}/about`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Container size="article" className="py-10 md:py-16">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">About</p>
        <h1 className="display-xl text-text-primary">
          Hi, I&apos;m Kush.
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
          A computer science student building at the intersection of software development, data analytics, cybersecurity, and writing. I believe the best engineers are also great communicators.
        </p>
      </Container>

      <Section background="surface">
        <Container size="article">
          <div className="space-y-10">
            {journey.map((item, i) => (
              <div key={item.title} className="relative pl-6 border-l-2 border-border">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  Chapter {i + 1}
                </span>
                <h2 className="mt-1.5 text-xl font-display font-semibold text-text-primary">
                  {item.title}
                </h2>
                <p className="mt-2.5 text-text-secondary leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="primary" className="border-t border-border">
        <Container size="article">
          <div className="space-y-12">
            {/* Mission Section */}
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Philosophy</p>
              <h2 className="text-2xl font-display font-semibold text-text-primary">Mission</h2>
              <p className="mt-3 text-text-secondary leading-relaxed text-base">
                This website exists as my personal brand website, portfolio, and knowledge platform. My mission is to share technical insights, help fellow students navigate computer science concepts, document my own software projects, and publish deep dives on software development, data analytics, and cybersecurity.
              </p>
            </div>

            {/* Education & Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Academic Path</p>
                <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">Education</h2>
                <div className="relative pl-6 border-l-2 border-border space-y-4">
                  <div className="relative">
                    <div className="absolute left-[-31px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <h4 className="text-base font-semibold text-text-primary">B.Tech Computer Science Engineering</h4>
                    <p className="text-sm text-text-secondary">IPS IES Academy, Indore</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Professional Work</p>
                <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">Experience</h2>
                <div className="relative pl-6 border-l-2 border-border space-y-4">
                  <div className="relative">
                    <div className="absolute left-[-31px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <h4 className="text-base font-semibold text-text-primary">Cybersecurity Intern</h4>
                    <p className="text-sm text-text-secondary">Edunet Foundation (Vodafone Idea - VI)</p>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[-31px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <h4 className="text-base font-semibold text-text-primary">Community Member & Coordinator</h4>
                    <p className="text-sm text-text-secondary">Google Developer Communities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Published Works</p>
              <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">Publications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface p-5 rounded-[var(--radius-md)] border border-border">
                  <h4 className="font-semibold text-text-primary">Fundamentals of Internet of Things</h4>
                  <p className="text-sm text-text-secondary mt-1">Co-authored a technical textbook detailing IoT architecture, sensor networks, and cloud protocols.</p>
                </div>
                <div className="bg-surface p-5 rounded-[var(--radius-md)] border border-border">
                  <h4 className="font-semibold text-text-primary">Basic C Programming</h4>
                  <p className="text-sm text-text-secondary mt-1">Authored a structured guide for beginners getting started with procedural programming principles.</p>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Focus Areas</p>
              <h2 className="text-2xl font-display font-semibold text-text-primary mb-3">Areas of Interest</h2>
              <div className="flex flex-wrap gap-2">
                {["Software Development", "Data Analytics", "Artificial Intelligence", "Cybersecurity", "Technical Writing"].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-surface border border-border rounded-full text-sm font-medium text-text-secondary">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Let&apos;s Connect</p>
              <h2 className="text-2xl font-display font-semibold text-text-primary mb-3">Social Directory</h2>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/Kushagrawal1903" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-text-primary hover:underline transition-colors font-medium">GitHub</a>
                <span className="text-border">|</span>
                <a href="https://www.linkedin.com/in/kush-agrawal-491ba2286/" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-text-primary hover:underline transition-colors font-medium">LinkedIn</a>
                <span className="text-border">|</span>
                <a href="mailto:hello@kushagrawal.in" className="text-sm text-accent hover:text-text-primary hover:underline transition-colors font-medium font-body">hello@kushagrawal.in</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
