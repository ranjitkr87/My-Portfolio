import React from 'react';
import type { ProcessStepItem } from '../../content/process.ts';

export interface ProcessStepProps {
  step: ProcessStepItem;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step }) => {
  return (
    <div className="border-l border-[#26262E] pl-6 flex flex-col justify-between h-full">
      <div>
        <span
          className="text-5xl sm:text-6xl font-extrabold text-stroke-hairline block leading-none mb-6 select-none"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-hidden="true"
        >
          {step.number}
        </span>
        <h3
          className="text-2xl font-bold uppercase text-[#F4EFE6] mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {step.title}
        </h3>
        <p className="text-sm sm:text-base text-[#A7A29A] leading-relaxed">
          {step.description}
        </p>
      </div>
      <div className="mt-8 pt-4 border-t border-[#26262E] font-mono text-xs uppercase text-[#C6FF3D] tracking-[0.08em]">
        {step.phase}
      </div>
    </div>
  );
};
