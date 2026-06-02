"use client";

import { useState } from "react";
import type { Article } from "@/lib/content";
import ArticleModal from "./ArticleModal";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function LabArticles({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState<Article | null>(null);
  const [featured, ...rest] = articles;

  return (
    <>
      {/* FEATURED */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <button
              type="button"
              onClick={() => setActive(featured)}
              className="group grid w-full gap-8 overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white text-left transition-colors hover:border-charcoal/25 md:grid-cols-2"
            >
              <div className="relative min-h-[20rem] overflow-hidden bg-soft-gray/30">
                <Photo src="lab-featured.jpg" alt={featured.title} label="Featured insight" />
                <span className="absolute left-5 top-5 rounded-full bg-charcoal/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-offwhite">
                  Featured insight
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-brown/10 px-2.5 py-1 font-medium text-brown">
                    {featured.category}
                  </span>
                  <span>{featured.readTime}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{featured.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors group-hover:text-brown">
                  Read article →
                </span>
              </div>
            </button>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20 md:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setActive(a)}
                className="card group flex h-full w-full flex-col text-left"
              >
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-brown/10 px-2.5 py-1 font-medium text-brown">
                    {a.category}
                  </span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-muted">{a.date}</span>
                  <span className="font-medium text-charcoal transition-colors group-hover:text-brown">
                    Read →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <ArticleModal article={active} onClose={() => setActive(null)} />
    </>
  );
}
