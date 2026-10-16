import React from "react";
import { LayoutDefault } from "./layouts/LayoutDefault.tsx";
import { Hero } from "./components/sections/Hero.tsx";
import { WorkSection } from "./components/sections/WorkSection.tsx";
import { MarqueeStrip } from "./components/sections/MarqueeStrip.tsx";
import { ServicesSection } from "./components/sections/ServicesSection.tsx";
import { IntegrationsSection } from "./components/sections/IntegrationsSection.tsx";
import { AboutSection } from "./components/sections/AboutSection.tsx";
import { ProcessSection } from "./components/sections/ProcessSection.tsx";
import { ClientsRow } from "./components/sections/ClientsRow.tsx";
import { ContactCta } from "./components/sections/ContactCta.tsx";

export default function App() {
  return (
    <LayoutDefault>
      <Hero />
      <WorkSection />
      <MarqueeStrip />
      <ServicesSection />
      <IntegrationsSection />
      <AboutSection />
      <ProcessSection />
      <ClientsRow />
      <ContactCta />
    </LayoutDefault>
  );
}
