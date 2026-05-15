import type { MetadataRoute } from "next";

const SITE = "https://alsabahygroup.com";

const routes = [
  "",
  "/about",
  "/sectors",
  "/sectors/pharmaceuticals",
  "/sectors/confectionery",
  "/brands",
  "/brands/lysi",
  "/brands/esseti-farmaceutici",
  "/brands/candyland",
  "/brands/camel-ks",
  "/brands/misbis",
  "/partner-with-us",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const p of routes) {
    entries.push({
      url: `${SITE}${p}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: p === "" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${SITE}${p}`,
          ar: `${SITE}/ar${p}`,
        },
      },
    });
    entries.push({
      url: `${SITE}/ar${p}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: p === "" ? 0.9 : 0.6,
    });
  }
  return entries;
}
