import type { ReactNode } from "react";

type LabelProps = {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
};

export function Label({ htmlFor, required, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block caption !opacity-70 mb-3"
    >
      {children}
      {required ? (
        <span className="text-[var(--color-bronze)] ml-1" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  );
}

type InputProps = {
  id: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  defaultValue?: string;
  autoComplete?: string;
  maxLength?: number;
};

export function Input({
  id,
  name,
  type = "text",
  required,
  defaultValue,
  autoComplete,
  maxLength,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      maxLength={maxLength}
      className="w-full bg-transparent border-0 border-b border-[var(--color-divider)] focus:border-[var(--color-navy)] focus:outline-none py-3 text-[1rem] text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal)]/40 transition-colors"
    />
  );
}

type TextareaProps = {
  id: string;
  name: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  defaultValue?: string;
  placeholder?: string;
};

export function Textarea({
  id,
  name,
  required,
  rows = 4,
  maxLength,
  defaultValue,
  placeholder,
}: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      required={required}
      rows={rows}
      maxLength={maxLength}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b border-[var(--color-divider)] focus:border-[var(--color-navy)] focus:outline-none py-3 text-[1rem] text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal)]/40 transition-colors resize-y"
    />
  );
}

type SelectProps = {
  id: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export function Select({
  id,
  name,
  required,
  defaultValue,
  options,
  placeholder,
}: SelectProps) {
  return (
    <select
      id={id}
      name={name}
      required={required}
      defaultValue={defaultValue ?? ""}
      className="w-full bg-transparent border-0 border-b border-[var(--color-divider)] focus:border-[var(--color-navy)] focus:outline-none py-3 text-[1rem] text-[var(--color-charcoal)] transition-colors appearance-none cursor-pointer"
    >
      {placeholder ? (
        <option value="" disabled>
          {placeholder}
        </option>
      ) : null}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

type RadioGroupProps = {
  legend: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
  defaultValue?: string;
};

export function RadioGroup({
  legend,
  name,
  required,
  options,
  defaultValue,
}: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="caption !opacity-70 mb-4">
        {legend}
        {required ? (
          <span className="text-[var(--color-bronze)] ml-1" aria-hidden>
            *
          </span>
        ) : null}
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 cursor-pointer text-[0.95rem] text-[var(--color-charcoal)]/85"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              required={required}
              defaultChecked={defaultValue === opt.value}
              className="accent-[var(--color-navy)]"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/** Honeypot — hidden from real users, bots fill it and we reject. Per spec §SEO checklist. */
export function Honeypot() {
  return (
    <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
      <label htmlFor="company_url">Leave this field empty</label>
      <input
        id="company_url"
        name="company_url"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
