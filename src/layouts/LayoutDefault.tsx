import React from 'react';
import { SiteHeader } from '../components/sections/SiteHeader.tsx';
import { SiteFooter } from '../components/sections/SiteFooter.tsx';
import { JsonLd } from '../components/seo/JsonLd.tsx';
import { WhatsAppButton } from '../components/ui/WhatsAppButton.tsx';

export interface LayoutDefaultProps {
  children: React.ReactNode;
}

export const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4EFE6] selection:bg-[#C6FF3D] selection:text-[#09090B] flex flex-col relative">
      {/* Schema.org Structured Data */}
      <JsonLd />

      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Persistent Site Header */}
      <SiteHeader />

      {/* Main Landmark */}
      <main id="main-content" className="w-full flex-grow">
        {children}
      </main>

      {/* Persistent Site Footer */}
      <SiteFooter />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
};
