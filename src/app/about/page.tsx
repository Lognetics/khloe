import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { ABOUT_CHAPTERS, ABOUT_CLOSING, ABOUT_INTRO, FOR_FREE, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "From a bank job to copywriting, brand strategy, and managing director at Lognetics — how Khloe Obiegbu ended up obsessed with go-to-market.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Tech was never <span className="text-gold">in the plans.</span>
          </>
        }
        subtitle="How a bank job, copywriting, and a lot of founder conversations led me down the GTM rabbit hole."
      >
        <div className="mt-9 flex flex-wrap gap-2">
          {ABOUT_CHAPTERS.map((c) => (
            <span
              key={c.marker}
              className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/60"
            >
              {c.marker}
            </span>
          ))}
        </div>
      </PageHeader>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-charcoal/10 bg-soft-gray/30">
                <Photo src="khloe-about.jpg" alt="Khloe Obiegbu" label="Khloe — about portrait" />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-charcoal/10 bg-white/95 p-5 shadow-xl backdrop-blur">
                <p className="font-display text-lg font-semibold">{SITE.name}</p>
                <p className="text-sm text-muted">Managing Director, Lognetics · Building Netics AI</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">How I got here</span>
              <p className="heading-xl mt-6 text-3xl leading-[1.12] md:text-[2.6rem]">{ABOUT_INTRO}</p>
            </Reveal>

            {/* TIMELINE */}
            <ol className="relative mt-14 space-y-12 border-l border-charcoal/15 pl-8 md:pl-10">
              {ABOUT_CHAPTERS.map((c) => (
                <Reveal as="li" key={c.marker} className="relative">
                  <span className="absolute -left-[2.45rem] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-offwhite bg-gold ring-1 ring-gold/40 md:-left-[2.95rem]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brown">
                    {c.marker}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{c.title}</h2>
                  <div className="mt-4 space-y-4 text-lg leading-relaxed text-charcoal/75">
                    {c.paras.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FOR FREE */}
      <section className="surface-dark">
        <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow text-white/50 before:bg-gold">What I&apos;ve learned</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-6xl">
              I&apos;ll tell you this <span className="text-gold">for free.</span>
            </h2>
          </Reveal>
          <ol className="divide-y divide-white/10 border-y border-white/10">
            {FOR_FREE.map((t, i) => (
              <Reveal as="li" key={t} delay={i * 60} className="group flex gap-6 py-7 md:gap-10">
                <span className="section-index pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-2xl font-medium leading-snug text-white/85 transition-colors group-hover:text-offwhite md:text-[1.7rem]">
                  {t}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* NOW */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Right now</span>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal/80">
              {ABOUT_CLOSING.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <SocialLinks tone="light" />
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/field-notes" className="btn-primary">
                Read my field notes →
              </Link>
              <Link href="/work-with-me" className="btn-outline">
                Work with me
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-charcoal/10">
              <Photo src="khloe-maroon.jpg" alt="Khloe Obiegbu" label="Khloe — studio portrait" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
