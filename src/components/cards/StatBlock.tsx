import React from 'react';

export interface StatBlockProps {
  value: string;
  label: string;
  highlight?: boolean;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  value,
  label,
  highlight = false,
}) => {
  return (
    <div
      className={`border-t-2 pt-4 ${
        highlight ? 'border-[#C6FF3D]' : 'border-[#26262E]'
      }`}
    >
      <span
        className="text-4xl sm:text-5xl font-extrabold text-[#F4EFE6] block leading-none mb-1 tracking-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {value}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#A7A29A]">
        {label}
      </span>
    </div>
  );
};
