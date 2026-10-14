import React, { useState } from "react";
import { siteConfig } from "../../content/site.ts";
import { Icon } from "../ui/Icon.tsx";

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#09090B] border-b border-[#26262E] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Anchor */}
        <a
          href="#hero"
          className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4EFE6] hover:text-[#C6FF3D] transition-colors duration-150"
          style={{ fontFamily: "var(--font-display)" }}
          aria-label="Ranjit Rajan home"
        >
          RANJIT RAJAN
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center space-x-8"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#A7A29A] font-mono text-xs uppercase tracking-[0.08em] transition-colors duration-150 hover:text-[#C6FF3D] py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing Primary Action Pill & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://calendly.com/ranjitkr87/30min"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-[#C6FF3D] px-5 sm:px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#09090B] transition-colors duration-150 hover:bg-[#FF3D9A] hover:text-[#F4EFE6] min-h-[48px]"
          >
            Book an Appointment
          </a>

          {/* Accessible Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden text-[#F4EFE6] hover:text-[#C6FF3D] p-3 border border-[#26262E] rounded-full min-w-[48px] min-h-[48px] inline-flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-[#09090B] border-b border-[#26262E] px-6 py-6 flex flex-col space-y-4"
          aria-label="Mobile Navigation"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F4EFE6] font-mono text-sm uppercase tracking-[0.08em] py-2 hover:text-[#C6FF3D] transition-colors duration-150 border-b border-[#131318]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
