import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'paper-black';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  type = 'button',
  className = '',
  onClick,
  external = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-mono font-bold text-xs uppercase tracking-[0.08em] transition-colors duration-150 min-h-[48px] select-none';

  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses =
        'rounded-full bg-[#C6FF3D] text-[#09090B] px-8 py-3.5 hover:bg-[#FF3D9A] hover:text-[#F4EFE6]';
      break;
    case 'outline':
      variantClasses =
        'rounded-full bg-transparent border border-[#26262E] text-[#F4EFE6] px-8 py-3.5 hover:border-[#C6FF3D] hover:text-[#C6FF3D]';
      break;
    case 'paper-black':
      variantClasses =
        'rounded-full bg-[#09090B] text-[#F4EFE6] px-8 py-3.5 hover:bg-[#FF3D9A] hover:text-[#F4EFE6]';
      break;
    case 'ghost':
      variantClasses =
        'bg-transparent text-[#F4EFE6] p-0 hover:text-[#C6FF3D] border-0';
      break;
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};
