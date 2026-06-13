export const siteConfig = {
  name: "Kush Agrawal",
  title: "Kush Agrawal — Developer, Analyst, Writer",
  description:
    "Building things, analyzing data, and sharing ideas. A personal knowledge platform exploring software development, data analytics, cybersecurity, and writing.",
  url: "https://kushagrawal.in",
  ogImage: "https://kushagrawal.in/api/og",
  author: {
    name: "Kush Agrawal",
    email: "hello@kushagrawal.in",
    role: "Computer Science Student · Full Stack Developer · Data Analyst · Author",
    bio: "I build software, analyze data, explore cybersecurity, and write about it all.",
  },
  links: {
    github: "https://github.com/kushagrawal",
    linkedin: "https://linkedin.com/in/kushagrawal",
    twitter: "https://twitter.com/kushagrawal",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
    { label: "Books", href: "/books" },
    { label: "Contact", href: "/contact" },
  ],
  secondaryNav: [
    { label: "Writing", href: "/writing" },
    { label: "Resources", href: "/resources" },
    { label: "Uses", href: "/uses" },
    { label: "Now", href: "/now" },
    { label: "Changelog", href: "/changelog" },
  ],
  categories: [
    {
      name: "Development",
      slug: "development",
      description: "Full-stack development, frameworks, and engineering practices.",
      icon: "Code2",
      color: "#828475",
    },
    {
      name: "Data Analytics",
      slug: "data-analytics",
      description: "Data analysis, visualization, and insights.",
      icon: "BarChart3",
      color: "#6E7066",
    },
    {
      name: "Cybersecurity",
      slug: "cybersecurity",
      description: "Security research, CTFs, and threat analysis.",
      icon: "Shield",
      color: "#4A7C59",
    },
    {
      name: "Writing",
      slug: "writing",
      description: "Thoughts on communication, creativity, and storytelling.",
      icon: "PenLine",
      color: "#C45D5D",
    },
  ],
} as const;

export type Category = (typeof siteConfig.categories)[number];
