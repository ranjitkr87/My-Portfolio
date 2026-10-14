import React from "react";
import { siteConfig } from "../../content/site.ts";

export const WhatsAppButton: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={siteConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message Ranjit Rajan on WhatsApp at ${siteConfig.whatsapp.displayPhone}`}
        className="group flex items-center space-x-2.5 rounded-full bg-[#09090B] border border-[#26262E] hover:border-[#C6FF3D] px-4 py-3 text-[#F4EFE6] transition-all duration-150 shadow-none hover:bg-[#C6FF3D] hover:text-[#09090B] min-h-[48px] min-w-[48px]"
      >
        {/* Pulsing Green/Lime Status Indicator */}
        {/* <span
          className="relative flex h-2.5 w-2.5 flex-shrink-0"
          aria-hidden="true"
        >
          <span className="inline-flex rounded-full h-2.5 w-2.5 bg-[#C6FF3D] group-hover:bg-[#09090B]" />
        </span> */}

        {/* WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="flex-shrink-0 text-[#C6FF3D] group-hover:text-[#09090B] transition-colors"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.11 19.1L7.83 18.93L4.72 19.75L5.55 16.71L5.36 16.41C4.58 15.17 4.17 13.56 4.17 11.91C4.17 7.37 7.87 3.67 12.05 3.67ZM8.83 7.35C8.63 7.35 8.3 7.42 8.04 7.71C7.78 8 7.04 8.7 7.04 10.12C7.04 11.54 8.07 12.91 8.21 13.1C8.36 13.3 10.25 16.22 13.15 17.47C13.84 17.77 14.38 17.95 14.8 18.08C15.5 18.3 16.13 18.27 16.63 18.2C17.19 18.11 18.35 17.49 18.59 16.81C18.83 16.14 18.83 15.56 18.76 15.44C18.69 15.32 18.5 15.25 18.2 15.1C17.91 14.95 16.49 14.25 16.23 14.15C15.97 14.05 15.78 14 15.59 14.29C15.4 14.59 14.85 15.24 14.68 15.44C14.51 15.63 14.34 15.66 14.05 15.51C13.76 15.36 12.82 15.05 11.71 14.06C10.84 13.29 10.25 12.33 10.08 12.04C9.91 11.75 10.06 11.59 10.21 11.44C10.34 11.31 10.5 11.1 10.65 10.93C10.8 10.76 10.85 10.63 10.95 10.44C11.05 10.25 11 10.08 10.93 9.93C10.85 9.79 10.31 8.45 10.08 7.91C9.86 7.39 9.64 7.46 9.47 7.45C9.32 7.44 9.14 7.35 8.96 7.35H8.83Z" />
        </svg>

        {/* <span className="font-mono text-xs uppercase font-bold tracking-[0.08em]">
          WHATSAPP
        </span> */}
      </a>
    </aside>
  );
};
