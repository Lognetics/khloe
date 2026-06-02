"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Article } from "@/lib/content";

type ArticleModalProps = {
  article: Article | null;
  onClose: () => void;
};

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  // Close on Esc + lock body scroll while open
  useEffect(() => {
    if (!article) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close article"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-charcoal/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      />

      {/* Panel */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[1.75rem] bg-offwhite shadow-2xl animate-slide-in sm:rounded-[1.75rem]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-charcoal/10 bg-white px-6 py-5 md:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="rounded-full bg-brown/10 px-2.5 py-1 font-medium text-brown">
                {article.category}
              </span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight md:text-3xl">
              {article.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:bg-charcoal hover:text-offwhite"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="overflow-y-auto px-6 py-7 md:px-8">
          <p className="text-lg font-medium leading-relaxed text-charcoal">{article.excerpt}</p>
          <div className="mt-5 space-y-4">
            {article.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-charcoal/80">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-charcoal/10 pt-7">
            <span className="text-sm text-muted">Enjoyed this? Let&apos;s sharpen your positioning.</span>
            <Link href="/contact" className="btn-primary text-sm" onClick={onClose}>
              Book a Strategy Session →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
