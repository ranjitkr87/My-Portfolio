import React from 'react';

export interface ChipProps {
  children: React.ReactNode;
  variant?: 'surface' | 'paper' | 'black' | 'lime';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'surface',
  className = '',
}) => {
  let styleClasses = '';
  switch (variant) {
    case 'surface':
      styleClasses =
        'bg-[#131318] border border-[#26262E] text-[#A7A29A] rounded-full';
      break;
    case 'paper':
      styleClasses =
        'bg-[#F4EFE6] border border-[#D9D3C7] text-[#09090B] rounded-[4px]';
      break;
    case 'black':
      styleClasses =
        'bg-[#09090B] border border-[#26262E] text-[#F4EFE6] rounded-full';
      break;
    case 'lime':
      styleClasses =
        'bg-[#C6FF3D] border border-[#C6FF3D] text-[#09090B] font-bold rounded-full';
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] ${styleClasses} ${className}`}
    >
      {children}
    </span>
  );
};
