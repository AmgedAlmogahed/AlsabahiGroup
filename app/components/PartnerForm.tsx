"use client";

import { useActionState } from "react";
import {
  Label,
  Input,
  Textarea,
  Select,
  RadioGroup,
  Honeypot,
} from "./form/Field";
import { submitPartnerForm, initialFormState } from "@/app/lib/actions";

const COUNTRIES = [
  "Iceland",
  "Italy",
  "Pakistan",
  "Kosovo",
  "Turkey",
  "United Kingdom",
  "United States",
  "Germany",
  "France",
  "Spain",
  "Netherlands",
  "United Arab Emirates",
  "Saudi Arabia",
  "Egypt",
  "India",
  "Japan",
  "Other",
];

const SECTORS = ["Pharmaceuticals", "Confectionery", "Other"];

const VOLUMES = [
  { value: "<100k", label: "Under $100K" },
  { value: "100k-1m", label: "$100K – $1M" },
  { value: "1m-5m", label: "$1M – $5M" },
  { value: "5m+", label: "$5M+" },
];

const PRESENCE = [
  { value: "none", label: "None" },
  { value: "importing", label: "Importing" },
  { value: "active", label: "Active distribution" },
  { value: "other", label: "Other" },
];

export default function PartnerForm() {
  const [state, action, pending] = useActionState(
    submitPartnerForm,
    initialFormState,
  );

  if (state.ok) {
    return (
      <div className="border border-[var(--color-bronze)]/40 p-10 md:p-14">
        <p className="caption mb-4 !text-[var(--color-bronze)] !opacity-100">
          Submitted
        </p>
        <h3 className="font-[var(--font-display)] text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-tight max-w-[24ch]">
          {state.message}
        </h3>
        <p className="mt-6 text-[var(--text-body)] leading-[1.65] text-[var(--color-charcoal)]/80 max-w-md">
          In the meantime, you can read more about our{" "}
          <a href="/brands" className="link-inline !inline">
            brand portfolio <span className="arrow">→</span>
          </a>
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-8">
      <Honeypot />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        <div>
          <Label htmlFor="fullName" required>
            Full name
          </Label>
          <Input id="fullName" name="fullName" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="company" required>
            Company
          </Label>
          <Input id="company" name="company" required autoComplete="organization" />
        </div>

        <div>
          <Label htmlFor="role">Role / Title</Label>
          <Input id="role" name="role" autoComplete="organization-title" />
        </div>
        <div>
          <Label htmlFor="country" required>
            Country
          </Label>
          <Select
            id="country"
            name="country"
            required
            placeholder="Select…"
            options={COUNTRIES.map((c) => ({ value: c, label: c }))}
          />
        </div>

        <div>
          <Label htmlFor="brand" required>
            Brand name
          </Label>
          <Input id="brand" name="brand" required />
        </div>
        <div>
          <Label htmlFor="sector" required>
            Sector
          </Label>
          <Select
            id="sector"
            name="sector"
            required
            placeholder="Select…"
            options={SECTORS.map((s) => ({ value: s, label: s }))}
          />
        </div>

        <div>
          <Label htmlFor="annualVolume">Annual export volume (optional)</Label>
          <Select
            id="annualVolume"
            name="annualVolume"
            placeholder="Select…"
            options={VOLUMES}
          />
        </div>
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>

        <div className="md:col-span-2">
          <RadioGroup
            legend="Existing Yemen presence?"
            name="presence"
            required
            options={PRESENCE}
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone (with country code)</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div>
        <Label htmlFor="message" required>
          Message
        </Label>
        <Textarea id="message" name="message" required rows={5} maxLength={1000} />
        <p className="mt-2 caption !opacity-50">Max 1000 characters</p>
      </div>

      {!state.ok && state.message ? (
        <p
          className="text-[0.95rem] text-[var(--color-bronze)]"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
        <button type="submit" disabled={pending} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
          {pending ? "Sending…" : "Begin the conversation"} <span aria-hidden>→</span>
        </button>
        <p className="caption !opacity-60 max-w-md">
          Your information stays with Alsabahy Group's partnerships team. We do
          not share enquiry details with third parties.
        </p>
      </div>
    </form>
  );
}
