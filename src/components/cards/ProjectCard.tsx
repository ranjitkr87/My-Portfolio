import React from "react";
import type { Project } from "../../content/projects.ts";

export interface ProjectCardProps {
  project: Project;
}

// Only colors differ between modes. Layout is shared.
const themes = {
  "highlight-pink": {
    // Only the card background changes; border, tags and image frame match the standard card
    card: "bg-[#FF3D9A] border-[#26262E] hover:border-[#C6FF3D]",
    tag: "bg-[#09090B] border-[#26262E] text-[#A7A29A]",
    imageFrame: "bg-[#09090B] border-[#26262E]",
    title: "text-[#09090B]",
    body: "text-[#09090B]",
    // Lime hover text would be unreadable on pink, so the link uses an underline
    link: "text-[#09090B] hover:underline underline-offset-4 decoration-2",
  },
  "standard-surface": {
    card: "bg-[#131318] border-[#26262E] hover:border-[#C6FF3D]",
    tag: "bg-[#09090B] border-[#26262E] text-[#A7A29A]",
    imageFrame: "bg-[#09090B] border-[#26262E]",
    title: "text-[#F4EFE6]",
    body: "text-[#A7A29A]",
    link: "text-[#F4EFE6] hover:text-[#C6FF3D]",
  },
} as const;

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const t = themes[project.featuredMode];
  const { src, alt, width, height, sources } = project.image;

  return (
    <article
      className={`${t.card} border rounded-[12px] p-6 sm:p-8 transition-colors duration-150 flex flex-col justify-between`}
    >
      <div>
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`${t.tag} border rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.08em]`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={`${t.imageFrame} border rounded-[16px] overflow-hidden aspect-video mb-6`}
        >
          <picture>
            {sources?.avif && (
              <source srcSet={sources.avif} type="image/avif" />
            )}
            {sources?.webp && (
              <source srcSet={sources.webp} type="image/webp" />
            )}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        <h3
          className={`${t.title} text-2xl sm:text-3xl uppercase font-bold mb-3 tracking-tight`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>
        <p className={`${t.body} text-sm sm:text-base mb-8 leading-relaxed`}>
          {project.description}
        </p>
      </div>

      <a
        href={project.link}
        target={project.isExternal ? "_blank" : undefined}
        rel={project.isExternal ? "noopener noreferrer" : undefined}
        className={`${t.link} font-mono text-xs uppercase tracking-[0.08em] font-bold py-2 inline-flex items-center min-h-[48px] transition-colors duration-150`}
      >
        {project.linkLabel}
        {project.isExternal && (
          <span className="sr-only"> (opens in a new tab)</span>
        )}
      </a>
    </article>
  );
};
