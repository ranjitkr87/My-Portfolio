import React from "react";

export interface IntegrationLogoProps {
  id: string;
  size?: number;
  className?: string;
}

export const IntegrationLogo: React.FC<IntegrationLogoProps> = ({
  id,
  size = 32,
  className = "",
}) => {
  switch (id) {
    case "zapier":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Zapier Logo"
        >
          {/* Authentic Zapier Asterisk */}
          <path
            d="M12 2.5V21.5M2.5 12H21.5M5.28 5.28L18.72 18.72M18.72 5.28L5.28 18.72"
            stroke="#FF4F00"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "airtable":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Airtable Logo"
        >
          {/* Authentic Airtable Isometric Geometry */}
          <path
            d="M11.23 2.15L2.57 6.13C2.19 6.3 2 6.67 2 7.08V11.21L11.59 7.09C11.85 6.98 12.15 6.98 12.41 7.09L22 11.21V7.08C22 6.67 21.81 6.3 21.43 6.13L12.77 2.15C12.28 1.93 11.72 1.93 11.23 2.15Z"
            fill="#FCB400"
          />
          <path
            d="M12.8 8.8L21.4 12.47C21.77 12.63 22 12.98 22 13.38V19.46C22 19.98 21.45 20.33 20.97 20.12L12.4 16.45C12.15 16.34 12 16.1 12 15.83V9.5C12 9.07 12.42 8.64 12.8 8.8Z"
            fill="#18BFFF"
          />
          <path
            d="M11.2 8.8L2.6 12.47C2.23 12.63 2 12.98 2 13.38V19.46C2 19.98 2.55 20.33 3.03 20.12L11.6 16.45C11.85 16.34 12 16.1 12 15.83V9.5C12 9.07 11.58 8.64 11.2 8.8Z"
            fill="#EC0044"
          />
        </svg>
      );

    case "mailchimp":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Mailchimp Logo"
        >
          {/* Distinctive Mailchimp Silhouette Face */}
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 15.65 4.02 18.83 7 20.5V17.5C5.8 16.3 5 14.3 5 12C5 8.1 8.1 5 12 5C15.9 5 19 8.1 19 12C19 14.3 18.2 16.3 17 17.5V20.5C19.98 18.83 22 15.65 22 12C22 6.48 17.52 2 12 2Z"
            fill="#FFE01B"
          />
          <circle cx="9" cy="11.5" r="1.5" fill="#09090B" />
          <circle cx="15" cy="11.5" r="1.5" fill="#09090B" />
          <path
            d="M8.5 15C9.5 16.2 10.7 16.8 12 16.8C13.3 16.8 14.5 16.2 15.5 15"
            stroke="#09090B"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "memberstack":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Memberstack Logo"
        >
          {/* Memberstack Dual Interlocking Layer Mark */}
          <path d="M3 7.5L12 3L21 7.5L12 12L3 7.5Z" fill="#2563EB" />
          <path
            d="M3 12.5L12 17L21 12.5"
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16.5L12 21L21 16.5"
            stroke="#93C5FD"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "make":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Make Logo"
        >
          {/* Make / Integromat Interlocking Circular Nodes */}
          <circle cx="7" cy="8" r="4.5" fill="#6D28D9" />
          <circle cx="17" cy="8" r="4.5" fill="#A855F7" />
          <circle cx="12" cy="16.5" r="4.5" fill="#EC4899" />
          <path
            d="M7 8L12 16.5M17 8L12 16.5"
            stroke="#F4EFE6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "hubspot":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="HubSpot Logo"
        >
          {/* HubSpot Sprocket Glyphs and Orbital Nodes */}
          <path
            d="M17.5 7.5C18.88 7.5 20 6.38 20 5C20 3.62 18.88 2.5 17.5 2.5C16.12 2.5 15 3.62 15 5C15 5.3 15.06 5.58 15.17 5.83L11.3 8.35C10.74 7.82 9.98 7.5 9.15 7.5C7.29 7.5 5.78 9.01 5.78 10.87C5.78 11.23 5.84 11.58 5.96 11.9L2.83 14.19C2.47 13.97 2.05 13.85 1.6 13.85C0.72 13.85 0 14.57 0 15.45C0 16.33 0.72 17.05 1.6 17.05C2.48 17.05 3.2 16.33 3.2 15.45C3.2 15.22 3.15 15 3.06 14.81L6.15 12.55C6.88 13.56 8.07 14.24 9.42 14.24C11.28 14.24 12.79 12.73 12.79 10.87C12.79 10.63 12.75 10.39 12.69 10.16L16.29 7.82C16.63 8.06 17.05 8.2 17.5 8.2V7.5Z"
            fill="#FF7A59"
          />
          <circle cx="17.5" cy="5" r="2.5" fill="#FF7A59" />
          <circle cx="9.3" cy="10.8" r="3.2" stroke="#FF7A59" strokeWidth="2" />
          <circle cx="17.5" cy="16.5" r="2.5" fill="#FF7A59" />
          <line
            x1="9.3"
            y1="14"
            x2="15.5"
            y2="16.5"
            stroke="#FF7A59"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "stripe":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Stripe Logo"
        >
          {/* Authentic Stripe Italic "S" Geometry */}
          <rect width="24" height="24" rx="6" fill="#635BFF" />
          <path
            d="M14.6 9.68C14.6 8.7 13.78 8.1 12.44 8.1C10.74 8.1 9.45 8.68 8.87 9.02L8.2 7.23C8.94 6.78 10.62 6.2 12.56 6.2C15.1 6.2 17.06 7.42 17.06 9.87C17.06 13.4 12.21 12.98 12.21 14.77C12.21 15.86 13.16 16.28 14.54 16.28C16.26 16.28 17.72 15.65 18.29 15.25L18.9 17.07C18.15 17.62 16.36 18.2 14.31 18.2C11.58 18.2 9.69 16.92 9.69 14.53C9.69 10.95 14.6 11.45 14.6 9.68Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "finsweet":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Finsweet Logo"
        >
          {/* Finsweet Geometric Bracket/FS Mark */}
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#09090B"
            stroke="#00E599"
            strokeWidth="1.5"
          />
          <path d="M7 6H17V9.5H10.5V11.5H15V14.5H10.5V18H7V6Z" fill="#00E599" />
          <circle cx="17" cy="16.5" r="1.5" fill="#C6FF3D" />
        </svg>
      );

    default:
      return null;
  }
};
