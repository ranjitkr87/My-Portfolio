/**
 * Process steps data.
 * Exact copy and phase badges.
 */

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export const processSection = {
  badge: "PROCESS",
  heading: "How we work together.",
};

export const processSteps: ProcessStepItem[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Uncovering goals, audience needs, and technical boundaries before touching design.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Translating product requirements into responsive wireframes and interactive prototypes in Figma.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Building pixel-perfect Webflow and React implementations with strict semantic code quality.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Testing cross-browser performance, deploying SEO schema, and training teams on CMS handoff.",
  },
];
