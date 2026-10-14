import React from "react";
import { services, servicesSection } from "../../content/services.ts";
import { ServiceCard } from "../cards/ServiceCard.tsx";
import { Button } from "../ui/Button.tsx";

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full bg-[#F4EFE6] text-[#09090B] py-24 sm:py-32 border-b border-[#D9D3C7] reveal-section"
      data-mode="paper"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Header (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#09090B] bg-[#C6FF3D] px-2.5 py-1 inline-block font-bold mb-4 rounded-[2px]">
              {servicesSection.badge}
            </span>
            <h2
              id="services-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[0.98] text-[#09090B] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {servicesSection.heading}
            </h2>
            <p className="text-base text-[#5E5A52] max-w-sm mb-8 leading-relaxed">
              {servicesSection.subheading}
            </p>
            <Button variant="paper-black" href={servicesSection.ctaHref}>
              {servicesSection.ctaText}
            </Button>
          </div>

          {/* Bento Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
