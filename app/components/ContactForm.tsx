"use client";

import { useActionState } from "react";
import {
  Label,
  Input,
  Textarea,
  Select,
  Honeypot,
} from "./form/Field";
import { submitContactForm, initialFormState } from "@/app/lib/actions";

const COUNTRIES = [
  "Yemen",
  "Saudi Arabia",
  "United Arab Emirates",
  "Egypt",
  "Iceland",
  "Italy",
  "Pakistan",
  "Kosovo",
  "Turkey",
  "United Kingdom",
  "United States",
  "Other",
];

const REASONS = [
  { value: "partnership", label: "Brand partnership enquiry" },
  { value: "supplier", label: "Supplier or vendor enquiry" },
  { value: "press", label: "Press / media" },
  { value: "general", label: "General enquiry" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [state, action, pending] = useActionState(
    submitContactForm,
    initialFormState,
  );

  if (state.ok) {
    return (
      <div className="border border-[var(--color-bronze)]/40 p-10">
        <p className="caption mb-4 !text-[var(--color-bronze)] !opacity-100">
          Sent
        </p>
        <h3 className="font-[var(--font-display)] text-[1.5rem] md:text-[1.875rem] leading-[1.2] tracking-tight max-w-[22ch]">
          {state.message}
        </h3>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-7">
      <Honeypot />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <Label htmlFor="fullName" required>
            Full name
          </Label>
          <Input id="fullName" name="fullName" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" name="company" autoComplete="organization" />
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
          <Label htmlFor="reason" required>
            Reason for contact
          </Label>
          <Select
            id="reason"
            name="reason"
            required
            placeholder="Select…"
            options={REASONS}
          />
        </div>

        <div className="md:col-span-2">
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
      </div>

      <div>
        <Label htmlFor="message" required>
          Message
        </Label>
        <Textarea id="message" name="message" required rows={4} />
      </div>

      {!state.ok && state.message ? (
        <p className="text-[0.95rem] text-[var(--color-bronze)]" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Sending…" : "Send message"} <span aria-hidden>→</span>
      </button>
    </form>
  );
}
