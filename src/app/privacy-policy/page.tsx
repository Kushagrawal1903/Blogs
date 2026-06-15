import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and cookies disclosure for Kush Agrawal's personal website.",
  ...getPageMetadata("privacy-policy"),
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 15, 2026";

  return (
    <Container size="article" className="py-10 md:py-16">
      <PageHeader
        title="Privacy Policy"
        description={`Last updated: ${lastUpdated}`}
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <div className="prose-editorial mt-8">
        <p>
          At <strong>Kush Agrawal</strong> (accessible from <a href={siteConfig.url}>{siteConfig.url}</a>), one of my main priorities is the privacy of my visitors. This Privacy Policy document contains types of information that is collected and recorded by my website and how I use it.
        </p>
        <p>
          If you have additional questions or require more information about this Privacy Policy, do not hesitate to contact me at <a href="mailto:hello@kushagrawal.in">hello@kushagrawal.in</a>.
        </p>

        <h2>Consent</h2>
        <p>
          By using my website, you hereby consent to this Privacy Policy and agree to its terms.
        </p>

        <h2>Information I Collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <ul>
          <li>
            <strong>Contact Form:</strong> If you contact me directly through the contact form, I may receive additional information about you such as your name, email address, the subject of your message, and any details you choose to write.
          </li>
          <li>
            <strong>Newsletter Subscription:</strong> If you sign up for my newsletter, I collect your email address to send you technical updates, projects, and articles. You can unsubscribe at any time.
          </li>
        </ul>

        <h2>How I Use Your Information</h2>
        <p>
          I use the information I collect in various ways, including to:
        </p>
        <ul>
          <li>Provide, operate, and maintain my website.</li>
          <li>Improve, personalize, and expand my website's content and user experience.</li>
          <li>Understand and analyze how visitors interact with my website.</li>
          <li>Develop new projects, services, features, and functionality.</li>
          <li>Communicate with you directly, including responding to inquiries sent through the contact form or sending newsletter updates.</li>
          <li>Prevent fraud and ensure technical security.</li>
        </ul>

        <h2>Log Files</h2>
        <p>
          This website follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
        </p>

        <h2>Cookies and Web Beacons</h2>
        <p>
          Like any other website, my website uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h2>Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of the third-party vendors on my site. It also uses cookies, known as DART cookies, to serve ads to my site visitors based upon their visit to this website and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>.
        </p>

        <h2>Google Analytics</h2>
        <p>
          I use Google Analytics to monitor and analyze the use of my website. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of my site. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
        </p>
        <p>
          You can opt-out of having made your activity on the site available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (gtag.js) from sharing information with Google Analytics about visits activity.
        </p>

        <h2>Google AdSense and Advertising Partners</h2>
        <p>
          Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on this website, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
        </p>
        <p>
          Note that Kush Agrawal has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h2>GDPR Data Protection Rights</h2>
        <p>
          I would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        </p>
        <ul>
          <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
          <li><strong>The right to rectification:</strong> You have the right to request that I correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li><strong>The right to erasure:</strong> You have the right to request that I erase your personal data, under certain conditions.</li>
          <li><strong>The right to restrict processing:</strong> You have the right to request that I restrict the processing of your personal data, under certain conditions.</li>
          <li><strong>The right to object to processing:</strong> You have the right to object to my processing of your personal data, under certain conditions.</li>
          <li><strong>The right to data portability:</strong> You have the right to request that I transfer the data that I have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <p>
          If you make a request, I have one month to respond to you. If you would like to exercise any of these rights, please contact me.
        </p>

        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>
          Under the CCPA, among other rights, California consumers have the right to:
        </p>
        <ul>
          <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
          <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
          <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
        </ul>
        <p>
          If you make a request, I have one month to respond to you. If you would like to exercise any of these rights, please contact me.
        </p>

        <h2>Security of Your Data</h2>
        <p>
          The security of your data is important to me, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While I strive to use commercially acceptable means to protect your Personal Information, I cannot guarantee its absolute security. Information submitted through the contact form is only used to respond to inquiries and is never sold, shared, or leased to third parties.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions or suggestions about this Privacy Policy, do not hesitate to contact me:
        </p>
        <ul>
          <li>By email: <a href="mailto:hello@kushagrawal.in">hello@kushagrawal.in</a></li>
          <li>By visiting the contact page: <a href="/contact">{siteConfig.url.replace("https://", "")}/contact</a></li>
        </ul>
      </div>
    </Container>
  );
}
