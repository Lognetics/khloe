import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import NoteCard from "@/components/NoteCard";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { EXPLORING, FIELD_NOTES } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <HeroSlider />

      {/* ---------- THE QUESTION BEHIND MY WORK ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">The question behind my work</span>
            <h2 className="heading-xl mt-6 text-4xl md:text-5xl">
              Building is no longer the hard part.
              <span className="mt-2 block text-muted">
                What happens when the market doesn&apos;t respond{" "}
                <span className="text-charcoal">the way you expected?</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center gap-5 text-lg leading-relaxed text-muted">
            <p>
              Most founders know they need customers. The harder part is understanding why people
              aren&apos;t buying, why users aren&apos;t activating, why customers leave, or why early
              sales don&apos;t turn into a repeatable process.
            </p>
            <p className="font-medium text-charcoal">
              That&apos;s the gap I&apos;m interested in understanding.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHAT I'M EXPLORING ---------- */}
      <section className="bg-charcoal py-20 text-offwhite md:py-28">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="eyebrow text-white/50 before:bg-gold">What I&apos;m exploring</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              Three sides of the <span className="text-gold">same problem</span>
            </h2>
          </Reveal>

          <div className="mt-14 space-y-6">
            {EXPLORING.map((e, i) => (
              <Reveal key={e.title} delay={i * 60}>
                <div className="grid items-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:grid-cols-[0.8fr_1.2fr] md:gap-10">
                  <div className="aspect-[16/10] w-full overflow-hidden md:aspect-auto md:h-64">
                    <Photo src={e.image} alt={e.title} label={e.title} />
                  </div>
                  <div className="px-7 pb-8 md:px-0 md:pb-0 md:pr-10">
                    <span className="font-display text-sm font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{e.title}</h3>
                    <p className="mt-3 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
                      {e.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LATEST FIELD NOTES ---------- */}
      <section className="border-t border-charcoal/10 bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-xl">
              <span className="eyebrow">Latest field notes</span>
              <h2 className="heading-xl mt-5 text-4xl md:text-5xl">From the field</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                A live feed of my latest interviews, founder insights, experiments, and practical
                resources.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/field-notes" className="btn-outline">
                Read the latest notes →
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FIELD_NOTES.slice(0, 3).map((n, i) => (
              <Reveal key={n.slug} delay={i * 80}>
                <NoteCard note={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
