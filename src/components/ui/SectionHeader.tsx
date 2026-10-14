import React from 'react';

export interface SectionHeaderProps {
  badge: string;
  title: string;
  meta?: string;
  badgeBg?: 'transparent' | 'lime';
  id?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  meta,
  badgeBg = 'transparent',
  id,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between border-b border-[#26262E] pb-6 mb-12 ${className}`}
    >
      <div>
        {badgeBg === 'lime' ? (
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#09090B] bg-[#C6FF3D] px-2 py-0.5 inline-block font-bold mb-3">
            {badge}
          </span>
        ) : (
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#C6FF3D] block mb-2">
            {badge}
          </span>
        )}
        <h2
          id={id}
          className="font-extrabold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F4EFE6] leading-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
      </div>
      {meta && (
        <div className="mt-4 md:mt-0 font-mono text-xs text-[#A7A29A] uppercase tracking-[0.08em]">
          {meta}
        </div>
      )}
    </div>
  );
};
