// src/components/sections/HeroSection.tsx
import React from "react";
import {cn} from "@/lib/utils";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  /** small optional decorative image / node right or left (not required) */
  illustration?: React.ReactNode;
};

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Learn More",
  ctaHref = "#",
  className,
  illustration,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "w-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white",
        "py-20 md:py-28",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-2/3 text-center md:text-left">
            {eyebrow && (
              <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {eyebrow}
              </div>
            )}

            <h1 id="hero-heading" className="text-3xl md:text-5xl font-extrabold leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
                {subtitle}
              </p>
            )}

            <div className="mt-8">
              <Button asChild>
                <a href={ctaHref} className="inline-flex items-center">
                  {ctaLabel}
                </a>
              </Button>
            </div>
          </div>

          {/* optional illustration node on right (desktop only) */}
          {illustration && (
            <div className="hidden md:block md:w-1/3">
              {illustration}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
