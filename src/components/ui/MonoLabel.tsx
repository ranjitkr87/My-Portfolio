import React from 'react';

export interface MonoLabelProps {
  children: React.ReactNode;
  color?: 'lime' | 'muted' | 'text' | 'pink' | 'paper-muted' | 'paper-black';
  dot?: boolean;
  className?: string;
}

export const MonoLabel: React.FC<MonoLabelProps> = ({
  children,
  color = 'muted',
  dot = false,
  className = '',
}) => {
  let colorClass = 'text-[#A7A29A]';
  let dotColor = 'bg-[#C6FF3D]';

  switch (color) {
    case 'lime':
      colorClass = 'text-[#C6FF3D]';
      dotColor = 'bg-[#C6FF3D]';
      break;
    case 'text':
      colorClass = 'text-[#F4EFE6]';
      dotColor = 'bg-[#C6FF3D]';
      break;
    case 'pink':
      colorClass = 'text-[#FF3D9A]';
      dotColor = 'bg-[#FF3D9A]';
      break;
    case 'paper-muted':
      colorClass = 'text-[#5E5A52]';
      dotColor = 'bg-[#09090B]';
      break;
    case 'paper-black':
      colorClass = 'text-[#09090B]';
      dotColor = 'bg-[#09090B]';
      break;
  }

  return (
    <div
      className={`inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.08em] ${colorClass} ${className}`}
    >
      {dot && <span className={`w-2 h-2 ${dotColor} inline-block flex-shrink-0`} aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
};
