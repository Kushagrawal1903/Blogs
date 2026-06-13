import type { Metadata } from "next";
import { Container, Section } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Kush Agrawal — developer, data analyst, cybersecurity enthusiast, and author.",
};

const journey = [
  { title: "The Beginning", description: "My journey into technology started with curiosity — taking apart gadgets, writing my first lines of code, and discovering the power of building things from scratch. Computer science wasn't just a major; it became a lens through which I see the world." },
  { title: "Development", description: "Full-stack development became my craft. From building REST APIs to architecting React applications, I've learned that great software isn't just about code — it's about solving real problems elegantly. Next.js, TypeScript, Python, and cloud infrastructure are my daily tools." },
  { title: "Data Analytics", description: "Data tells stories that humans miss. I fell in love with the process of extracting insights from noise — building pipelines, creating visualizations, and using statistical analysis to drive decisions. Every dataset is a puzzle waiting to be solved." },
  { title: "Cybersecurity", description: "The intersection of technology and security fascinates me. Understanding how systems can be compromised makes you a better builder. I explore network security, penetration testing, and security architecture through CTFs and hands-on research." },
  { title: "Writing", description: "Writing is thinking made visible. I write to learn, to teach, and to contribute to the collective knowledge of the developer community. Clear technical communication is an undervalued superpower." },
  { title: "Vision", description: "I believe in building technology that matters, sharing knowledge openly, and creating a body of work that stands the test of time. This website is my digital home — a place where all these threads come together." },
];

export default function AboutPage() {
  return (
    <>
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
    </>
  );
}
