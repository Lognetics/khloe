import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ABOUT_CLOSING, ABOUT_STORY, FOR_FREE, SITE } from "@/lib/content";

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
      />

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-charcoal/10 bg-soft-gray/30">
              <Photo src="khloe-about.jpg" alt="Khloe Obiegbu" label="Khloe — about portrait" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">How I got here</span>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal/80">
              {ABOUT_STORY.map((p, i) => (
                <p key={i} className={i === 0 ? "font-display text-2xl font-medium leading-snug text-charcoal" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR FREE */}
      <section className="bg-charcoal text-offwhite">
        <div className="container-x py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-white/50 before:bg-gold">What I&apos;ve learned</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              I&apos;ll tell you this <span className="text-gold">for free</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {FOR_FREE.map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 70}>
                <div className="h-full bg-charcoal p-8">
                  <span className="font-display text-sm font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-display text-xl font-medium leading-snug">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
            <ul className="mt-8 space-y-2 text-sm">
              <li>
                <span className="text-muted">Email — </span>
                <a href={`mailto:${SITE.email}`} className="font-medium underline-offset-4 hover:underline">
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="text-muted">LinkedIn — </span>
                <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="font-medium underline-offset-4 hover:underline">
                  {SITE.name}
                </a>
              </li>
              <li>
                <span className="text-muted">IG — </span>
                <a href={SITE.instagram} target="_blank" rel="noreferrer" className="font-medium underline-offset-4 hover:underline">
                  {SITE.instagramHandle}
                </a>
              </li>
            </ul>
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
