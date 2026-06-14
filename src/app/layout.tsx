import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SearchModal } from "@/components/shared/search-modal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kushagrawal.in"),
  title: {
    default: "Blogs | Kush Agrawal",
    template: "%s | Kush Agrawal",
  },
  description:
    "Building things, analyzing data, and sharing ideas. A personal knowledge platform exploring software development, data analytics, cybersecurity, and writing.",
  keywords: [
    "Kush Agrawal",
    "Software Developer",
    "Data Analyst",
    "Cybersecurity",
    "Full Stack Developer",
    "Technical Writer",
  ],
  authors: [{ name: "Kush Agrawal", url: "https://kushagrawal.in" }],
  creator: "Kush Agrawal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kushagrawal.in",
    title: "Blogs | Kush Agrawal",
    description:
      "Building things, analyzing data, and sharing ideas.",
    siteName: "Kush Agrawal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Kush Agrawal",
    description:
      "Building things, analyzing data, and sharing ideas.",
    creator: "@kushagrawal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kush Agrawal",
    url: "https://kushagrawal.in",
    jobTitle: "Full Stack Developer & Data Analyst",
    sameAs: [
      "https://github.com/kushagrawal",
      "https://linkedin.com/in/kushagrawal",
      "https://twitter.com/kushagrawal",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary antialiased font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SearchModal />
      </body>
    </html>
  );
}
