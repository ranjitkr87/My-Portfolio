import React from "react";
import { siteConfig } from "../../content/site.ts";
import { Icon } from "../ui/Icon.tsx";

export const SiteFooter: React.FC = () => {
  return (
    <footer
      className="w-full bg-[#09090B] border-t border-[#26262E]"
      data-mode="void"
    >
      <div className="w-full px-4 sm:px-6 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col space-y-3">
          <a
            href="#hero"
            className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F4EFE6] hover:text-[#C6FF3D] transition-colors duration-150 inline-block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            RANJIT RAJAN
          </a>
          <p className="font-mono text-xs text-[#A7A29A] max-w-md leading-relaxed uppercase tracking-[0.04em]">
            © 2026 RANJIT RAJAN . ENGINEERED FOR HIGH-CRAFT WEBFLOW &amp;
            FRONTEND.
          </p>
          <div className="font-mono text-xs uppercase tracking-[0.08em] text-[#F4EFE6]">
            CO-FOUNDER AT{" "}
            <a
              href="https://www.cocaimo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6FF3D] hover:underline brand-script"
            >
              WWW.COCAIMO.COM
            </a>
          </div>
        </div>

        {/* Social Icons Cluster (LinkedIn, GitHub, WhatsApp only) */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={
                link.url.startsWith("http") ? "noopener noreferrer" : undefined
              }
              aria-label={link.label}
              className="w-12 h-12 rounded-full bg-[#131318] border border-[#26262E] hover:border-[#C6FF3D] text-[#F4EFE6] hover:text-[#09090B] hover:bg-[#C6FF3D] flex items-center justify-center transition-all duration-150"
            >
              <Icon name={link.platform} size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
