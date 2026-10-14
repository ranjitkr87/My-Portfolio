import React from "react";
import { siteConfig } from "../../content/site.ts";
import { Button } from "../ui/Button.tsx";
import { Picture } from "../ui/Picture.tsx";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-24 sm:pb-32 reveal-section"
      data-mode="void"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#A7A29A] uppercase tracking-[0.08em] mb-6 sm:mb-8">
            <span
              className="w-2 h-2 bg-[#C6FF3D] inline-block flex-shrink-0"
              aria-hidden="true"
            />
            <span>{siteConfig.hero.badge}</span>
          </div>

          <h1
            className="text-5xl sm:text-7xl lg:text-[104px] leading-[0.96] tracking-[-0.03em] font-extrabold text-[#F4EFE6] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {siteConfig.hero.headingPrefix}
            <span className="text-[#FF3D9A]">
              {siteConfig.hero.headingHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#A7A29A] max-w-[62ch] leading-relaxed mb-10">
            {siteConfig.hero.subheading}
          </p>

          {/* Buttons Group */}
          <div className="flex flex-wrap items-center gap-4 ">
            <Button variant="primary" href={siteConfig.hero.primaryCtaHref}>
              {siteConfig.hero.primaryCtaText}
            </Button>
            <Button variant="outline" href={siteConfig.hero.secondaryCtaHref}>
              {siteConfig.hero.secondaryCtaText}
            </Button>
          </div>

          {/* Status Row */}
          {/* <div className="inline-flex items-center space-x-3 border-t border-[#26262E] pt-6 max-w-md">
            <span
              className="relative flex h-2.5 w-2.5 flex-shrink-0"
              aria-hidden="true"
            >
              <span className="inline-flex rounded-full h-2.5 w-2.5 bg-[#C6FF3D]" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#F4EFE6]">
              {siteConfig.hero.takingProjectsText}
              <span className="text-[#C6FF3D] font-bold">
                {siteConfig.availability.month}
              </span>
            </span>
          </div> */}
        </div>

        {/* Right Column (5 cols) */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          {/* Offset Lime Geometric Block Behind Image */}
          <div
            className="absolute -top-4 -right-4 w-full h-full bg-[#C6FF3D] rounded-[16px] -z-10 hidden sm:block"
            aria-hidden="true"
          />

          {/* Portrait Container */}
          <div className="relative bg-[#131318] border border-[#26262E] rounded-[16px] overflow-hidden aspect-[4/5] flex flex-col justify-end p-4 sm:p-6">
            <img
              src="/images/ranjit-hero.jpg"
              alt="Ranjit Rajan working inside his minimalist engineering studio in Kochi, Kerala"
              width={960}
              height={1200}
              loading="lazy"
              className="w-full h-full object-cover grayscale"
              style={{ aspectRatio: "4/5" }}
            />

            {/* Floating Skill Chips Overlay at base of image */}
            <div className="relative z-10 flex flex-wrap gap-2 pt-3 bg-[#09090B]/90 border border-[#26262E] p-3 rounded-[8px]">
              <span className="px-2.5 py-1 bg-[#131318] border border-[#26262E] text-[#C6FF3D] font-mono text-xs uppercase tracking-[0.08em] rounded-full">
                WEBFLOW
              </span>
              <span className="px-2.5 py-1 bg-[#131318] border border-[#26262E] text-[#A7A29A] font-mono text-xs uppercase tracking-[0.08em] rounded-full">
                REACT
              </span>
              <span className="px-2.5 py-1 bg-[#131318] border border-[#26262E] text-[#A7A29A] font-mono text-xs uppercase tracking-[0.08em] rounded-full">
                TYPESCRIPT
              </span>
              <span className="px-2.5 py-1 bg-[#131318] border border-[#26262E] text-[#A7A29A] font-mono text-xs uppercase tracking-[0.08em] rounded-full">
                HTML/CSS/JS
              </span>
              <span className="px-2.5 py-1 bg-[#131318] border border-[#26262E] text-[#A7A29A] font-mono text-xs uppercase tracking-[0.08em] rounded-full">
                SANITY
              </span>

              <span className="px-2.5 py-1 bg-[#131318] border border-[#26262E] text-[#A7A29A] font-mono text-xs uppercase tracking-[0.08em] rounded-full">
                FIGMA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
