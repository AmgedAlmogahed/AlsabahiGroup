"use client";

import { useState, useMemo } from "react";
import type { Brand } from "@/app/lib/brands";
import BrandImage from "../BrandImage";

export default function BrandGallery({ brand }: { brand: Brand }) {
  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(() => {
    if (filter === "All") return brand.gallery.products;
    return brand.gallery.products.filter((p) => p.category === filter);
  }, [filter, brand.gallery.products]);

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="editorial-wrap">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Product gallery</p>
          <h2 className="text-[2.25rem] md:text-[3rem] leading-[1.05] tracking-tight max-w-[22ch]">
            {brand.gallery.h2}
          </h2>
          <p className="mt-8 text-[var(--text-body-lg)] leading-[1.7] text-[var(--color-charcoal)]/85 max-w-2xl">
            {brand.gallery.intro}
          </p>
        </div>

        {/* Filter chips */}
        <div
          role="tablist"
          aria-label="Product category filter"
          className="mt-14 flex flex-wrap gap-2"
        >
          {brand.gallery.filterChips.map((chip) => {
            const active = filter === chip;
            return (
              <button
                key={chip}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(chip)}
                className={`px-4 py-2 text-[0.8125rem] tracking-wide uppercase border transition-colors rounded-sm ${
                  active
                    ? "bg-[var(--color-navy)] text-[var(--color-cream)] border-[var(--color-navy)]"
                    : "bg-transparent text-[var(--color-navy)] border-[var(--color-divider)] hover:border-[var(--color-navy)]"
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>

        {/* Product cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {visible.map((p) => (
            <article key={p.name} className="group">
              <BrandImage
                src={brand.images?.products?.[p.name]}
                alt={`${p.name} — product photography on neutral background, packaging detail in focus.`}
                tone="cream"
                aspect="square"
              />
              <div className="mt-6">
                <p className="caption mb-3">{p.category}</p>
                <h3 className="font-[var(--font-display)] text-[1.375rem] leading-[1.2] tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-[var(--color-charcoal)]/80">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-[var(--color-charcoal)]/60">
            No products in this category.
          </p>
        ) : null}

        {brand.gallery.note ? (
          <p className="mt-16 text-[0.875rem] italic text-[var(--color-charcoal)]/55 max-w-2xl">
            Note: {brand.gallery.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
