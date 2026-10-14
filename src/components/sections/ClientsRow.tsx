import React from "react";
import { siteConfig } from "../../content/site.ts";

export const ClientsRow: React.FC = () => {
  const clients = [
    { name: "Kerala Travel Concierge", link: "#work" },
    { name: "Aura Wellness", link: "#work" },
    { name: "Cocaimo Studio", link: "https://www.cocaimo.com", external: true },
    { name: "Studio Malabar", link: "#cta" },
    { name: "Kochi Tech Collective", link: "#cta" },
  ];

  return (
    <section
      aria-label="Clients and Collaborators"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 reveal-section"
      data-mode="void"
    >
      <div className="border-b border-[#26262E] pb-4 mb-8 flex justify-between items-center">
        <span className="font-mono text-xs text-[#A7A29A] uppercase tracking-[0.08em]">
          COLLABORATORS
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#A7A29A]">
          COMMERCIAL PARTNERS · CLIENT MARQUEE
        </span>
      </div>

      {/* Hairline-bordered Marquee Track */}
      <div className="w-full border-y border-[#26262E] py-4 overflow-hidden relative">
        <div className="marquee-container flex">
          {/* Track 1 */}
          <div className="marquee-track flex items-center shrink-0">
            {clients.map((client) => {
              const isCocaimo = client.name.includes("Cocaimo");
              return (
                <div
                  key={`track1-${client.name}`}
                  className="px-8 sm:px-12 py-4 border-r border-[#26262E] flex items-center whitespace-nowrap"
                >
                  <a
                    href={client.link}
                    target={client.external ? "_blank" : undefined}
                    rel={client.external ? "noopener noreferrer" : undefined}
                    className={`text-lg sm:text-2xl font-bold uppercase tracking-tight transition-colors duration-150 inline-flex items-center space-x-2 ${
                      isCocaimo
                        ? "text-[#C6FF3D] hover:text-[#FF3D9A] underline decoration-1 underline-offset-4"
                        : "text-[#F4EFE6] hover:text-[#C6FF3D]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span>{client.name}</span>
                    {client.external && (
                      <span className="font-mono text-xs ml-1 opacity-70">
                        ↗
                      </span>
                    )}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Track 2 (Duplicate for seamless continuous loop) */}
          <div
            className="marquee-track flex items-center shrink-0"
            aria-hidden="true"
          >
            {clients.map((client) => {
              const isCocaimo = client.name.includes("Cocaimo");
              return (
                <div
                  key={`track2-${client.name}`}
                  className="px-8 sm:px-12 py-4 border-r border-[#26262E] flex items-center whitespace-nowrap"
                >
                  <a
                    href={client.link}
                    target={client.external ? "_blank" : undefined}
                    rel={client.external ? "noopener noreferrer" : undefined}
                    tabIndex={-1}
                    className={`text-lg sm:text-2xl font-bold uppercase tracking-tight transition-colors duration-150 inline-flex items-center space-x-2 ${
                      isCocaimo
                        ? "text-[#C6FF3D] hover:text-[#FF3D9A] underline decoration-1 underline-offset-4"
                        : "text-[#F4EFE6] hover:text-[#C6FF3D]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span>{client.name}</span>
                    {client.external && (
                      <span className="font-mono text-xs ml-1 opacity-70">
                        ↗
                      </span>
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
