import React from "react";
import { siteConfig } from "../../content/site.ts";
import { projects } from "../../content/projects.ts";
import { services } from "../../content/services.ts";

/**
 * Keep contact details in the schema ONLY if they are also visible on the page.
 */
const INCLUDE_CONTACT_IN_SCHEMA = true;

const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const agencyUrl = siteConfig.agency.url.replace(/\/$/, "");
const pageUrl = `${baseUrl}/`; // must match the <link rel="canonical"> exactly

const ids = {
  website: `${baseUrl}/#website`,
  webpage: `${baseUrl}/#webpage`,
  person: `${baseUrl}/#person`,
  service: `${baseUrl}/#service`,
  projects: `${baseUrl}/#projects`,
  image: `${baseUrl}/#primaryimage`,
  agency: `${agencyUrl}/#organization`,
};

// Make sure this file exists in /public/images (jpg fallback of the hero photo)
const heroImageUrl = `${baseUrl}/images/ranjit-hero.jpg`;

const isEmpty = (v: unknown): boolean =>
  v === undefined ||
  v === null ||
  v === "" ||
  (Array.isArray(v) && v.length === 0) ||
  (typeof v === "object" &&
    v !== null &&
    !Array.isArray(v) &&
    Object.keys(v as object).length === 0);

/** Recursively removes undefined, empty strings, empty arrays and empty objects. */
const compact = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map(compact).filter((v) => !isEmpty(v));
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      const cleaned = compact(val);
      if (!isEmpty(cleaned)) out[key] = cleaned;
    }
    return out;
  }
  return value;
};

const isHttpUrl = (u?: string): boolean => !!u && /^https?:\/\//i.test(u);

const absoluteUrl = (link?: string): string | undefined => {
  if (!link || link.startsWith("#") || link.includes("[")) return undefined;
  if (isHttpUrl(link)) return link;
  return `${baseUrl}${link.startsWith("/") ? "" : "/"}${link}`;
};

const address = {
  "@type": "PostalAddress",
  addressLocality: "Kochi",
  addressRegion: "Kerala",
  addressCountry: "IN",
};

export const buildJsonLdGraph = () => {
  const email = INCLUDE_CONTACT_IN_SCHEMA ? siteConfig.email : undefined;
  const telephone = INCLUDE_CONTACT_IN_SCHEMA
    ? siteConfig.whatsapp?.phone
    : undefined;

  const sameAs = siteConfig.socialLinks
    .map((s) => s.url)
    .filter((u) => isHttpUrl(u));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: pageUrl,
        name: `${siteConfig.name} — ${siteConfig.role}`,
        description: `Fast, responsive Webflow and frontend websites built with clean code and high craft by ${siteConfig.name} in Kochi, Kerala.`,
        inLanguage: "en-IN",
        publisher: { "@id": ids.person },
      },
      {
        "@type": "ProfilePage",
        "@id": ids.webpage,
        url: pageUrl,
        name: `${siteConfig.name} | ${siteConfig.role} in Kochi, Kerala`,
        isPartOf: { "@id": ids.website },
        mainEntity: { "@id": ids.person },
        about: { "@id": ids.person },
        primaryImageOfPage: { "@id": ids.image },
        inLanguage: "en-IN",
        dateModified: new Date().toISOString(), // set at build/pre-render time
      },
      {
        "@type": "ImageObject",
        "@id": ids.image,
        url: heroImageUrl,
        contentUrl: heroImageUrl,
        caption: `${siteConfig.name}, ${siteConfig.role} in Kochi, Kerala`,
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description: siteConfig.about.paragraph1,
        image: { "@id": ids.image },
        url: pageUrl,
        email,
        telephone,
        // Keep in sync with the tools shown on the page
        knowsAbout: [
          "Webflow",
          "React",
          "TypeScript",
          "Sanity CMS",
          "frontend development",
          "HTML",
          "CSS",
          "JavaScript",
          "SEO",
          "CMS architecture",
        ],
        address,
        worksFor: { "@id": ids.agency },
        sameAs,
      },
      {
        "@type": "Organization",
        "@id": ids.agency,
        name: siteConfig.agency.name,
        url: siteConfig.agency.url,
        founder: { "@id": ids.person },
        address,
      },
      {
        "@type": "ProfessionalService",
        "@id": ids.service,
        name: `${siteConfig.name} — Webflow & Frontend Development Services`,
        url: pageUrl,
        image: { "@id": ids.image },
        email,
        telephone,
        address,
        founder: { "@id": ids.person },
        // Remove 'Worldwide' if you don't take clients outside India
        areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
        serviceType: services.map((s) => s.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Core Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              provider: { "@id": ids.service },
            },
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": ids.projects,
        name: "Featured Projects",
        itemListElement: projects.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            description: p.description,
            url: absoluteUrl(p.link),
            creator: { "@id": ids.person },
          },
        })),
      },
    ],
  };

  return compact(graph);
};

/** Escape "<" so content can never close the script tag early. */
const serialize = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export const JsonLd: React.FC = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: serialize(buildJsonLdGraph()) }}
  />
);
