import { siteConfig } from "./constants";

/**
 * Standardizes a path to generate a clean, canonical URL.
 * Ensures the domain is prefix-free or consistent, removes trailing slashes,
 * and avoids duplicate content issues for Google Search Console.
 */
export function getCanonicalUrl(path: string = ""): string {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const cleanPath = path
    .split("?")[0] // Strip query params
    .replace(/^\//, "") // Strip leading slash
    .replace(/\/$/, ""); // Strip trailing slash

  return cleanPath ? `${baseUrl}/${cleanPath}` : `${baseUrl}/`;
}

/**
 * Generates page-specific SEO metadata helper.
 */
export function getPageMetadata(path: string = "") {
  const canonical = getCanonicalUrl(path);
  return {
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      url: canonical,
    },
  };
}
