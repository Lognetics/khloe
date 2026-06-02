import type { Metadata } from "next";
import LabArticles from "@/components/LabArticles";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { ARTICLES, LAB_CATEGORIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Positioning Lab",
  description:
    "Where strategy meets practical business growth. Insights on brand strategy, founder branding, market positioning, content, and consumer psychology.",
};

export default function PositioningLabPage() {
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

      {/* FEATURED + GRID (with click-to-open article popup) */}
      <LabArticles articles={ARTICLES} />

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
