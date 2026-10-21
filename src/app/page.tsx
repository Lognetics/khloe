import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import NoteCard from "@/components/NoteCard";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { EXPLORING, FIELD_NOTES, METHOD, PROOF, SYMPTOMS } from "@/lib/content";

export default function HomePage() {
  const netics = FIELD_NOTES.find((n) => n.slug === "gtm-experiments-netics-ai");

  return (
    <>
      {/* ---------- HERO ---------- */}
      <HeroSlider />

      {/* ---------- PROOF STRIP ---------- */}
      <section className="border-b border-charcoal/10 bg-white">
        <div className="container-x grid divide-y divide-charcoal/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {PROOF.map((p, i) => (
            <Reveal key={p.label} delay={i * 80} className="py-7 md:px-8 md:py-9 md:first:pl-0 md:last:pr-0">
              <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{p.value}</p>
              <p className="mt-1.5 text-sm text-muted">{p.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- THE QUESTION BEHIND MY WORK ---------- */}
      <section className="surface-grid py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-2">
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
            <Reveal delay={120} className="flex flex-col justify-end gap-5 text-lg leading-relaxed text-muted">
              <p>
                Most founders know they need customers. The harder part is understanding what&apos;s
                really going on when growth stalls.
              </p>
              <p className="font-medium text-charcoal">
                That&apos;s the gap I&apos;m interested in understanding.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SYMPTOMS.map((s, i) => (
              <Reveal key={s.stage} delay={i * 70}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-charcoal/25 hover:shadow-[0_24px_50px_-28px_rgba(26,20,16,0.45)]">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brown">
                    {s.stage}
                  </span>
                  <p className="mt-6 font-display text-2xl font-semibold leading-tight">{s.question}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT I'M EXPLORING ---------- */}
      <section className="surface-dark py-20 md:py-28">
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
                <div className="group grid items-stretch overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20 md:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-[22rem]">
                    <Photo
                      src={e.image}
                      alt={e.title}
                      label={e.title}
                      className="object-[50%_25%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-charcoal/40" />
                  </div>
                  <div className="flex flex-col justify-center px-7 py-8 md:px-12 md:py-10">
                    <span className="section-index">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-2xl font-semibold md:text-[2rem]">{e.title}</h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
                      {e.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- METHOD ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <Reveal>
              <span className="eyebrow">How I approach it</span>
              <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
                Find the constraint. <span className="text-muted">Test the right intervention.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-md text-lg leading-relaxed text-muted md:justify-self-end">
                A GTM experiment isn&apos;t validated because an idea sounds right. It&apos;s
                validated when customer behaviour gives us evidence about what works.
              </p>
            </Reveal>
          </div>

          <ol className="relative mt-14 grid gap-4 md:grid-cols-5 md:gap-0">
            {/* connecting line */}
            <span aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-charcoal/15 md:block" />
            {METHOD.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 80} className="relative md:pr-6">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-charcoal/15 bg-offwhite font-display text-sm font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CURRENTLY BUILDING ---------- */}
      {netics && (
        <section className="pb-20 md:pb-28">
          <div className="container-x">
            <Reveal>
              <Link
                href={`/field-notes/${netics.slug}`}
                className="surface-dark group grid gap-8 rounded-[2rem] p-8 md:grid-cols-[1.3fr_1fr] md:items-center md:p-14"
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                    Currently building
                  </span>
                  <h2 className="heading-xl mt-6 text-3xl md:text-5xl">
                    Testing it all in real time at <span className="text-gold">Netics AI</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">{netics.dek}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Read the experiments
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["Ideal customer", "Onboarding", "Messaging", "Sales & marketing"].map((t, i) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors group-hover:border-white/20"
                    >
                      <span className="section-index">Exp. {String(i + 1).padStart(2, "0")}</span>
                      <p className="mt-3 font-display text-lg font-medium leading-tight">{t}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

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
