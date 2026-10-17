/**
 * Site configuration and content data.
 * Single source of truth for all metadata, copy, branding, and placeholders.
 */

export interface SocialLink {
  label: string;
  platform: "linkedin" | "github" | "whatsapp";
  url: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  coordinates: string;
  agency: {
    name: string;
    url: string;
    role: string;
  };
  siteUrl: string;
  email: string;
  whatsapp: {
    phone: string;
    displayPhone: string;
    url: string;
  };
  availability: {
    month: string;
    cycleNotice: string;
  };
  hero: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    subheading: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    takingProjectsText: string;
  };
  about: {
    badge: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    tools: string[];
    stats: Array<{
      value: string;
      label: string;
      highlight?: boolean;
    }>;
  };
  marquee: {
    items: string[];
  };
  socialLinks: SocialLink[];
  navLinks: Array<{
    label: string;
    href: string;
  }>;
  collaborators: string[];
}

export const siteConfig: SiteConfig = {
  name: "Ranjit Rajan",
  role: "Webflow & Frontend Developer",
  location: "Kochi, Kerala, India",
  coordinates: "09°58'N 76°17'E",
  agency: {
    name: "Cocaimo",
    url: "https://www.cocaimo.com",
    role: "Co-founder",
  },
  siteUrl: "https://www.ranjitkrajan.com",
  email: "ranjitkr87@gmail.com",
  whatsapp: {
    phone: "+919895311062",
    displayPhone: "+91 98953 11062",
    url: "https://wa.me/919895311062?text=Hi%20Ranjit%20Rajan%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  },
  availability: {
    month: "NEXT MONTH",
    cycleNotice: "NEXT AVAILABLE CYCLE: 3 WEEKS",
  },
  hero: {
    badge: "WEBFLOW & FRONTEND DEVELOPER · KOCHI, INDIA",
    headingPrefix: "I turn ideas into websites that ",
    headingHighlight: "feel alive.",
    headingSuffix: "",
    subheading:
      "4 years building for agencies and product companies. Fast, responsive sites that look sharp and turn visitors into enquiries.",
    primaryCtaText: "View my work",
    primaryCtaHref: "#work",
    secondaryCtaText: "Let's talk",
    secondaryCtaHref: "#cta",
    takingProjectsText: "Taking projects from ",
  },
  about: {
    badge: "ABOUT",
    heading: "The developer behind the work",
    paragraph1:
      "I'm Ranjit Rajan, a Webflow and frontend developer and co-founder of Cocaimo, a web development and digital marketing agency in Kochi. I work directly with clients on design, development and SEO.",
    paragraph2:
      "My methodology rejects sluggish agency workflows and cookie-cutter templates. I write clean semantic markup, deploy scalable styles, and architect responsive structures that scale seamlessly as your business expands.",
    tools: [
      "Webflow",
      "React",
      "TypeScript",
      "Sanity CMS",
      "HTML/CSS/JS",
      "Figma",
    ],
    stats: [
      {
        value: "04",
        label: "YEARS AS FRONTEND DEVELOPER",
        highlight: true,
      },
      {
        value: "100%",
        label: "AGENCY + PRODUCT COMPANIES",
        highlight: false,
      },
      {
        value: "IN",
        label: "KOCHI, INDIA",
        highlight: false,
      },
    ],
  },
  marquee: {
    items: [
      "WEBFLOW",
      "REACT",
      "TYPESCRIPT",
      "SANITY CMS",
      "FIGMA",
      "TAILWIND",
      "SEO ARCHITECTURE",
      "HIGH CRAFT FRONTEND",
    ],
  },
  socialLinks: [
    {
      label: "LinkedIn",
      platform: "linkedin",
      url: "https://www.linkedin.com/in/ranjitkr87",
    },
    {
      label: "GitHub",
      platform: "github",
      url: "https://github.com/ranjitkr87",
    },
    {
      label: "WhatsApp",
      platform: "whatsapp",
      url: "https://wa.me/919895311062",
    },
  ],
  navLinks: [
    { label: "Projects", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#cta" },
  ],
  collaborators: [],
};
