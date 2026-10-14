import React from 'react';
import type { Service } from '../../content/services.ts';

export interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isWide = service.spanTwoColumns;

  if (service.id === 'cms-dynamic-content') {
    return (
      <div className="md:col-span-2 bg-[#FAF7F2] border border-[#D9D3C7] rounded-[12px] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#5E5A52] block mb-2">
              {service.capabilityLabel}
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#09090B] mb-2 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-[#5E5A52] max-w-xl leading-relaxed">
              {service.description}
            </p>
          </div>
          {service.footerBadge && (
            <div className="mt-2 md:mt-0 flex-shrink-0">
              <span className="rounded-full bg-[#09090B] text-[#F4EFE6] px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] font-bold inline-block">
                {service.footerBadge}
              </span>
            </div>
          )}
        </div>
        {service.tags && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D9D3C7]/60">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#F4EFE6] border border-[#D9D3C7] font-mono text-xs uppercase tracking-[0.08em] text-[#09090B] rounded-[4px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (isWide) {
    return (
      <div className="md:col-span-2 bg-[#FAF7F2] border border-[#D9D3C7] rounded-[12px] p-6 sm:p-8 md:p-10">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#5E5A52] block mb-4">
          {service.capabilityLabel}
        </span>
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#09090B] mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-[#5E5A52] leading-relaxed max-w-2xl mb-6">
          {service.description}
        </p>
        {service.tags && (
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#F4EFE6] border border-[#D9D3C7] font-mono text-xs uppercase tracking-[0.08em] text-[#09090B] rounded-[4px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] border border-[#D9D3C7] rounded-[12px] p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#5E5A52] block mb-3">
          {service.capabilityLabel}
        </span>
        <h3
          className="text-xl sm:text-2xl font-bold uppercase text-[#09090B] mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-[#5E5A52] leading-relaxed">
          {service.description}
        </p>
      </div>
      {service.footerBadge && (
        <div className="mt-8 font-mono text-xs uppercase text-[#09090B] font-bold">
          {service.footerBadge}
        </div>
      )}
    </div>
  );
};
