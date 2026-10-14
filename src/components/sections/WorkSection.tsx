import React from "react";
import { projects } from "../../content/projects.ts";
import { SectionHeader } from "../ui/SectionHeader.tsx";
import { ProjectCard } from "../cards/ProjectCard.tsx";

export const WorkSection: React.FC = () => {
  const featured = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 border-t border-[#26262E] reveal-section"
      data-mode="void"
    >
      <SectionHeader
        id="work-heading"
        badge="SELECTED WORKS"
        title="Featured Projects"
        meta="2022 — 2026"
      />

      <div className="space-y-8">
        {/* Feature Card: Cocaimo.com (Flat Hot-Pink Block) */}
        {featured && <ProjectCard project={featured} />}

        {/* 2-Up Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
