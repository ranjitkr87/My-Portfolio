import React from 'react';

export interface IconProps {
  name:
    | 'arrow-right'
    | 'arrow-diagonal'
    | 'check'
    | 'dot'
    | 'menu'
    | 'close'
    | 'linkedin'
    | 'github'
    | 'whatsapp';
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 16 }) => {
  switch (name) {
    case 'arrow-right':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
    case 'arrow-diagonal':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      );
    case 'check':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case 'dot':
      return (
        <span
          className={`inline-block rounded-full ${className}`}
          style={{ width: size, height: size }}
          aria-hidden="true"
        />
      );
    case 'menu':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );
    case 'close':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case 'github':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.11 19.1L7.83 18.93L4.72 19.75L5.55 16.71L5.36 16.41C4.58 15.17 4.17 13.56 4.17 11.91C4.17 7.37 7.87 3.67 12.05 3.67ZM8.83 7.35C8.63 7.35 8.3 7.42 8.04 7.71C7.78 8 7.04 8.7 7.04 10.12C7.04 11.54 8.07 12.91 8.21 13.1C8.36 13.3 10.25 16.22 13.15 17.47C13.84 17.77 14.38 17.95 14.8 18.08C15.5 18.3 16.13 18.27 16.63 18.2C17.19 18.11 18.35 17.49 18.59 16.81C18.83 16.14 18.83 15.56 18.76 15.44C18.69 15.32 18.5 15.25 18.2 15.1C17.91 14.95 16.49 14.25 16.23 14.15C15.97 14.05 15.78 14 15.59 14.29C15.4 14.59 14.85 15.24 14.68 15.44C14.51 15.63 14.34 15.66 14.05 15.51C13.76 15.36 12.82 15.05 11.71 14.06C10.84 13.29 10.25 12.33 10.08 12.04C9.91 11.75 10.06 11.59 10.21 11.44C10.34 11.31 10.5 11.1 10.65 10.93C10.8 10.76 10.85 10.63 10.95 10.44C11.05 10.25 11 10.08 10.93 9.93C10.85 9.79 10.31 8.45 10.08 7.91C9.86 7.39 9.64 7.46 9.47 7.45C9.32 7.44 9.14 7.35 8.96 7.35H8.83Z" />
        </svg>
      );
    default:
      return null;
  }
};
