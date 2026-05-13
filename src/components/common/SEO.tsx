import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

export const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "/tatu-logo.png",
  twitterHandle = "@TatuEnterprises",
}: SEOProps) => {
  const siteTitle = "Tatu Enterprises";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} — Software that Powers Growth Beyond Limits`;
  const defaultDescription = "Tatu Enterprises delivers high-performance software engineering, cloud infrastructure, and innovative technology solutions in Kenya and East Africa.";
  const metaDescription = description || defaultDescription;
  const url = canonical ? `https://www.tatuenterprises.com${canonical}` : "https://www.tatuenterprises.com/";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
