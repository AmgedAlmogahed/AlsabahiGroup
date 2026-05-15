"use server";

/**
 * Form server actions.
 *
 * Returns a status `code` instead of an English message so the client
 * component can render the localized version. See messages/{en,ar}.json
 * `form.contact.messages` and `form.partner.messages`.
 */

export type FormCode =
  | "success"
  | "missing_fields"
  | "invalid_email"
  | "message_too_long"
  | "consent_required"
  | "";

export type FormState = {
  ok: boolean;
  code: FormCode;
};

const initial: FormState = { ok: false, code: "" };

function isFilledHoneypot(formData: FormData): boolean {
  const honey = formData.get("company_url");
  return typeof honey === "string" && honey.trim().length > 0;
}

function getString(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitPartnerForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (isFilledHoneypot(formData)) {
    return { ok: true, code: "success" };
  }

  const required = [
    "fullName",
    "company",
    "country",
    "brand",
    "sector",
    "presence",
    "message",
    "email",
  ];
  for (const key of required) {
    if (!getString(formData, key)) {
      return { ok: false, code: "missing_fields" };
    }
  }

  const email = getString(formData, "email");
  if (!isValidEmail(email)) {
    return { ok: false, code: "invalid_email" };
  }

  const message = getString(formData, "message");
  if (message.length > 1000) {
    return { ok: false, code: "message_too_long" };
  }

  console.log("[partner-form]", {
    fullName: getString(formData, "fullName"),
    company: getString(formData, "company"),
    role: getString(formData, "role"),
    country: getString(formData, "country"),
    brand: getString(formData, "brand"),
    sector: getString(formData, "sector"),
    annualVolume: getString(formData, "annualVolume"),
    presence: getString(formData, "presence"),
    email,
    phone: getString(formData, "phone"),
    message,
  });

  return { ok: true, code: "success" };
}

export async function submitContactForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (isFilledHoneypot(formData)) {
    return { ok: true, code: "success" };
  }

  const required = ["fullName", "country", "reason", "email", "message"];
  for (const key of required) {
    if (!getString(formData, key)) {
      return { ok: false, code: "missing_fields" };
    }
  }

  const email = getString(formData, "email");
  if (!isValidEmail(email)) {
    return { ok: false, code: "invalid_email" };
  }

  console.log("[contact-form]", {
    fullName: getString(formData, "fullName"),
    company: getString(formData, "company"),
    country: getString(formData, "country"),
    reason: getString(formData, "reason"),
    email,
    message: getString(formData, "message"),
  });

  return { ok: true, code: "success" };
}

export const initialFormState = initial;
