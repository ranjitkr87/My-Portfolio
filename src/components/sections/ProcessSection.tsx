import React from 'react';
import { processSteps, processSection } from '../../content/process.ts';
import { ProcessStep } from '../cards/ProcessStep.tsx';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="w-full bg-[#131318] py-24 sm:py-32 border-y border-[#26262E] reveal-section"
      data-mode="surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[#26262E] pb-6 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#C6FF3D] uppercase tracking-[0.08em] block mb-2">
            {processSection.badge}
          </span>
          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-[#F4EFE6] uppercase font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {processSection.heading}
          </h2>
        </div>

        {/* Four Columns with Giant Outlined Numerals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};
