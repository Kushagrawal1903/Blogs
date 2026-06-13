import { getAllPosts } from "@/lib/content";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://kushagrawal.in";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Kush Agrawal</title>
    <link>${baseUrl}</link>
    <description>Articles on software development, data analytics, cybersecurity, and writing.</description>
    <language>en-us</language>
    <managingEditor>hello@kushagrawal.in (Kush Agrawal)</managingEditor>
    <webMaster>hello@kushagrawal.in (Kush Agrawal)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <category>${post.category}</category>
      <author>hello@kushagrawal.in (Kush Agrawal)</author>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
