import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ARTICLES, LAB_CATEGORIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Positioning Lab",
  description:
    "Where strategy meets practical business growth. Insights on brand strategy, founder branding, market positioning, content, and consumer psychology.",
};

export default function PositioningLabPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <PageHeader
        eyebrow="The Positioning Lab"
        title={
          <>
            Where strategy meets <span className="text-gold">practical growth</span>
          </>
        }
        subtitle="Field notes, frameworks, and arguments on positioning — written for founders who'd rather think than chase trends."
      />

      {/* CATEGORIES */}
      <section className="border-b border-charcoal/10 bg-white py-6">
        <div className="container-x flex flex-wrap gap-2.5">
          <span className="rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-offwhite">
            All
          </span>
          {LAB_CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-charcoal hover:text-charcoal"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <article className="group grid gap-8 overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white md:grid-cols-2">
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
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-charcoal">
                  Read article →
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20 md:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 70}>
              <article className="card group flex h-full flex-col">
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
                  <span className="font-medium text-charcoal">Read →</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-charcoal/10 bg-charcoal text-offwhite">
        <div className="container-x py-20 text-center md:py-24">
          <Reveal>
            <span className="eyebrow mx-auto text-white/50 before:bg-gold">The Positioning Journal</span>
            <h2 className="heading-xl mx-auto mt-5 max-w-3xl text-3xl md:text-5xl">
              Weekly strategic insights for founders who want to lead, not just exist online.
            </h2>
            <form className="mx-auto mt-9 flex max-w-md gap-2" action="/contact">
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-offwhite placeholder:text-white/35 focus:border-gold focus:outline-none"
              />
              <button type="submit" className="btn-gold">
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
