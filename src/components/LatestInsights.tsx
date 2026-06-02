"use client";

import { useState } from "react";
import type { Article } from "@/lib/content";
import ArticleModal from "./ArticleModal";
import Reveal from "./Reveal";

export default function LatestInsights({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState<Article | null>(null);

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 80}>
            <article className="card group flex h-full flex-col">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full bg-brown/10 px-2.5 py-1 font-medium text-brown">
                  {a.category}
                </span>
                <span>{a.readTime}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              <button
                type="button"
                onClick={() => setActive(a)}
                className="mt-5 inline-flex items-center gap-1 self-start text-sm font-medium text-charcoal transition-colors hover:text-brown"
              >
                Read article →
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      <ArticleModal article={active} onClose={() => setActive(null)} />
    </>
  );
}
