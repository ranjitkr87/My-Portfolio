import React from 'react';
import { siteConfig } from '../../content/site.ts';
import { projects } from '../../content/projects.ts';
import { services } from '../../content/services.ts';

export const buildJsonLdGraph = () => {
  const baseUrl = siteConfig.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: `${siteConfig.name} — ${siteConfig.role}`,
        description:
          'Fast, responsive Webflow and frontend websites built with clean code and high craft by Ranjit Rajan in Kochi, Kerala.',
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        image: `${baseUrl}/images/ranjit-hero.jpg`,
        description: siteConfig.about.paragraph1,
        telephone: siteConfig.whatsapp.phone,
        email: siteConfig.email,
        url: baseUrl,
        knowsAbout: [
          'Webflow',
          'React',
          'TypeScript',
          'Sanity CMS',
          'frontend development',
          'HTML',
          'CSS',
          'JavaScript',
          'SEO',
          'CMS architecture',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kochi',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://www.cocaimo.com/#organization',
          name: siteConfig.agency.name,
          url: siteConfig.agency.url,
        },
        founder: {
          '@type': 'Organization',
          '@id': 'https://www.cocaimo.com/#organization',
          name: siteConfig.agency.name,
          url: siteConfig.agency.url,
        },
        sameAs: siteConfig.socialLinks
          .map((s) => s.url)
          .filter((url) => !url.startsWith('mailto:')),
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${baseUrl}/#service`,
        name: `${siteConfig.name} — Webflow & Frontend Development Services`,
        url: baseUrl,
        telephone: siteConfig.whatsapp.phone,
        email: siteConfig.email,
        provider: {
          '@id': `${baseUrl}/#person`,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Worldwide',
        },
        serviceType: [
          'Webflow Development',
          'Frontend Development',
          'Speed & Performance Optimization',
          'SEO Architecture',
          'Dynamic Content Population through CMS',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Core Services',
          itemListElement: services.map((s, idx) => ({
            '@type': 'Offer',
            position: idx + 1,
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.description,
            },
          })),
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/#webpage`,
        url: baseUrl,
        name: `${siteConfig.name} | ${siteConfig.role} in Kochi, Kerala`,
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        about: {
          '@id': `${baseUrl}/#person`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/ranjit-hero.jpg`,
        },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/#projects`,
        name: 'Featured Projects',
        itemListElement: projects.map((p, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: p.title,
          description: p.description,
          url: p.link.startsWith('http') ? p.link : `${baseUrl}${p.link}`,
        })),
      },
    ],
  };
};

export const JsonLd: React.FC = () => {
  const schema = buildJsonLdGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
