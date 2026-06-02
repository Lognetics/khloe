"use client";

import { useState } from "react";

type PhotoProps = {
  /** filename inside /public/images, e.g. "khloe-hero.jpg" */
  src: string;
  alt: string;
  /** label shown on the placeholder before the real photo is added */
  label?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renders the real image from /public/images once it's added.
 * Until then (or if it fails to load) it shows a labeled placeholder,
 * so the layout never breaks while photos are being supplied.
 */
export default function Photo({ src, alt, label, className = "", priority }: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const url = `/images/${src}`;

  if (failed) {
    return (
      <div className={`img-ph ${className}`} role="img" aria-label={alt}>
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-50">
            <path
              d="M4 5h16v14H4z M4 15l4-4 3 3 4-5 5 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="9" r="1.4" fill="currentColor" />
          </svg>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em]">
            {label ?? "Add photo"}
          </span>
          <span className="text-[10px] opacity-60">images/{src}</span>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
