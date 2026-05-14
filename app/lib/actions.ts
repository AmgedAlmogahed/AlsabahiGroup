"use server";

/**
 * Form server actions.
 *
 * Email delivery is intentionally STUBBED for v1 — wire to Resend / Formspree /
 * HubSpot when the client provides API credentials.
 *
 * To go live: replace the `// TODO: send email` block in each action with a
 * single call to your provider, e.g.:
 *
 *   await resend.emails.send({
 *     from: "noreply@alsabahygroup.com",
 *     to: CONTACT.partnershipsEmail,
 *     subject: `Partnership enquiry — ${data.brand}`,
 *     html: renderTemplate(data),
 *   });
 *
 * Submissions currently log to server stdout for visibility during dev.
 */

export type FormState = {
  ok: boolean;
  message: string;
};

const initial: FormState = { ok: false, message: "" };

function isFilledHoneypot(formData: FormData): boolean {
  const honey = formData.get("company_url");
  return typeof honey === "string" && honey.trim().length > 0;
}

function getString(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function isValidEmail(email: string): boolean {
  // Pragmatic regex — strict enough to catch typos, lenient enough to not reject valid addresses.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitPartnerForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (isFilledHoneypot(formData)) {
    // Silent success — don't tell the bot anything useful.
    return { ok: true, message: "Thank you. Our partnerships team will be in touch within 2 business days." };
  }

  const required = ["fullName", "company", "country", "brand", "sector", "presence", "message", "email"];
  for (const key of required) {
    if (!getString(formData, key)) {
      return { ok: false, message: `Please fill in all required fields.` };
    }
  }

  const email = getString(formData, "email");
  if (!isValidEmail(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const message = getString(formData, "message");
  if (message.length > 1000) {
    return { ok: false, message: "Message must be 1000 characters or fewer." };
  }

  // TODO: send email — see comment block at top of file.
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

  return {
    ok: true,
    message: "Thank you. Our partnerships team will be in touch within 2 business days.",
  };
}

export async function submitContactForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (isFilledHoneypot(formData)) {
    return { ok: true, message: "Thank you. We'll be in touch within 2 business days." };
  }

  const required = ["fullName", "country", "reason", "email", "message"];
  for (const key of required) {
    if (!getString(formData, key)) {
      return { ok: false, message: "Please fill in all required fields." };
    }
  }

  const email = getString(formData, "email");
  if (!isValidEmail(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // TODO: send email — see comment block at top of file.
  console.log("[contact-form]", {
    fullName: getString(formData, "fullName"),
    company: getString(formData, "company"),
    country: getString(formData, "country"),
    reason: getString(formData, "reason"),
    email,
    message: getString(formData, "message"),
  });

  return {
    ok: true,
    message: "Thank you. We'll be in touch within 2 business days.",
  };
}

export const initialFormState = initial;
