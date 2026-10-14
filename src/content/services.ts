/**
 * Services data.
 * Exact copy and badges matching design specifications.
 */

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags?: string[];
  footerBadge?: string;
  spanTwoColumns?: boolean;
}

export const servicesSection = {
  badge: "SERVICES",
  heading: "Engineered for speed, built to convert.",
  subheading:
    "Every build is treated as a commercial software product. Structured headings, semantic tags, zero bloated plugins, and instant load times.",
  ctaText: "Book an intro call",
  ctaHref: "#cta",
};

export const services: Service[] = [
  {
    id: "webflow-custom",
    number: "01",
    title: "01 / Webflow & Custom Websites",
    description:
      "Bespoke digital architecture translated cleanly from Figma into semantic, responsive Webflow builds. Full client CMS handoff, zero maintenance headaches, and custom script integrations.",
    tags: ["Figma-to-Webflow", "Client-First System", "Custom JS"],
    spanTwoColumns: true,
  },
  {
    id: "speed-performance",
    number: "02",
    title: "02 / Speed & Performance",
    description:
      "Sub-second load times engineered through asset budgeting, minimal scripts, and clean DOM trees. Guaranteed 95+ Core Web Vitals score.",
    footerBadge: "100/100 LIGHTHOUSE TARGET",
    spanTwoColumns: false,
  },
  {
    id: "seo-ready",
    number: "03",
    title: "03 / SEO-Ready Builds",
    description:
      "Clean schema markup, open graph metadata, and structured headings built directly into the codebase. Ready for Google indexing on day one.",
    footerBadge: "SCHEMA & JSON-LD NATIVE",
    spanTwoColumns: false,
  },
  {
    id: "cms-dynamic-content",
    number: "04",
    title: "04 / Dynamic Content Population through CMS",
    description:
      "Robust CMS schemas, automated content pipelines, and dynamic multi-reference collections powered by Sanity and Webflow CMS for frictionless client publishing.",
    footerBadge: "CMS ARCHITECTURE",
    tags: ["Sanity CMS", "Webflow Collections", "Automated Pipelines"],
    spanTwoColumns: true,
  },
];
