export type Sector = "Pharmaceuticals" | "Confectionery";

export type Brand = {
  slug: string;
  name: string;
  displayName?: string;
  country: string;
  countryFlag: string;
  sector: Sector;
  partnershipYear: string;

  /** One-liner used on homepage brand-list cards (04_Homepage_Content.md §4). Distinct from hero.tagline. */
  summary: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  schema: Record<string, unknown>;

  /** Per-brand color tint, applied to hero band only — chrome stays consistent (theme spec §Color). */
  tint: string;

  /**
   * Image manifest. Paths under /public, e.g. "/brands/lysi/hero.jpg".
   * Any field left undefined falls back to a PhotoPlate placeholder with the
   * relevant alt-text caption. Drop a path back to undefined to remove that
   * specific image (e.g. if brand permission is later revoked).
   */
  images?: {
    hero?: string;
    logo?: string;
    /** Keyed by product name — must match a name in gallery.products. */
    products?: Record<string, string>;
    /** Optional in-context shot for the "In Yemen" section. */
    context?: string;
  };

  hero: {
    eyebrow: string;
    tagline: string;
    heroImageAlt: string;
  };

  heritage: {
    eyebrow: string;
    h2: string;
    body: string[];
    timeline: { label: string; description: string }[];
  };

  partnership: {
    eyebrow: string;
    h2: string;
    body: string[];
    pullQuote: string;
  };

  gallery: {
    h2: string;
    intro: string;
    filterChips: string[];
    products: { name: string; category: string; desc: string }[];
    note?: string;
  };

  inYemen: {
    eyebrow: string;
    h2: string;
    body: string;
    stats: { value: string; label: string }[];
  };

  continue: {
    relatedSlugs: string[];
    externalLinkLabel: string;
    externalLinkUrl: string;
  };
};

import { BRANDS_AR } from "./brands.ar";

const BRANDS_EN: Brand[] = [
  // ── 1. Lýsi ────────────────────────────────────────────────────────────
  {
    slug: "lysi",
    name: "Lýsi",
    country: "Iceland",
    countryFlag: "🇮🇸",
    sector: "Pharmaceuticals",
    partnershipYear: "[year]",
    tint: "#3a6e88", // North Atlantic blue
    summary:
      "Founded in Reykjavík in 1938, Lýsi is the world's largest producer of fish oil and omega-3 nutritional products. We represent the full Lýsi range across Yemen.",
    images: {
      hero: "/brands/lysi/hero.jpg",
      logo: "/brands/lysi/logo.svg",
      context: "/brands/lysi/context.jpg",
      products: {
        "Lýsi Cod Liver Oil — Original": "/brands/lysi/product-cod-liver-original.jpg",
        "Lýsi Cod Liver Oil — Lemon": "/brands/lysi/product-cod-liver-lemon.jpg",
        "Omega-3 Capsules": "/brands/lysi/product-omega3-capsules.jpg",
        "Omega-3 for Children": "/brands/lysi/product-omega3-children.jpg",
        "Lýsi Multivitamin": "/brands/lysi/product-multivitamin.jpg",
        "Vitamin D3 Drops": "/brands/lysi/product-vitamin-d3.jpg",
      },
    },
    seo: {
      title: "Lýsi in Yemen — Premium Icelandic Omega-3 | Alsabahy Group",
      description:
        "Alsabahy Group is the authorized agent for Lýsi in Yemen — Iceland's world-leading producer of cod liver oil and omega-3 nutritional products since 1938.",
      keywords: [
        "Lýsi Yemen",
        "cod liver oil Yemen",
        "omega-3 Yemen",
        "Icelandic fish oil distributor",
      ],
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: "Lýsi",
      logo: "https://alsabahygroup.com/brands/lysi/logo.png",
      description:
        "World-leading producer of cod liver oil and omega-3 nutritional products, founded 1938 in Reykjavík, Iceland.",
      foundingDate: "1938",
      foundingLocation: "Reykjavík, Iceland",
      url: "https://lysi.com",
    },
    hero: {
      eyebrow: "Pharmaceuticals · Iceland · Authorized agent since [year]",
      tagline:
        "The world's leading producer of marine-derived omega-3, brought to Yemen by Alsabahy Group.",
      heroImageAlt:
        "Icelandic coastline at golden hour with Lýsi cod liver oil bottle in foreground, packaging detail visible",
    },
    heritage: {
      eyebrow: "The Story",
      h2: "Founded in Reykjavík, 1938.",
      body: [
        "Lýsi was established on 10 January 1938 by brothers Tryggvi and Thórður Ólafsson, with one ambition: to become Iceland's largest cod liver oil producer. Today, more than 85 years later, it remains exactly that — a third-generation, women-owned family business now led by the founders' granddaughter.",
        "The company's principal product, cod liver oil, draws on Iceland's purest marine resources. Naturally rich in omega-3 fatty acids, vitamin A, and vitamin D, it supports brain development, immune function, and the central nervous system. In the 1950s, Lýsi moved beyond bulk export into consumer packaging — making Icelandic fish oil a household name across Europe and Asia.",
        "Since 2005, Lýsi has produced its full range in a uniquely engineered facility in Reykjavík with 13,000 tons of annual capacity, supplying both its own branded products and private-label clients across the world's leading pharmaceutical and nutraceutical companies.",
      ],
      timeline: [
        { label: "1938", description: "Founded in Reykjavík by the Ólafsson brothers" },
        { label: "1950s", description: "First consumer-packaged cod liver oil" },
        { label: "2005", description: "New facility opens, 13,000 tons annual capacity" },
        { label: "Today", description: "World's leading marine-omega producer, third-generation family ownership" },
      ],
    },
    partnership: {
      eyebrow: "The Partnership",
      h2: "Why we represent Lýsi in Yemen.",
      body: [
        "In a category where most omega-3 products are commodity, Lýsi stands apart on origin and standard. Every bottle is traceable to the cold North Atlantic. Every batch meets pharmaceutical-grade specifications. The brand is one of a small number worldwide certified to supply both pharmacy and clinical-nutrition channels.",
        "Alsabahy became the authorized agent for Lýsi in Yemen in [year]. We chose Lýsi because Yemen's pharmacy customers — and the doctors who recommend to them — respond to verifiable quality. We chose Lýsi because in a market where trust is earned slowly and lost quickly, a brand with 85+ years of unbroken heritage is the kind of partner worth building around.",
        "In Yemen, we handle every step: import licensing, Ministry of Health registration, cold-chain handling, pharmacy distribution, and the everyday relationships that keep Lýsi on the right shelves in front of the right consumers.",
      ],
      pullQuote:
        "Lýsi is one of the very few omega-3 brands that earns the right to be called pharmaceutical-grade. That distinction is what Yemen's pharmacists recognize.",
    },
    gallery: {
      h2: "The Lýsi range in Yemen.",
      intro:
        "From the original cod liver oil to specialised omega-3 formulations for children, athletes, and clinical nutrition.",
      filterChips: ["All", "Cod Liver Oil", "Omega-3", "Children's Range", "Multivitamins", "Specialty"],
      products: [
        {
          name: "Lýsi Cod Liver Oil — Original",
          category: "Cod Liver Oil",
          desc: "Cold-pressed Icelandic cod liver oil. The flagship product, naturally rich in omega-3, vitamin A, and vitamin D.",
        },
        {
          name: "Lýsi Cod Liver Oil — Lemon",
          category: "Cod Liver Oil",
          desc: "The same pharmaceutical-grade cod liver oil with a clean citrus finish, formulated for daily ease.",
        },
        {
          name: "Omega-3 Capsules",
          category: "Omega-3",
          desc: "Concentrated marine omega-3 in soft gel capsules — for adults prioritising convenience without compromise.",
        },
        {
          name: "Omega-3 for Children",
          category: "Children's Range",
          desc: "Age-appropriate omega-3 formulations supporting brain, vision, and immune development in children.",
        },
        {
          name: "Lýsi Multivitamin",
          category: "Multivitamins",
          desc: "Comprehensive daily vitamin and mineral support, built on the Lýsi quality standard.",
        },
        {
          name: "Vitamin D3 Drops",
          category: "Specialty",
          desc: "Pure vitamin D3 drops formulated for infants, children, and adults — produced in Iceland under pharmacopoeia standards.",
        },
      ],
      note: "Real product list to be confirmed with Lýsi and Alsabahy. The six above are based on Lýsi's published range; final inclusion depends on what Alsabahy actively distributes in Yemen.",
    },
    inYemen: {
      eyebrow: "On the shelf",
      h2: "Lýsi across Yemen.",
      body: "Lýsi is available in [X] pharmacies across [X] Yemeni governorates, supplied directly by Alsabahy's cold-chain distribution network. We hold full Ministry of Health registration for the range and maintain inventory across [X] regional warehouses for nationwide same-week availability.",
      stats: [
        { value: "[X]", label: "Pharmacies stocked" },
        { value: "[X]", label: "Governorates served" },
        { value: "MOH", label: "Registered" },
        { value: "Cold-chain", label: "Handled" },
      ],
    },
    continue: {
      relatedSlugs: ["esseti-farmaceutici", "candyland"],
      externalLinkLabel: "Visit Lýsi's official website",
      externalLinkUrl: "https://lysi.com",
    },
  },

  // ── 2. Esseti Farmaceutici ─────────────────────────────────────────────
  {
    slug: "esseti-farmaceutici",
    name: "Esseti Farmaceutici",
    country: "Italy",
    countryFlag: "🇮🇹",
    sector: "Pharmaceuticals",
    partnershipYear: "[year]",
    tint: "#7a8f5c", // Italian olive
    summary:
      "Italian pharmaceutical manufacturer producing medical and dietary supplement products to European pharmacopoeia standards — available in Yemen exclusively through Alsabahy.",
    images: {
      hero: "/brands/esseti-farmaceutici/hero.jpg",
      logo: "/brands/esseti-farmaceutici/logo.png",
      context: "/brands/esseti-farmaceutici/facility.jpg",
      products: {
        "Injectable Cephalosporins": "/brands/esseti-farmaceutici/product-injectable-cephalosporins.jpg",
        "Sterile Liquid Injectables": "/brands/esseti-farmaceutici/product-liquid-injectables.jpg",
        "Generic Drug Range": "/brands/esseti-farmaceutici/product-generics.jpg",
        "Specialty Pharmaceuticals": "/brands/esseti-farmaceutici/product-specialty.jpg",
      },
    },
    seo: {
      title: "Esseti Farmaceutici in Yemen | Italian Pharma | Alsabahy Group",
      description:
        "Authorized agent for Esseti Farmaceutici in Yemen — Italian pharmaceutical manufacturer producing sterile injectables and generic drugs to European standards since 1956.",
      keywords: [
        "Esseti Farmaceutici Yemen",
        "Italian pharma distributor Yemen",
        "sterile injectables Yemen",
        "generic drugs Yemen",
      ],
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: "Esseti Farmaceutici",
      logo: "https://alsabahygroup.com/brands/esseti-farmaceutici/logo.png",
      description:
        "Italian pharmaceutical company specialising in sterile injectable drugs and generic medications, founded 1956 in Pomezia, Italy.",
      foundingDate: "1956",
      foundingLocation: "Pomezia, Italy",
      url: "https://www.essetifarmaceutici.it",
    },
    hero: {
      eyebrow: "Pharmaceuticals · Italy · Authorized agent since [year]",
      tagline:
        "Italian pharmaceutical heritage. Sterile-grade manufacturing. Available in Yemen exclusively through Alsabahy.",
      heroImageAlt:
        "Esseti Farmaceutici sterile injectable vials in clinical packaging, soft natural light, label detail visible",
    },
    heritage: {
      eyebrow: "The Story",
      h2: "A Pomezia institution since 1956.",
      body: [
        "Esseti Farmaceutici was founded in 1956 in Pomezia, Italy — a town in the pharmaceutical heartland just south of Rome. For more than six decades, the company has built its reputation on a single principle: quality manufacturing, delivered through long-standing relationships.",
        "The business operates as two complementary entities. Esseti Farmaceutici Trading holds Marketing Authorisations across multiple therapeutic areas, registering and commercialising pharmaceutical products with a particular focus on Asian and Middle Eastern markets — territories Esseti has served continuously for more than 60 years. Esseti Farmaceutici CDMO is a Contract Development and Manufacturing Organisation specialising in sterile drug production: injectable cephalosporins powder filling, terminal-sterilisation injectable liquid filling, and aseptic processing.",
        "Esseti's manufacturing follows European pharmacopoeia standards and is audited by partner regulators across multiple geographies. The company's working motto — \"Quality and Relationships reliability\" — captures both its technical posture and its commercial philosophy.",
      ],
      timeline: [
        { label: "1956", description: "Founded in Pomezia, Italy" },
        { label: "1960s+", description: "Begins decades-long export presence across Asia" },
        { label: "Today", description: "Trading division + CDMO division operating in parallel" },
        { label: "European pharmacopoeia", description: "Full compliance maintained across product range" },
      ],
    },
    partnership: {
      eyebrow: "The Partnership",
      h2: "Why we represent Esseti Farmaceutici in Yemen.",
      body: [
        "Sterile pharmaceutical distribution in Yemen requires three things simultaneously: a manufacturer with verifiable European manufacturing standards, an importer with Ministry of Health registration capability, and a distributor with cold-chain logistics and hospital access. The combination is rare. Esseti and Alsabahy have built it.",
        "Alsabahy became the authorized agent for Esseti Farmaceutici in Yemen in [year]. Esseti chose Alsabahy because Yemen's healthcare system — particularly its hospital pharmacies and tertiary care institutions — demands documented compliance at every step. Alsabahy chose Esseti because Italian-manufactured sterile drugs to European pharmacopoeia carry weight with the prescribers who decide what reaches the patient.",
        "Across Yemen, Esseti products are imported under full customs documentation, registered with the Ministry of Health, warehoused under controlled conditions, and distributed directly to hospitals, pharmacy chains, and tertiary care facilities.",
      ],
      pullQuote:
        "Sterile pharmaceuticals don't tolerate compromise — not in manufacturing, not in transport, not at the shelf. Esseti understands that. So do we.",
    },
    gallery: {
      h2: "The Esseti range in Yemen.",
      intro:
        "Sterile injectables, generic pharmaceuticals, and specialty therapeutic-area products manufactured in Italy.",
      filterChips: ["All", "Injectables", "Generic Pharmaceuticals", "Therapeutic Specialty"],
      products: [
        {
          name: "Injectable Cephalosporins",
          category: "Injectables",
          desc: "Sterile cephalosporin powder filled in vials under aseptic conditions — antibiotic therapy for hospital and clinical use.",
        },
        {
          name: "Sterile Liquid Injectables",
          category: "Injectables",
          desc: "Terminal-sterilisation and aseptic-filled liquid injectables in ampoules for parenteral administration.",
        },
        {
          name: "Generic Drug Range",
          category: "Generic Pharmaceuticals",
          desc: "European-manufactured generics across cardiovascular, antibiotic, anti-inflammatory, and metabolic therapeutic areas.",
        },
        {
          name: "Specialty Pharmaceuticals",
          category: "Therapeutic Specialty",
          desc: "Niche therapeutic-area products held under Esseti Marketing Authorisations and distributed via Alsabahy's hospital network in Yemen.",
        },
      ],
      note: "Esseti distributes across many therapeutic areas. Final product list and category structure to be confirmed with Esseti's commercial team before publish.",
    },
    inYemen: {
      eyebrow: "In hospitals and pharmacies",
      h2: "Esseti Farmaceutici across Yemen.",
      body: "Esseti products are distributed across Yemen's tertiary hospitals, pharmacy chains, and clinical pharmacy networks. All products are imported under full customs and Ministry of Health workflows, stored under controlled conditions in Alsabahy's regional warehouses, and delivered through our temperature-monitored fleet.",
      stats: [
        { value: "[X]", label: "Hospital and pharmacy points stocked" },
        { value: "[X]", label: "Governorates served" },
        { value: "MOH", label: "Registered" },
        { value: "Hospital-grade", label: "Handling" },
      ],
    },
    continue: {
      relatedSlugs: ["lysi"],
      externalLinkLabel: "Visit Esseti Farmaceutici's official website",
      externalLinkUrl: "https://www.essetifarmaceutici.it",
    },
  },

  // ── 3. CandyLand ───────────────────────────────────────────────────────
  {
    slug: "candyland",
    name: "CandyLand",
    country: "Pakistan",
    countryFlag: "🇵🇰",
    sector: "Confectionery",
    partnershipYear: "[year]",
    tint: "#c84a3a", // South Asian confectionery red
    summary:
      "One of South Asia's leading confectionery brands, distributed across Yemen's supermarket, wholesale, and traditional retail channels.",
    images: {
      hero: "/brands/candyland/hero.jpg",
      logo: "/brands/candyland/logo.png",
      context: "/brands/candyland/context.jpg",
      products: {
        // Funny Bunny + Puffs not yet sourced — fall back to PhotoPlate placeholder.
        "Chili Mili": "/brands/candyland/product-chili-mili.png",
        "ABC Jelly": "/brands/candyland/product-abc-jelly.png",
        "Fanty": "/brands/candyland/product-fanty.png",
        "Chocolate Range": "/brands/candyland/product-chocolate.png",
      },
    },
    seo: {
      title: "CandyLand in Yemen | South Asian Confectionery | Alsabahy Group",
      description:
        "Authorized agent for CandyLand in Yemen — South Asia's leading confectionery brand, exported to 30+ countries. Distributed by Alsabahy across Yemeni retail.",
      keywords: [
        "CandyLand Yemen",
        "Pakistani confectionery Yemen",
        "Chili Mili Yemen",
        "jellies Yemen",
      ],
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: "CandyLand",
      logo: "https://alsabahygroup.com/brands/candyland/logo.png",
      description:
        "South Asia's leading confectionery brand, part of Ismail Industries Limited. Manufactures jellies, lollipops, marshmallows, and chocolate confectionery exported to 30+ countries.",
      url: "https://thecandylandcompany.co.uk",
    },
    hero: {
      eyebrow: "Confectionery · Pakistan · Authorized agent since [year]",
      tagline:
        "South Asia's leading confectionery brand. On Yemeni shelves through Alsabahy.",
      heroImageAlt:
        "Colorful assortment of CandyLand jellies, lollipops, and marshmallows arranged on cream surface, soft natural light",
    },
    heritage: {
      eyebrow: "The Story",
      h2: "A South Asian confectionery powerhouse.",
      body: [
        "CandyLand is the flagship confectionery brand of Ismail Industries Limited — a Pakistani conglomerate that has shaped the country's sugar confectionery category for decades. Today, CandyLand is recognised as the market leader in Pakistan's confectionery sector, holding roughly a quarter of the country's market share and producing some of South Asia's most iconic candy brands.",
        "From flagship product lines like Chili Mili and ABC Jelly to children's favourites Funny Bunny Lollipops and Puffs Marshmallows, the company's portfolio spans jellies, chocolates, marshmallows, lollipops, and candy canes — manufactured at scale and exported to more than 30 countries across the Middle East, Asia, Africa, and beyond.",
        "The CandyLand Company UK was established to extend the brand's distribution footprint internationally, with a focus on European and global wholesale channels. In Yemen, the full CandyLand portfolio is distributed by Alsabahy Group.",
      ],
      timeline: [
        { label: "Ismail Industries", description: "Parent company, Pakistan's confectionery leader" },
        { label: "~23%", description: "CandyLand's share of the Pakistani confectionery market" },
        { label: "30+ countries", description: "Active export footprint" },
        { label: "Iconic brands", description: "Chili Mili · ABC Jelly · Funny Bunny · Puffs · Fanty" },
      ],
    },
    partnership: {
      eyebrow: "The Partnership",
      h2: "Why we represent CandyLand in Yemen.",
      body: [
        "Confectionery is a category that rewards distribution depth more than almost any other. The brands that win are not necessarily the most premium — they are the ones consistently available across supermarkets, kiosks, school stalls, and the traditional retail that still drives most of Yemen's consumer goods volume.",
        "Alsabahy became the authorized agent for CandyLand in Yemen in [year]. We represent the brand because it solves the equation that matters in Yemen: recognisable flavour profiles, accessible price points, and product formats that work in the country's full retail mix — from urban supermarkets to small-format trade. CandyLand chose Alsabahy because we deliver to all of it.",
        "In Yemen, we manage import licensing, customs clearance, in-market branding support, retail merchandising, and the day-to-day relationships with wholesalers, supermarket buyers, and traditional retailers across [X] governorates.",
      ],
      pullQuote:
        "Confectionery is won in the last mile. CandyLand is on more Yemeni shelves than anyone realises — that is the result of three decades of distribution work.",
    },
    gallery: {
      h2: "The CandyLand range in Yemen.",
      intro:
        "Iconic South Asian confectionery — jellies, lollipops, marshmallows, and chocolate sweets — available across Yemen's retail channels.",
      filterChips: ["All", "Jellies", "Lollipops", "Marshmallows", "Chocolate", "Hard Candy"],
      products: [
        {
          name: "Chili Mili",
          category: "Jellies",
          desc: "The brand's flagship jelly — recognisable across South Asia and now a fixture in Yemeni retail.",
        },
        {
          name: "ABC Jelly",
          category: "Jellies",
          desc: "Letter-shaped fruit jellies in a children's-favourite format.",
        },
        {
          name: "Funny Bunny Lollipops",
          category: "Lollipops",
          desc: "Multi-flavour lollipops with character branding aimed at younger consumers.",
        },
        {
          name: "Puffs Marshmallows",
          category: "Marshmallows",
          desc: "Soft marshmallow confectionery in multiple flavour profiles.",
        },
        {
          name: "Fanty",
          category: "Hard Candy",
          desc: "Fruit-flavoured hard candies in accessible price-point packaging.",
        },
        {
          name: "Chocolate Range",
          category: "Chocolate",
          desc: "CandyLand's chocolate confectionery line — eclairs, bars, and coated centres.",
        },
      ],
      note: "Final SKU list to be confirmed with CandyLand and Alsabahy. CandyLand's product portfolio is large — feature 6–8 most-distributed lines in Yemen.",
    },
    inYemen: {
      eyebrow: "On retail shelves nationwide",
      h2: "CandyLand across Yemen.",
      body: "CandyLand products reach Yemeni consumers through supermarkets, hypermarkets, traditional retail, kiosks, and wholesale channels across [X] governorates. Alsabahy supplies and merchandises the range, working with retailers nationwide to keep shelves stocked and in-store presence consistent.",
      stats: [
        { value: "[X]", label: "Retail and wholesale points" },
        { value: "[X]", label: "Governorates served" },
        { value: "Multi-format", label: "Retail distribution" },
        { value: "Customs", label: "Import handled" },
      ],
    },
    continue: {
      relatedSlugs: ["camel-ks", "misbis"],
      externalLinkLabel: "Visit The CandyLand Company",
      externalLinkUrl: "https://thecandylandcompany.co.uk",
    },
  },

  // ── 4. Camel L.L.C. ────────────────────────────────────────────────────
  {
    slug: "camel-ks",
    name: "Camel",
    displayName: "Camel L.L.C.",
    country: "Kosovo",
    countryFlag: "🇽🇰",
    sector: "Confectionery",
    partnershipYear: "[year]",
    tint: "#a87642", // wafer / caramel
    summary:
      "Kosovo-based manufacturer of Mando wafers and Flipsy snacks, headquartered in Mitrovica and exported across the Balkans, Middle East, and Europe.",
    images: {
      hero: "/brands/camel-ks/hero.jpg",
      logo: "/brands/camel-ks/logo.png",
      products: {
        "Mando Wafer 45g — Cocoa & Hazelnut": "/brands/camel-ks/product-mando-classic-45g.png",
        "Mando Skinny Wafers 140g": "/brands/camel-ks/product-mando-skinny.png",
        "Mando Mini Wafers — Lemon": "/brands/camel-ks/product-mando-skinny-lemon.png",
        "Flipsy Snacks": "/brands/camel-ks/product-flipsy-maximus-flaminghot.png",
        "Maximus Flipsy": "/brands/camel-ks/product-flipsy-maximus-cheese.png",
        "Flipsy Ringo": "/brands/camel-ks/product-flipsy-ringo-pizza.png",
      },
    },
    seo: {
      title: "Camel in Yemen — Kosovo Wafers & Snacks | Alsabahy Group",
      description:
        "Authorized agent for Camel in Yemen — Kosovo-based confectionery manufacturer producing Mando wafers and Flipsy snacks. Distributed across Yemen by Alsabahy.",
      keywords: [
        "Camel Kosovo Yemen",
        "Mando wafers Yemen",
        "Flipsy snacks Yemen",
        "Kosovo confectionery distributor Yemen",
      ],
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: "Camel",
      alternateName: "Camel L.L.C.",
      logo: "https://alsabahygroup.com/brands/camel-ks/logo.png",
      description:
        "Kosovo-based confectionery and snack manufacturer producing Mando wafers and Flipsy snack brands, headquartered in Mitrovica.",
      foundingLocation: "Mitrovica, Kosovo",
      url: "https://www.camel-ks.com",
    },
    hero: {
      eyebrow: "Confectionery · Kosovo · Authorized agent since [year]",
      tagline:
        "Love and snacks, together in a bag. Kosovo's wafer and snack maker, on Yemeni shelves through Alsabahy.",
      heroImageAlt:
        "Camel Mando wafers and Flipsy snack packs arranged on cream surface, packaging detail visible",
    },
    heritage: {
      eyebrow: "The Story",
      h2: "Crafted in Mitrovica, Kosovo.",
      body: [
        "Camel L.L.C. is a Kosovo-based confectionery and snack manufacturer headquartered in Mitrovica's industrial zone, producing two of the region's most recognisable consumer brands: Mando wafers and Flipsy snacks.",
        "Camel's product philosophy is straightforward — accessible, multi-format confectionery and savoury snacks built for everyday consumption. The Mando line spans the wafer category in full: classic 45g chocolate-and-hazelnut formats, skinny wafers in cocoa, hazelnut, vanilla, and lemon, plus mini wafer packs designed for shared and family-format consumption. The Flipsy brand extends the company into corn-based and extruded snacks, with sub-lines including Maximus and Flipsy Ringo.",
        "The company exports across the Balkans, the Middle East, and parts of Europe — bringing Kosovo-manufactured confectionery and snacks to international retail under a single tagline: \"Love & Snacks Together In a Bag.\"",
      ],
      timeline: [
        { label: "Kosovo", description: "Founded and headquartered in Mitrovica" },
        { label: "Mando", description: "Flagship wafer brand spanning skinny, classic, and mini formats" },
        { label: "Flipsy", description: "Snack brand including Maximus and Ringo lines" },
        { label: "Export", description: "Balkans, Middle East, and European distribution" },
      ],
    },
    partnership: {
      eyebrow: "The Partnership",
      h2: "Why we represent Camel in Yemen.",
      body: [
        "Wafers and extruded snacks are two of Yemen's most reliable confectionery sub-categories — they move at every price point, in every retail format, and across every demographic. The brands that win here are the ones that combine accessible pricing with consistent supply and a recognisable on-shelf identity.",
        "Alsabahy became the authorized agent for Camel in Yemen in [year]. We represent the brand because Mando and Flipsy fit the country's retail mix end-to-end: hypermarkets, supermarkets, kiosks, traditional retail, and wholesale all carry one or both lines. Camel chose Alsabahy because our distribution reach matches their export ambitions in the region.",
        "In Yemen, we handle import licensing, customs clearance, retail merchandising, and the wholesale and trade relationships that keep Mando and Flipsy on shelves nationwide.",
      ],
      pullQuote:
        "Wafers and snacks are won by being on the shelf every week, not every month. Camel's production discipline and our distribution rhythm are aligned on exactly that.",
    },
    gallery: {
      h2: "The Camel range in Yemen.",
      intro:
        "Mando wafers and Flipsy snacks — produced in Mitrovica, distributed across Yemen by Alsabahy.",
      filterChips: ["All", "Wafers", "Snacks", "Mini Formats"],
      products: [
        {
          name: "Mando Wafer 45g — Cocoa & Hazelnut",
          category: "Wafers",
          desc: "The classic Mando wafer, in standard and chocolate-coated variants. The flagship 45g format.",
        },
        {
          name: "Mando Skinny Wafers 140g",
          category: "Wafers",
          desc: "Multi-pack thin wafers available in cocoa, hazelnut, and vanilla flavour profiles.",
        },
        {
          name: "Mando Mini Wafers — Lemon",
          category: "Mini Formats",
          desc: "Family- and share-format mini wafer packs in lemon and other flavours.",
        },
        {
          name: "Flipsy Snacks",
          category: "Snacks",
          desc: "Corn-based extruded snacks under the Flipsy brand — multi-format packaging across price tiers.",
        },
        {
          name: "Maximus Flipsy",
          category: "Snacks",
          desc: "Premium Flipsy sub-line, larger format and richer flavour profiles.",
        },
        {
          name: "Flipsy Ringo",
          category: "Snacks",
          desc: "Ring-shaped extruded snack variant, multi-flavour.",
        },
      ],
      note: "Final SKU list and product imagery to be sourced from Camel's press kit or directly from the manufacturer at info@camel-ks.com.",
    },
    inYemen: {
      eyebrow: "On retail shelves nationwide",
      h2: "Camel across Yemen.",
      body: "Camel's Mando and Flipsy products reach Yemeni consumers across supermarkets, hypermarkets, traditional retail, kiosks, and wholesale channels — covering [X] governorates. Alsabahy supplies, merchandises, and maintains the trade relationships that keep both brands consistently on shelf.",
      stats: [
        { value: "[X]", label: "Retail and wholesale points" },
        { value: "[X]", label: "Governorates served" },
        { value: "Customs", label: "Import handled" },
        { value: "Trade", label: "Marketing supported" },
      ],
    },
    continue: {
      relatedSlugs: ["candyland", "misbis"],
      externalLinkLabel: "Visit Camel",
      externalLinkUrl: "https://www.camel-ks.com",
    },
  },

  // ── 5. Misbis ──────────────────────────────────────────────────────────
  {
    slug: "misbis",
    name: "Misbis",
    country: "Turkey",
    countryFlag: "🇹🇷",
    sector: "Confectionery",
    partnershipYear: "[year]",
    tint: "#c0492f", // Turkish red
    summary:
      "Turkish family-owned confectionery company producing biscuits, wafers, and chocolate from Gaziantep and Istanbul facilities, founded 1995.",
    images: {
      // NOTE: Misbis assets are low-res wrapper scans from a hobbyist collector site —
      // the brand has minimal online presence. Recommend commissioning proper product
      // photography or requesting a press kit from Misbis directly before publish.
      hero: "/brands/misbis/hero.jpg",
      logo: "/brands/misbis/logo.png",
      products: {
        "Misbis Biscuit Range": "/brands/misbis/product-biscuit.jpg",
        "Misbis Wafers": "/brands/misbis/product-wafer.jpg",
        "Misbis Chocolate Bars": "/brands/misbis/product-chocolate-bar.jpg",
        "Misbis Confectionery": "/brands/misbis/product-confectionery.jpg",
      },
    },
    seo: {
      title: "Misbis in Yemen — Turkish Chocolate & Biscuits | Alsabahy Group",
      description:
        "Authorized agent for Misbis in Yemen — Turkish family confectionery and chocolate producer from Gaziantep and Istanbul, since 1995. Distributed by Alsabahy.",
      keywords: [
        "Misbis Yemen",
        "Turkish chocolate Yemen",
        "Turkish biscuits distributor Yemen",
        "Gaziantep confectionery Yemen",
      ],
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: "Misbis",
      logo: "https://alsabahygroup.com/brands/misbis/logo.png",
      description:
        "Turkish family-owned confectionery company producing biscuits, wafers, and chocolate from facilities in Gaziantep and Istanbul, since 1995.",
      foundingDate: "1995",
      foundingLocation: "Gaziantep, Turkey",
      url: "https://www.chocolatewrappers.info/Asie/Misbis/misbis.htm",
    },
    hero: {
      eyebrow: "Confectionery · Turkey · Authorized agent since [year]",
      tagline:
        "Turkish family confectionery — from Gaziantep and Istanbul to Yemeni shelves.",
      heroImageAlt:
        "Misbis chocolate and biscuit products arranged on warm-toned surface, packaging detail visible",
    },
    heritage: {
      eyebrow: "The Story",
      h2: "A Turkish family business, since 1995.",
      body: [
        "Misbis is a Turkish family-owned confectionery company founded in 1995. The business operates across two of Turkey's most significant food-manufacturing geographies: Gaziantep — long considered the country's confectionery and biscuit capital — and Istanbul, where the company runs its chocolate and wafer production.",
        "The dual-city manufacturing footprint reflects a specific philosophy: each product category is made where the craft tradition runs deepest. Biscuits and confectionery in Gaziantep, where centuries of sweets-making expertise have shaped Turkey's sugar category. Chocolate and wafers in Istanbul, where the country's modern confectionery industry is concentrated.",
        "Misbis exports across the Middle East, Asia, and Africa — distributed in Yemen exclusively through Alsabahy Group.",
      ],
      timeline: [
        { label: "1995", description: "Founded as a family confectionery business in Gaziantep" },
        { label: "1995", description: "Chocolate and wafer production established in Istanbul" },
        { label: "Today", description: "Dual-city manufacturing, multi-continent export footprint" },
        { label: "Family-owned", description: "Independent ownership maintained" },
      ],
    },
    partnership: {
      eyebrow: "The Partnership",
      h2: "Why we represent Misbis in Yemen.",
      body: [
        "Turkish confectionery has a specific commercial advantage in Yemen: cultural familiarity. Turkish biscuits, wafers, and chocolate occupy a recognisable category for Yemeni consumers and are accepted easily at every retail price point. Misbis sits squarely in this opportunity — a family-run manufacturer with the production scale to supply consistently and the heritage credentials to support brand-building.",
        "Alsabahy became the authorized agent for Misbis in Yemen in [year]. The partnership pairs Misbis's manufacturing depth with our retail-channel breadth — wholesalers, supermarkets, traditional retail, and kiosk distribution across the country.",
        "We handle import, customs, in-market presence, and retailer relationships nationwide.",
      ],
      pullQuote:
        "Turkish confectionery understands the Yemeni palate. Misbis understands its responsibility to deliver consistently. That combination is rare.",
    },
    gallery: {
      h2: "The Misbis range in Yemen.",
      intro:
        "Biscuits, wafers, and chocolate products from Misbis's Turkish manufacturing facilities — distributed across Yemen by Alsabahy.",
      filterChips: ["All", "Biscuits", "Wafers", "Chocolate", "Confectionery"],
      products: [
        {
          name: "Misbis Biscuit Range",
          category: "Biscuits",
          desc: "Gaziantep-manufactured biscuit lines — sweet, salty, and filled formats.",
        },
        {
          name: "Misbis Wafers",
          category: "Wafers",
          desc: "Istanbul-produced wafers in chocolate, vanilla, and hazelnut profiles.",
        },
        {
          name: "Misbis Chocolate Bars",
          category: "Chocolate",
          desc: "Family-recipe chocolate confectionery in multi-format packaging.",
        },
        {
          name: "Misbis Confectionery",
          category: "Confectionery",
          desc: "General sugar confectionery — candies, jellies, and seasonal lines.",
        },
      ],
      note: "Final SKU list and category structure to be confirmed with Misbis's export team. Product imagery to be sourced from Misbis press kit.",
    },
    inYemen: {
      eyebrow: "On retail shelves nationwide",
      h2: "Misbis across Yemen.",
      body: "Misbis products are distributed across Yemen's retail channels — supermarkets, kiosks, traditional trade, and wholesale — in [X] governorates. Alsabahy handles every step of the chain from customs to merchandising.",
      stats: [
        { value: "[X]", label: "Retail and wholesale points" },
        { value: "[X]", label: "Governorates served" },
        { value: "Customs", label: "Import handled" },
        { value: "Trade", label: "Marketing supported" },
      ],
    },
    continue: {
      relatedSlugs: ["candyland", "camel-ks"],
      externalLinkLabel: "Read more about Misbis",
      externalLinkUrl: "https://www.chocolatewrappers.info/Asie/Misbis/misbis.htm",
    },
  },
];

/** Back-compat default export — points at English. New callers should pass locale to getBrand/getBrands. */
export const BRANDS = BRANDS_EN;

export function getBrands(locale?: string): Brand[] {
  return locale === "ar" ? BRANDS_AR : BRANDS_EN;
}

export function getBrand(slug: string, locale?: string): Brand | undefined {
  const source = locale === "ar" ? BRANDS_AR : BRANDS_EN;
  return source.find((b) => b.slug === slug);
}

export function getRelatedBrands(slug: string, locale?: string): Brand[] {
  const brand = getBrand(slug, locale);
  if (!brand) return [];
  return brand.continue.relatedSlugs
    .map((s) => getBrand(s, locale))
    .filter((b): b is Brand => Boolean(b));
}
