import React from 'react';

export interface PictureProps {
  baseName: string; // e.g. 'ranjit-hero' or 'kerala-travel'
  alt: string;
  width: number;
  height: number;
  sizes: string;
  widths?: number[];
  priority?: boolean;
  className?: string;
  aspectRatio?: string;
}

export const Picture: React.FC<PictureProps> = ({
  baseName,
  alt,
  width,
  height,
  sizes,
  widths = [480, 720, 960],
  priority = false,
  className = '',
  aspectRatio,
}) => {
  const avifSrcset = widths
    .map((w) => `/images/${baseName}-${w}w.avif ${w}w`)
    .join(', ');
  const webpSrcset = widths
    .map((w) => `/images/${baseName}-${w}w.webp ${w}w`)
    .join(', ');
  const jpgSrcset = widths
    .map((w) => `/images/${baseName}-${w}w.jpg ${w}w`)
    .join(', ');
  const fallbackSrc = `/images/${baseName}.jpg`;

  return (
    <picture style={aspectRatio ? { aspectRatio } : undefined}>
      <source type="image/avif" srcSet={avifSrcset} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcset} sizes={sizes} />
      <img
        src={fallbackSrc}
        srcSet={jpgSrcset}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={`w-full h-full object-cover ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    </picture>
  );
};
