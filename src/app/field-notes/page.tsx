import type { Metadata } from "next";
import Link from "next/link";
import NoteCard from "@/components/NoteCard";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { FIELD_NOTES, readTime } from "@/lib/content";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Founder interviews, customer behaviour notes, and live GTM experiments — what happens between launching a SaaS product and building repeatable revenue.",
};

export default function FieldNotesPage() {
  const [featured, ...rest] = FIELD_NOTES;

  return (
    <>
      <PageHeader
        eyebrow="Field notes"
        title={
          <>
            Notes from the <span className="text-gold">messy middle</span>
          </>
        }
        subtitle="A live feed of my latest interviews, founder insights, experiments, and practical resources."
      />

      {/* FEATURED */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <Link
              href={`/field-notes/${featured.slug}`}
              className="group grid w-full overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white transition-colors hover:border-charcoal/25 md:grid-cols-2"
            >
              <div className="relative min-h-[20rem] overflow-hidden bg-soft-gray/30">
                <Photo src={featured.image} alt={featured.title} label={featured.series} />
                <span className="absolute left-5 top-5 rounded-full bg-charcoal/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-offwhite">
                  Latest entry
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-brown/10 px-2.5 py-1 font-medium text-brown">
                    {featured.kind}
                  </span>
                  <span>{readTime(featured)}</span>
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  {featured.series}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{featured.dek}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors group-hover:text-brown">
                  Read the entry →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20 md:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {rest.map((n, i) => (
            <Reveal key={n.slug} delay={(i % 2) * 70}>
              <NoteCard note={n} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
