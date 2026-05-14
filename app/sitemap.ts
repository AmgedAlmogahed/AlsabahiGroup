import type { MetadataRoute } from "next";

const SITE = "https://alsabahygroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
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
  const now = new Date();
  return routes.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
