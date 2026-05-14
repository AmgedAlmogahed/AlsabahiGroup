"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
