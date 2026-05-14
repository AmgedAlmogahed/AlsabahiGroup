import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-cream)]">
      <div className="editorial-wrap pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Column 1 — Brand mark + tagline */}
          <div className="md:col-span-4">
            <p className="font-[var(--font-display)] text-3xl tracking-tight">
              Alsabahy<span className="text-[var(--color-bronze)]">.</span>
            </p>
            <p className="mt-4 max-w-sm text-[0.95rem] opacity-75 leading-relaxed">
              Yemen's authorized agent for the world's most trusted brands.
              Since 1993.
            </p>
          </div>

          {/* Column 2 — Navigate */}
          <div className="md:col-span-2">
            <h4 className="caption !text-[var(--color-cream)] !opacity-50 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3 text-[0.95rem]">
              <li>
                <Link href="/about" className="hover:text-[var(--color-bronze)]">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors"
                  className="hover:text-[var(--color-bronze)]"
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="hover:text-[var(--color-bronze)]"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-with-us"
                  className="hover:text-[var(--color-bronze)]"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[var(--color-bronze)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="md:col-span-3">
            <h4 className="caption !text-[var(--color-cream)] !opacity-50 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-[0.95rem]">
              <li>
                <a
                  href="mailto:partnerships@alsabahygroup.com"
                  className="hover:text-[var(--color-bronze)]"
                >
                  partnerships@alsabahygroup.com
                </a>
              </li>
              <li className="opacity-75">+967 [phone]</li>
              <li className="opacity-75 leading-relaxed">
                [HQ street address],<br />
                [city], Yemen
              </li>
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div className="md:col-span-3">
            <h4 className="caption !text-[var(--color-cream)] !opacity-50 mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-[0.95rem]">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-bronze)]"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-cream)]/15 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[0.8125rem] opacity-60">
          <p>© 1993–2026 Alsabahy Group. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-[var(--color-bronze)]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[var(--color-bronze)]">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/ar" className="hover:text-[var(--color-bronze)]">
                العربية
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
