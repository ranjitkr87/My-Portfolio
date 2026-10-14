import React from 'react';
import type { Project } from '../../content/projects.ts';
import { Picture } from '../ui/Picture.tsx';

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (project.featuredMode === 'highlight-pink') {
    return (
      <article className="bg-[#FF3D9A] rounded-[12px] p-8 md:p-12 text-[#09090B] border border-[#FF3D9A] transition-colors duration-150">
        <div className="flex justify-between items-start mb-12 md:mb-16">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#09090B] px-3 py-1 font-mono text-xs text-[#F4EFE6] uppercase tracking-[0.08em] font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-mono text-sm md:text-base font-bold tracking-widest text-[#09090B]">
            {project.number}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h3
              className="text-4xl sm:text-5xl md:text-7xl leading-none font-extrabold uppercase tracking-tight text-[#09090B] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#09090B] max-w-2xl font-medium leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href={project.link}
              target={project.isExternal ? '_blank' : undefined}
              rel={project.isExternal ? 'noopener noreferrer' : undefined}
              className="rounded-full bg-[#09090B] text-[#F4EFE6] px-8 py-3.5 font-mono text-xs uppercase tracking-[0.08em] font-bold hover:bg-[#C6FF3D] hover:text-[#09090B] transition-colors duration-150 inline-flex items-center justify-center min-h-[48px]"
            >
              {project.linkLabel}
            </a>
          </div>
        </div>
      </article>
    );
  }

  // Standard surface card
  const baseName = project.slug === 'kerala-travel-concierge' ? 'kerala-travel' : 'aura-salon';

  return (
    <article className="bg-[#131318] border border-[#26262E] hover:border-[#C6FF3D] rounded-[12px] p-6 sm:p-8 transition-colors duration-150 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#09090B] border border-[#26262E] px-3 py-1 font-mono text-xs text-[#A7A29A] uppercase tracking-[0.08em]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-mono text-xs sm:text-sm text-[#A7A29A] uppercase tracking-[0.08em]">
            {project.number}
          </span>
        </div>
        <div className="rounded-[16px] overflow-hidden aspect-video bg-[#09090B] border border-[#26262E] mb-6">
          <Picture
            baseName={baseName}
            alt={project.image.alt}
            width={960}
            height={540}
            sizes="(max-width: 768px) 100vw, 50vw"
            widths={[640, 960]}
            priority={false}
            aspectRatio="16/9"
          />
        </div>
        <h3
          className="text-2xl sm:text-3xl text-[#F4EFE6] uppercase font-bold mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-[#A7A29A] mb-8 leading-relaxed">
          {project.description}
        </p>
      </div>
      <a
        href={project.link}
        className="font-mono text-xs uppercase tracking-[0.08em] text-[#F4EFE6] hover:text-[#C6FF3D] transition-colors duration-150 py-2 inline-flex items-center min-h-[48px]"
      >
        {project.linkLabel}
      </a>
    </article>
  );
};
