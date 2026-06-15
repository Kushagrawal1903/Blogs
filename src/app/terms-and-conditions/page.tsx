import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of use for Kush Agrawal's personal website.",
  ...getPageMetadata("terms-and-conditions"),
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "June 15, 2026";

  return (
    <Container size="article" className="py-10 md:py-16">
      <PageHeader
        title="Terms & Conditions"
        description={`Last updated: ${lastUpdated}`}
        breadcrumbs={[{ label: "Terms & Conditions", href: "/terms-and-conditions" }]}
      />

      <div className="prose-editorial mt-8">
        <p>
          Welcome to <strong>Kush Agrawal&apos;s Website</strong>!
        </p>
        <p>
          These terms and conditions outline the rules and regulations for the use of Kush Agrawal&apos;s Website, located at <a href={siteConfig.url}>{siteConfig.url}</a>.
        </p>
        <p>
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use Kush Agrawal&apos;s Website if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2>Terminology</h2>
        <p>
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to myself, Kush Agrawal.
        </p>

        <h2>Cookies</h2>
        <p>
          We employ the use of cookies. By accessing Kush Agrawal&apos;s Website, you agreed to use cookies in agreement with the Privacy Policy.
        </p>
        <p>
          Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners (e.g. Google AdSense) may also use cookies.
        </p>

        <h2>License and Intellectual Property</h2>
        <p>
          Unless otherwise stated, Kush Agrawal owns the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from Kush Agrawal&apos;s Website for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>
          You must not:
        </p>
        <ul>
          <li>Republish material from this website without explicit written consent or proper canonical attribution.</li>
          <li>Sell, rent, or sub-license material from this website.</li>
          <li>Reproduce, duplicate, or copy material from this website.</li>
          <li>Redistribute content from this website unless content is specifically made for redistribution.</li>
        </ul>

        <h2>User-Generated Content</h2>
        <p>
          Parts of this website may offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Kush Agrawal does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Kush Agrawal, his agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.
        </p>
        <p>
          Kush Agrawal reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
        </p>

        <h2>Hyperlinking to My Content</h2>
        <p>
          Organizations may link to my home page, publications, or other website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products/services; and (c) fits within the context of the linking party&apos;s site.
        </p>

        <h2>Content Liability and Disclaimer</h2>
        <p>
          While I strive to ensure that the information on this website is correct, I do not warrant its completeness or accuracy; nor do I commit to ensuring that the website remains available or that the material on the website is kept up to date.
        </p>
        <p>
          To the maximum extent permitted by applicable law, I exclude all representations, warranties, and conditions relating to my website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul>
          <li>Limit or exclude my or your liability for death or personal injury resulting from negligence;</li>
          <li>Limit or exclude my or your liability for fraud or fraudulent misrepresentation;</li>
          <li>Limit any of my or your liabilities in any way that is not permitted under applicable law.</li>
        </ul>

        <h2>External Links Disclaimer</h2>
        <p>
          This website may contain links to external websites that are not provided or maintained by or in any way affiliated with Kush Agrawal. Please note that I do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any queries regarding any of my terms, please contact me at: <a href="mailto:hello@kushagrawal.in">hello@kushagrawal.in</a>.
        </p>
      </div>
    </Container>
  );
}
