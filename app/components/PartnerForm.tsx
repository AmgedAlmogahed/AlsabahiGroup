"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import {
  Label,
  Input,
  Textarea,
  Select,
  RadioGroup,
  Honeypot,
} from "./form/Field";
import { submitPartnerForm, initialFormState } from "@/app/lib/actions";
import { Link } from "@/i18n/navigation";

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

const SECTOR_KEYS = ["Pharmaceuticals", "Confectionery", "Other"] as const;
const VOLUME_KEYS = ["<100k", "100k-1m", "1m-5m", "5m+"] as const;
const PRESENCE_KEYS = ["none", "importing", "active", "other"] as const;

export default function PartnerForm() {
  const t = useTranslations("form.partner");
  const f = useTranslations("form");
  const [state, action, pending] = useActionState(
    submitPartnerForm,
    initialFormState,
  );

  if (state.ok) {
    return (
      <div className="border border-[var(--color-bronze)]/40 p-10 md:p-14">
        <p className="caption mb-4 !text-[var(--color-bronze)] !opacity-100">
          {t("successLabel")}
        </p>
        <h3 className="font-[var(--font-display)] text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-tight max-w-[24ch]">
          {t("successMessage")}
        </h3>
        <p className="mt-6 text-[var(--text-body)] leading-[1.65] text-[var(--color-charcoal)]/80 max-w-md">
          {t("successFollowUp")}{" "}
          <Link href="/brands" className="link-inline !inline">
            {t("successFollowUpLink")} <span className="arrow">→</span>
          </Link>
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
            {t("fullName")}
          </Label>
          <Input id="fullName" name="fullName" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="company" required>
            {t("company")}
          </Label>
          <Input
            id="company"
            name="company"
            required
            autoComplete="organization"
          />
        </div>

        <div>
          <Label htmlFor="role">{t("role")}</Label>
          <Input id="role" name="role" autoComplete="organization-title" />
        </div>
        <div>
          <Label htmlFor="country" required>
            {t("country")}
          </Label>
          <Select
            id="country"
            name="country"
            required
            placeholder={f("selectPlaceholder")}
            options={COUNTRIES.map((c) => ({ value: c, label: c }))}
          />
        </div>

        <div>
          <Label htmlFor="brand" required>
            {t("brand")}
          </Label>
          <Input id="brand" name="brand" required />
        </div>
        <div>
          <Label htmlFor="sector" required>
            {t("sector")}
          </Label>
          <Select
            id="sector"
            name="sector"
            required
            placeholder={f("selectPlaceholder")}
            options={SECTOR_KEYS.map((s) => ({
              value: s,
              label: t(`sectorOptions.${s}`),
            }))}
          />
        </div>

        <div>
          <Label htmlFor="annualVolume">{t("annualVolume")}</Label>
          <Select
            id="annualVolume"
            name="annualVolume"
            placeholder={f("selectPlaceholder")}
            options={VOLUME_KEYS.map((v) => ({
              value: v,
              label: t(`volumeOptions.${v}`),
            }))}
          />
        </div>
        <div>
          <Label htmlFor="email" required>
            {t("email")}
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
            legend={t("presence")}
            name="presence"
            required
            options={PRESENCE_KEYS.map((k) => ({
              value: k,
              label: t(`presenceOptions.${k}`),
            }))}
          />
        </div>

        <div>
          <Label htmlFor="phone">{t("phone")}</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div>
        <Label htmlFor="message" required>
          {t("message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={1000}
        />
        <p className="mt-2 caption !opacity-50">{t("messageMax")}</p>
      </div>

      {!state.ok && state.code ? (
        <p className="text-[0.95rem] text-[var(--color-bronze)]" role="alert">
          {f(`messages.${state.code}`)}
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? t("submitting") : t("submit")} <span aria-hidden>→</span>
        </button>
        <p className="caption !opacity-60 max-w-md">{t("privacyNote")}</p>
      </div>
    </form>
  );
}
