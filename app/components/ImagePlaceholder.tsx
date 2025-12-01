'use client';

import Image from 'next/image';

interface ImagePlaceholderProps {
  src?: string;
  width?: string;
  height?: string;
  label?: string;
  priority?: boolean;
  objectPosition?: string;
}

export default function ImagePlaceholder({ 
  src,
  width = 'w-full', 
  height = 'h-64',
  label = 'Image Placeholder',
  priority = false,
  objectPosition = 'center'
}: ImagePlaceholderProps) {
  return (
    <div className={`${width} ${height} relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100`}>
      {src ? (
        <Image 
          src={src}
          alt={label}
          fill
          className="object-cover"
          style={{ objectPosition }}
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
          quality={85}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-sm text-zinc-400">{label}</span>
        </div>
      )}
    </div>
  );
}

