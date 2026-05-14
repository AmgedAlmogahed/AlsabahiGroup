/**
 * Operational data for Alsabahy Group — single source of truth.
 *
 * STRATEGIC NOTE: These [X] placeholders appear on at least 8 of 12 site pages.
 * When the client provides real numbers, replace ONLY the values below.
 * Every page references these values, so a single edit propagates everywhere.
 *
 * Source of truth for the master data-gap list in 09_Brands_Index_and_Contact.md §"Operational data".
 */

export const OPERATIONS = {
  yearsInOperation: "30+",
  foundingYear: "1993",

  // Replace [X] values with real client data when provided.
  governorates: "[X]",
  retailAndPharmacyPoints: "[X]",
  pharmacies: "[X]",
  hospitals: "[X]",
  supermarketChains: "[X]",
  wholesalePartners: "[X]",
  warehouses: "[X]",
  fleet: "[X]",

  // Brand portfolio count — derivable from BRANDS.length but stable enough to hard-code
  internationalBrands: 5,
  sectors: 2,
} as const;

export const CONTACT = {
  partnershipsEmail: "partnerships@alsabahygroup.com",
  generalEmail: "info@alsabahygroup.com",
  phone: "+967 [phone]",
  whatsapp: "+967 [phone]",
  hqStreet: "[Street address]",
  hqCity: "[City]",
  hqPostalCode: "[Postal code]",
  hqCountry: "Yemen",
  linkedinUrl: "https://linkedin.com/company/[handle]",
  responseSla: "2 business days",
  // Sunday–Thursday, 9:00–17:00 (Yemen Standard Time, UTC+3)
  hours: "Sunday–Thursday, 9:00–17:00 (Yemen Standard Time, UTC+3). English and Arabic.",
} as const;
