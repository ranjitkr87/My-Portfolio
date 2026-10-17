import React from "react";
import { siteConfig } from "../../content/site.ts";
import { StatBlock } from "../cards/StatBlock.tsx";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 sm:py-32 reveal-section"
      data-mode="paper"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Photo (4:5 ratio, 16px radius) */}
        <div className="lg:col-span-5">
          <div className="relative bg-[#131318] border border-[#26262E] rounded-[16px] overflow-hidden aspect-[4/5]">
            <img
              src="/images/ranjit-about.jpg"
              alt="Ranjit Rajan working inside his minimalist engineering studio in Kochi, Kerala"
              width={960}
              height={1200}
              loading="lazy"
              className="w-full h-full object-cover grayscale"
              style={{ aspectRatio: "4/5" }}
            />
            {/* <div className="absolute bottom-4 left-4 right-4 bg-[#09090B]/90 border border-[#26262E] p-3 rounded-[8px] flex justify-between items-center">
              <span className="font-mono text-xs uppercase text-[#A7A29A]">
                BASE: KOCHI, KERALA
              </span>
            </div> */}
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="lg:col-span-7">
          <span className="font-mono text-xs text-[#C6FF3D] uppercase tracking-[0.08em] block mb-4">
            {siteConfig.about.badge}
          </span>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F4EFE6] mb-8 leading-[1.02]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {siteConfig.about.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#F4EFE6] mb-6 leading-relaxed">
            I'm Ranjit Rajan, a Webflow and frontend developer and co-founder of{" "}
            <a
              href="https://www.cocaimo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6FF3D] underline underline-offset-4 brand-script hover:text-[#FF3D9A] font transition-colors font-medium"
            >
              COCAIMO
            </a>
            , a web development and digital marketing agency in Kochi. I work
            directly with clients on design, development and SEO.
          </p>
          <p className="text-sm sm:text-base text-[#A7A29A] mb-10 leading-relaxed max-w-xl">
            {siteConfig.about.paragraph2}
          </p>

          {/* Tool Pills */}
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#A7A29A] block mb-3">
              PRIMARY TOOLKIT:
            </span>
            <div className="flex flex-wrap gap-2">
              {siteConfig.about.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-[#131318] border border-[#26262E] px-4 py-2 font-mono text-xs text-[#F4EFE6] uppercase tracking-[0.08em]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Three Mono Stat Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#26262E]">
            {siteConfig.about.stats.map((stat) => (
              <StatBlock
                key={stat.label}
                value={stat.value}
                label={stat.label}
                highlight={stat.highlight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
