import Link from "next/link";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Sectors", href: "/sectors" },
  { label: "Brands", href: "/brands" },
  { label: "Partner With Us", href: "/partner-with-us" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="editorial-wrap flex items-center justify-between py-7">
        <Link
          href="/"
          aria-label="Alsabahy Group — Home"
          className="font-[var(--font-display)] text-xl tracking-tight text-[var(--color-cream)]"
        >
          Alsabahy<span className="text-[var(--color-bronze)]">.</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-9 text-[0.875rem] text-[var(--color-cream)] tracking-wide"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="opacity-90 hover:opacity-100 hover:text-[var(--color-bronze)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/ar" className="opacity-60 hover:opacity-100">
            ع
          </Link>
        </nav>
      </div>
    </header>
  );
}
