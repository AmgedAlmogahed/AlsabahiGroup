type Props = {
  caption: string;
  aspect?: "wide" | "portrait" | "square" | "hero";
  tone?: "navy" | "cream" | "bronze";
  className?: string;
};

const aspects = {
  wide: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  hero: "aspect-[16/9] md:aspect-[16/8]",
};

const tones = {
  navy: "bg-[var(--color-navy)] text-[var(--color-cream)]",
  cream: "bg-[var(--color-divider)] text-[var(--color-navy)]",
  bronze: "bg-[var(--color-bronze)] text-[var(--color-navy)]",
};

/**
 * Photo placeholder plate. Spec calls photography "the critical deliverable"
 * and warns against AI/stock — these placeholders are intentional, not decorative,
 * and document exactly what shoot brief each slot needs.
 */
export default function PhotoPlate({
  caption,
  aspect = "wide",
  tone = "navy",
  className = "",
}: Props) {
  return (
    <figure
      className={`relative w-full overflow-hidden ${aspects[aspect]} ${tones[tone]} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_25%_30%,#fff_1px,transparent_1px),radial-gradient(circle_at_75%_70%,#fff_1px,transparent_1px)] [background-size:48px_48px,48px_48px]" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-current opacity-40" />
          <span className="caption !text-current !opacity-70">Photography</span>
        </div>
        <p className="font-[var(--font-display)] text-lg md:text-2xl leading-snug max-w-xl">
          {caption}
        </p>
      </div>
    </figure>
  );
}
