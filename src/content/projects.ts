/**
 * Projects data.
 * Exact copy, tags, numbers, and image assets matching design.
 */

export interface Project {
  slug: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  isExternal: boolean;
  featuredMode: 'highlight-pink' | 'standard-surface';
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    sources?: {
      avif?: string;
      webp?: string;
    };
  };
}

export const projects: Project[] = [
  {
    slug: 'cocaimo',
    number: '01/03',
    title: 'www.cocaimo.com',
    description:
      'Agency website built in React and TypeScript, with SEO structure, schema markup and full content. Engineered for ultra-fast conversion and client onboarding.',
    tags: ['[REACT]', '[TYPESCRIPT]', '[SEO ARCHITECTURE]'],
    link: 'https://www.cocaimo.com',
    linkLabel: '[ VIEW PROJECT -> ]',
    isExternal: true,
    featuredMode: 'highlight-pink',
    image: {
      src: '/images/ranjit-hero.jpg',
      alt: 'Cocaimo website architecture and digital marketing agency platform',
      width: 1200,
      height: 675,
    },
  },
  {
    slug: 'kerala-travel-concierge',
    number: '02/03',
    title: 'Kerala Travel Concierge',
    description:
      'Travel brand site with Sanity CMS so the owner edits content herself. Fast content pipelines and zero-friction international booking flows.',
    tags: ['[WEBFLOW]', '[SANITY CMS]'],
    link: '#cta',
    linkLabel: '[ VIEW CASE STUDY -> ]',
    isExternal: false,
    featuredMode: 'standard-surface',
    image: {
      src: '/images/kerala-travel.jpg',
      alt: 'Editorial web showcase of a luxury Kerala eco-resort tourism website with stark architectural framing.',
      width: 960,
      height: 540,
      sources: {
        avif: '/images/kerala-travel-960w.avif 960w, /images/kerala-travel-640w.avif 640w',
        webp: '/images/kerala-travel-960w.webp 960w, /images/kerala-travel-640w.webp 640w',
      },
    },
  },
  {
    slug: 'aura-salon-spa',
    number: '03/03',
    title: 'Aura Salon & Spa',
    description:
      'High-conversion booking site with responsive localized CMS for Kochi flagship location. Custom JavaScript calendars and automated SMS confirmations.',
    tags: ['[WEBFLOW]', '[CUSTOM JS]'],
    link: '#cta',
    linkLabel: '[ VIEW CASE STUDY -> ]',
    isExternal: false,
    featuredMode: 'standard-surface',
    image: {
      src: '/images/aura-salon.jpg',
      alt: 'Minimalist high-fashion beauty salon digital experience interface layout in Kochi.',
      width: 960,
      height: 540,
      sources: {
        avif: '/images/aura-salon-960w.avif 960w, /images/aura-salon-640w.avif 640w',
        webp: '/images/aura-salon-960w.webp 960w, /images/aura-salon-640w.webp 640w',
      },
    },
  },
];
