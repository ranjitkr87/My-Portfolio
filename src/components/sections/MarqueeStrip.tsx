import React from 'react';
import { siteConfig } from '../../content/site.ts';

export const MarqueeStrip: React.FC = () => {
  const marqueeText = `${siteConfig.marquee.items.join(' · ')} · `;

  return (
    <section
      aria-label="Skill capabilities marquee"
      className="w-full bg-[#09090B] border-y border-[#26262E] py-6 sm:py-8 overflow-hidden"
      data-mode="void"
    >
      <div className="marquee-container">
        <div className="marquee-track">
          <span
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-stroke-hairline px-4 select-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {marqueeText}
          </span>
          <span
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-stroke-hairline px-4 select-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {marqueeText}
          </span>
        </div>
        <div className="marquee-track" aria-hidden="true">
          <span
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-stroke-hairline px-4 select-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {marqueeText}
          </span>
          <span
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-stroke-hairline px-4 select-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
};
