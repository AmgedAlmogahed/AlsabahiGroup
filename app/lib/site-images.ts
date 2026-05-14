/**
 * Site-wide image manifest.
 *
 * Each entry is a path under /public/ (e.g. "/site/home-role.jpg") OR undefined.
 * - undefined → component renders editorial PhotoPlate placeholder with caption
 * - string    → component renders real image via Next/Image with optimization
 *
 * After generating an image (see 10_Image_Generation_Brief.md), save it to the
 * documented path and flip the value here from `undefined` to that path. Site
 * components pick it up automatically — no other code changes needed.
 *
 * To remove an image (e.g. permission revoked), revert the value to undefined.
 */

export const SITE_IMAGES = {
  // ── Homepage ──
  /** Role section — pharmacist hands placing branded product on a Yemeni pharmacy shelf */
  homeRole: "/site/home-role.jpg" as string | undefined,
  /** Sectors card — pharmaceutical close-up */
  homeSectorPharma: "/site/home-sector-pharma.jpg" as string | undefined,
  /** Sectors card — confectionery retail context */
  homeSectorConfectionery: "/site/home-sector-confectionery.jpg" as string | undefined,

  // ── Sectors detail pages ──
  /** /sectors/pharmaceuticals hero — clinical/pharma editorial */
  sectorPharmaHero: "/sectors/pharmaceuticals/hero.jpg" as string | undefined,
  /** /sectors/confectionery hero — warm retail editorial */
  sectorConfectioneryHero: "/sectors/confectionery/hero.jpg" as string | undefined,

  // ── Reserved for future use (currently page heroes are pure typography) ──
  /** /about hero — founder portrait OR archival/HQ exterior */
  aboutHero: undefined as string | undefined,
  /** /partner-with-us hero — pharmacy retail interior with branded products */
  partnerHero: undefined as string | undefined,
};

export type SiteImageKey = keyof typeof SITE_IMAGES;
