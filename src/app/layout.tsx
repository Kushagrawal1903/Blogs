import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SearchModal } from "@/components/shared/search-modal";
import { PortfolioBadge } from "@/components/shared/portfolio-badge";
import Script from "next/script";
import { siteConfig } from "@/lib/constants";
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
  metadataBase: new URL(siteConfig.url),
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
    "IoT Author",
    "C Programming Author",
  ],
  authors: [{ name: "Kush Agrawal", url: "https://kushagrawal.in" }],
  creator: "Kush Agrawal",
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Blogs | Kush Agrawal",
    description:
      "Building things, analyzing data, and sharing ideas. A personal knowledge platform by Kush Agrawal.",
    siteName: "Kush Agrawal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Kush Agrawal",
    description:
      "Building things, analyzing data, and sharing ideas. A personal knowledge platform by Kush Agrawal.",
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
    "name": "Kush Agrawal",
    "url": "https://kushagrawal.in",
    "jobTitle": "Computer Science Engineering Student, Full Stack Developer, Cybersecurity Intern & Author",
    "worksFor": {
      "@type": "Organization",
      "name": "Edunet Foundation"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "IPS IES Academy, Indore"
    },
    "description": "Computer Science Engineering student at IPS IES Academy, technical writer, author of 'Fundamentals of Internet of Things' and 'Basic C Programming', and Cybersecurity Intern at Edunet Foundation.",
    "sameAs": [
      "https://github.com/Kushagrawal1903",
      "https://www.linkedin.com/in/kush-agrawal-491ba2286/",
      "https://twitter.com/kushagrawal"
    ],
    "publishingPrinciples": `${siteConfig.url}/about`,
    "knowsAbout": [
      "Software Development",
      "Data Analytics",
      "Cybersecurity",
      "Artificial Intelligence",
      "Technical Writing",
      "Internet of Things",
      "C Programming"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kush Agrawal",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/icon.png`,
    "founder": {
      "@type": "Person",
      "name": "Kush Agrawal"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary antialiased font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PortfolioBadge />
        <SearchModal />
      </body>
    </html>
  );
}
