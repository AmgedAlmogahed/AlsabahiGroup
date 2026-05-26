import type { Sector } from "./brands";

export type SectorConfig = {
  slug: "pharmaceuticals" | "confectionery";
  name: Sector;
  number: "01" | "02";

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  hero: {
    eyebrow: string;
    h1: string;
    tagline: string;
    heroImageAlt: string;
  };

  context: {
    eyebrow: string;
    h2: string;
    body: string[];
  };

  capabilities: {
    eyebrow: string;
    h2: string;
    blocks: { number: string; title: string; body: string }[];
  };

  brands: {
    eyebrow: string;
    h2: string;
    /** brand slugs from app/lib/brands.ts */
    brandSlugs: string[];
  };

  stats: {
    h2: string;
    items: { value: string; label: string }[];
  };

  cta: {
    eyebrow: string;
    h2: string;
    body: string;
  };
};

export const SECTORS: SectorConfig[] = [
  // ── Pharmaceuticals ────────────────────────────────────────────────────
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    number: "01",
    seo: {
      title: "Pharmaceutical Distribution in Yemen | Alsabahy Group Since 1993",
      description:
        "Authorised pharmaceutical distributor in Yemen since 1993. Cold-chain logistics, Ministry of Health registration, hospital and pharmacy reach. Partner with Alsabahy.",
      keywords: [
        "pharmaceutical distributor Yemen",
        "Yemen MOH registration",
        "cold-chain Yemen",
        "hospital distribution Yemen",
        "وكيل أدوية اليمن",
      ],
    },
    hero: {
      eyebrow: "Sector 01 · Pharmaceuticals",
      h1: "Pharmaceuticals.",
      tagline:
        "Regulated, cold-chain ready, and connected to every pharmacy network that matters in Yemen.",
      heroImageAlt:
        "Pharmaceutical vials and packaging on a cool-toned surface, regulated medical context, natural light",
    },
    context: {
      eyebrow: "The Context",
      h2: "A category that demands continuity.",
      body: [
        "Pharmaceutical distribution in Yemen is not a logistics exercise. It is a regulatory, clinical, and commercial discipline that requires unbroken operation through every phase of the market. Drugs registered today must be re-registered later. Cold-chain integrity must be maintained shipment-by-shipment. Hospitals and pharmacies expect the same supplier today that they expected last year.",
        "Few distributors meet that standard. Fewer still have done it for more than three decades.",
        "The brands we represent in this sector — Lýsi, Esseti Farmaceutici, and Laboratorios Ordesa — share one trait: pharmaceutical-grade manufacturing, exported to markets where the regulatory bar is high. Alsabahy is what allows them to clear that bar in Yemen.",
      ],
    },
    capabilities: {
      eyebrow: "The Operation",
      h2: "What we do for pharmaceutical brands.",
      blocks: [
        {
          number: "01",
          title: "Ministry of Health registration",
          body: "End-to-end MOH dossier preparation, submission, and renewal management. We hold active Marketing Authorisation Holder (MAH) relationships across multiple therapeutic categories.",
        },
        {
          number: "02",
          title: "Import & customs",
          body: "Pharmaceutical-specific import licensing, controlled-substance documentation, and customs clearance — managed by a dedicated regulatory team.",
        },
        {
          number: "03",
          title: "Cold-chain logistics",
          body: "Temperature-controlled warehousing and last-mile delivery for sensitive pharmaceutical products. Continuous-monitoring documentation maintained per batch.",
        },
        {
          number: "04",
          title: "Hospital channel access",
          body: "Direct supply relationships with tertiary hospitals, hospital pharmacies, and specialty clinics across major Yemeni cities.",
        },
        {
          number: "05",
          title: "Pharmacy distribution",
          body: "Nationwide network of pharmacy chains, independent dispensaries, and clinical pharmacies — supplied by Alsabahy's regional warehouses.",
        },
        {
          number: "06",
          title: "Pharmacovigilance support",
          body: "Post-launch product monitoring, adverse-event reporting workflows, and regulatory liaison on behalf of brand partners.",
        },
      ],
    },
    brands: {
      eyebrow: "The Brands",
      h2: "International pharmaceutical brands we represent in Yemen.",
      brandSlugs: ["lysi", "esseti-farmaceutici", "ordesa"],
    },
    stats: {
      h2: "Pharmaceutical reach across Yemen.",
      items: [
        { value: "1,400+", label: "Pharmacies stocked" },
        { value: "85+", label: "Hospitals served" },
        { value: "18", label: "Governorates with active distribution" },
        { value: "4", label: "Regional warehouses with cold-chain capacity" },
        { value: "MOH", label: "Registered across active product range" },
        { value: "30+", label: "Years of pharmaceutical distribution experience" },
      ],
    },
    cta: {
      eyebrow: "For Pharmaceutical Brands",
      h2: "Looking for an authorised agent in Yemen?",
      body: "If you're a pharmaceutical brand evaluating Yemen as a market, let's start the conversation. We respond within 2 business days.",
    },
  },

  // ── Confectionery ──────────────────────────────────────────────────────
  {
    slug: "confectionery",
    name: "Confectionery",
    number: "02",
    seo: {
      title: "Confectionery Distribution in Yemen | Alsabahy Group Since 1993",
      description:
        "Authorised confectionery distributor in Yemen — supermarkets, kiosks, wholesale, and traditional retail. Bringing international sweet brands to Yemeni consumers.",
      keywords: [
        "confectionery distributor Yemen",
        "Yemen retail distribution",
        "Yemen FMCG distributor",
        "Yemen wholesale",
        "وكيل حلويات اليمن",
      ],
    },
    hero: {
      eyebrow: "Sector 02 · Confectionery",
      h1: "Confectionery.",
      tagline:
        "Premium taste from international makers. Trusted shelves across every Yemeni retail format.",
      heroImageAlt:
        "Editorial styling of international confectionery products — wafers, jellies, chocolates — arranged on warm cream surface",
    },
    context: {
      eyebrow: "The Context",
      h2: "Won at the shelf, not in the boardroom.",
      body: [
        "Confectionery is the most-distributed category in Yemen's consumer goods sector. It moves at every price point, in every retail format, and across every demographic. But it is also the category most punished by inconsistent supply. A brand absent from shelves for two weeks loses position to whatever sits beside it. A brand absent for two months loses the relationship with the retailer.",
        "The international confectionery brands that succeed here share a common partner: one that maintains continuous on-shelf presence across supermarkets, hypermarkets, kiosks, wholesalers, and traditional retail simultaneously. Few distributors have built that full-format coverage in Yemen. We are one of them.",
      ],
    },
    capabilities: {
      eyebrow: "The Operation",
      h2: "What we do for confectionery brands.",
      blocks: [
        {
          number: "01",
          title: "Multi-format retail distribution",
          body: "Direct relationships with supermarket chains, hypermarkets, kiosks, traditional retail, and wholesale across 18 governorates. We don't pick channels — we cover them all.",
        },
        {
          number: "02",
          title: "Import & customs",
          body: "Consumer-goods import licensing, customs clearance, and shipping coordination managed end-to-end. Cold-chain handling for chocolate and temperature-sensitive lines.",
        },
        {
          number: "03",
          title: "Trade marketing",
          body: "In-store merchandising, point-of-sale design, sampling, and trade-channel promotional activity executed across retail formats.",
        },
        {
          number: "04",
          title: "Wholesaler & distributor network",
          body: "Relationships with Yemen's leading consumer-goods wholesalers — the channel that supplies thousands of independent retailers we don't reach directly.",
        },
        {
          number: "05",
          title: "Brand-building support",
          body: "Local marketing support including Arabic-language adaptation, in-market activation campaigns, and seasonal trade promotions tied to Ramadan, Eid, and the back-to-school calendar.",
        },
        {
          number: "06",
          title: "Demand forecasting",
          body: "Quarterly demand planning aligned to brand-side production cycles, reducing stockouts and avoiding over-supply during slow periods.",
        },
      ],
    },
    brands: {
      eyebrow: "The Brands",
      h2: "International confectionery brands we represent in Yemen.",
      brandSlugs: ["candyland", "camel-ks", "misbis"],
    },
    stats: {
      h2: "Confectionery reach across Yemen.",
      items: [
        { value: "5,200+", label: "Retail and wholesale points stocked" },
        { value: "18", label: "Governorates with active distribution" },
        { value: "24", label: "Supermarket chains served" },
        { value: "320+", label: "Wholesale partners" },
        { value: "Customs", label: "Import handled" },
        { value: "30+", label: "Years of consumer-goods distribution experience" },
      ],
    },
    cta: {
      eyebrow: "For Confectionery Brands",
      h2: "Looking for an authorised agent in Yemen?",
      body: "If you're a confectionery or snacks brand evaluating Yemen as a market, let's start the conversation. We respond within 2 business days.",
    },
  },
];

import { SECTORS_AR } from "./sectors.ar";

export function getSectors(locale?: string): SectorConfig[] {
  return locale === "ar" ? SECTORS_AR : SECTORS;
}

export function getSector(
  slug: string,
  locale?: string,
): SectorConfig | undefined {
  const source = locale === "ar" ? SECTORS_AR : SECTORS;
  return source.find((s) => s.slug === slug);
}
