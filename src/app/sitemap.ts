import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://najdsadad.com";
  const now = new Date();

  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "daily" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const seoPages = [
    { url: `${baseUrl}/tamweel-shakhsi`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/tamweel-aqari`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/sadad-tathorrat`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/tahseel-doyoon`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/khadamat-simah`, priority: 0.85, changeFrequency: "weekly" as const },
  ];

  const cities = ["jeddah", "makkah", "dammam", "khobar", "taif", "medina"];
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/tamweel-${city}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogSlugs = [
    "real-estate-financing-no-down-payment-riyadh",
    "how-to-clear-simah-defaults-and-settle-loans",
    "corporate-debt-collection-solutions-saudi-arabia",
    "personal-financing-options-up-to-one-million-sar",
  ];
  const blogPages = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...mainPages, ...seoPages, ...cityPages, ...blogPages].map(page => ({
    ...page,
    lastModified: now,
  }));
}
