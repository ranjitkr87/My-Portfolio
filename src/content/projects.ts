/**
 * Projects data.
 * Exact copy, tags, numbers, and image assets matching design.
 */

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  isExternal: boolean;
  featuredMode: "highlight-pink" | "standard-surface";
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
    slug: "whispering-greens",
    title: "www.whisperinggreens.com",
    description:
      "A nature-inspired website where fluid interactions, organic visuals, and understated elegance come together to create a smooth, immersive digital experience.",
    tags: ["WEBFLOW", "FIGMA", "SEO ARCHITECTURE"],
    link: "https://www.whisperinggreens.com",
    linkLabel: "VIEW PROJECT",
    isExternal: true,
    featuredMode: "standard-surface",
    image: {
      src: "/images/whispering-greens.avif",
      alt: "Whispering Greens website architecture and digital experience for a luxury eco-resort in Bangalore, India",
      width: 1878,
      height: 866,
    },
  },
  {
    slug: "iomovo",
    title: "www.iomovo.com",
    description:
      "Developed a scalable Webflow experience for ioMoVo a digital asset management platform, featuring multilingual localization, CMS-driven content, dynamic filtering, pagination, and responsive layouts to deliver seamless navigation across a content-rich SaaS website.",
    tags: [
      "WEBFLOW",
      "FIGMA",
      "CMS",
      "FINSWEET",
      "SEO ARCHITECTURE",
      "LOCALIZATION",
    ],
    link: "https://www.iomovo.com",
    linkLabel: "VIEW PROJECT",
    isExternal: true,
    featuredMode: "standard-surface",
    image: {
      src: "/images/iomovo.avif",
      alt: "ioMoVo website architecture and digital asset management platform",
      width: 1858,
      height: 868,
    },
  },
  {
    slug: "jiitkak",
    title: "www.jiitak.jp",
    description:
      "Company website for JIITAK, a Japan-based product development and DX company. Built in Webflow from the Figma design, with a CMS-driven case-study library, a filterable blog and scroll animations.",
    tags: [
      "WEBFLOW",
      "FIGMA",
      "CMS",
      "FINSWEET",
      "SEO ARCHITECTURE",
      "LOCALIZATION",
    ],
    link: "https://www.jiitak.jp",
    linkLabel: "VIEW PROJECT",
    isExternal: true,
    featuredMode: "standard-surface",
    image: {
      src: "/images/jiitak.avif",
      alt: "JIITAK homepage hero with a large Japanese headline about turning today’s challenges into tomorrow’s value, and a consult button.",
      width: 1847,
      height: 865,
    },
  },
  {
    slug: "cocaimo",
    title: "www.cocaimo.com",
    description:
      "Website for Cocaimo, the web development and digital marketing agency I co-founded in Kochi. Built in React and TypeScript with an SEO-first structure, schema markup and full copy across 8 service and information pages.",
    tags: ["REACT", "TYPESCRIPT", "SEO ARCHITECTURE"],
    link: "https://www.cocaimo.com",
    linkLabel: "VIEW PROJECT",
    isExternal: true,
    featuredMode: "standard-surface",
    image: {
      src: "/images/cocaimo.avif",
      alt: "Cocaimo homepage hero with the headline",
      width: 1643,
      height: 868,
    },
  },
  {
    slug: "arbuza",
    title: "www.arbuza.in",
    description:
      "Website for ARBUZA, a precision-nutrition practice combining systems biology with personalized clinical care. Built in Webflow from the client’s Figma design, with a refined premium look and a clear path to booking a discovery call.",
    tags: ["WEBFLOW", "FIGMA", "CMS", "SEO ARCHITECTURE"],
    link: "https://www.arbuza.in/",
    linkLabel: "VIEW PROJECT",
    isExternal: true,
    featuredMode: "standard-surface",
    image: {
      src: "/images/arbuza.avif",
      alt: "ARBUZA homepage hero with the headline “Systems Biology meets Precision Nutrition",
      width: 1882,
      height: 833,
    },
  },
];
