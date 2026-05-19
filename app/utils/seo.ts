export const SITE_URL = "https://albersforcongress.com";
export const SITE_NAME = "Troy Albers for Congress";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/troy-albers-for-congress.jpg`;
export const DEFAULT_OG_IMAGE_ALT =
  "Troy Albers for Congress campaign preview image";

export function getCanonicalUrl(pathname: string) {
  return pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
}

export function buildCanonicalLinks(pathname: string) {
  return [{ rel: "canonical", href: getCanonicalUrl(pathname) }];
}

type PageMetaOptions = {
  title: string;
  description: string;
  pathname: string;
};

export function buildPageMeta({
  title,
  description,
  pathname,
}: PageMetaOptions) {
  const canonicalUrl = getCanonicalUrl(pathname);

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: DEFAULT_OG_IMAGE },
    { property: "og:image:alt", content: DEFAULT_OG_IMAGE_ALT },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    { name: "twitter:image:alt", content: DEFAULT_OG_IMAGE_ALT },
  ];
}

export const websiteStructuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "en-US",
});

export const organizationStructuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: DEFAULT_OG_IMAGE,
  email: "GetInvolved@AlbersForCongress.com",
  telephone: "+1-352-792-6215",
  address: {
    "@type": "PostalAddress",
    streetAddress: "201 SE 2nd Ave, Suite 208",
    addressLocality: "Gainesville",
    addressRegion: "FL",
    postalCode: "32601",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+1-352-792-6215",
      email: "GetInvolved@AlbersForCongress.com",
      areaServed: "US-FL",
      availableLanguage: ["en"],
    },
  ],
  areaServed: [
    "Florida's 3rd Congressional District",
    "North Central Florida",
    "Gainesville, Florida",
  ],
});
