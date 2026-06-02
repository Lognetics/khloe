import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import {
  ARTICLES,
  DIFFERENTIATORS,
  RESULTS,
  SERVICES,
} from "@/lib/content";

const TRUST_MARQUEE = [
  "Startups",
  "Founders",
  "Growing Businesses",
  "B2B SaaS",
  "Professional Services",
  "Consumer Brands",
  "Fintech",
  "Across Africa & Beyond",
];

export default function HomePage() {
  return (
    <>
      {/* ---------- NEW: DARK REV SLIDER ---------- */}
      <HeroSlider />

      {/* ---------- HERO (original — unchanged) ---------- */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="eyebrow">The Nerdy Strategist</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="heading-xl mt-6 text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-[4.2rem]">
                Your business doesn&apos;t need more attention.
                <span className="mt-2 block text-muted">
                  It needs better <span className="text-charcoal">positioning.</span>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                Helping startups and growing businesses uncover what makes them different,
                communicate it clearly, and attract clients who genuinely value what they offer.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-primary text-base">
                  Book a Strategy Session
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/services" className="btn-outline text-base">
                  Explore My Approach
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-charcoal/10 bg-soft-gray/30 shadow-[0_40px_90px_-50px_rgba(17,17,17,0.5)]">
              <Photo
                src="khloe-hero.jpg"
                alt="Khloe Obiegbu, Brand Positioning Strategist"
                label="Khloe — hero portrait"
                priority
              />
            </div>
            {/* floating accent card */}
            <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-charcoal/10 bg-white p-4 shadow-xl sm:block">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Positioning first
              </p>
              <p className="mt-1 font-display text-2xl font-semibold">Clarity → Growth</p>
            </div>
            <div className="absolute -right-3 top-6 hidden rounded-full bg-gold px-4 py-2 text-xs font-semibold text-charcoal shadow-lg sm:block">
              What makes you different?
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TRUST MARQUEE ---------- */}
      <section className="border-y border-charcoal/10 bg-white py-7">
        <div className="container-x">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Working with ambitious brands across Africa &amp; beyond
          </p>
        </div>
        <div className="relative mt-5 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-10 pr-10">
            {[...TRUST_MARQUEE, ...TRUST_MARQUEE].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-3 whitespace-nowrap font-display text-lg font-medium text-charcoal/70"
              >
                {item}
                <span className="text-gold">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THE PROBLEM ---------- */}
      <section className="bg-charcoal text-offwhite">
        <div className="container-x grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <span className="eyebrow text-white/50 before:bg-gold">The real problem</span>
            <h2 className="heading-xl mt-6 text-4xl md:text-5xl">
              Everyone is fighting for attention.
              <span className="mt-2 block text-gold">Few know whose attention matters.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center gap-5 text-lg leading-relaxed text-white/70">
            <p>
              Businesses spend months creating content, running campaigns, and chasing visibility.
              Yet when someone asks,{" "}
              <span className="text-offwhite">&ldquo;what makes your business different?&rdquo;</span>{" "}
              the answer often sounds exactly like everyone else&apos;s.
            </p>
            <p className="text-offwhite">
              That&apos;s not a marketing problem.
              <br />
              That&apos;s a <span className="text-gold">positioning problem.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- THE KHLOE DIFFERENCE ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">The Khloe difference</span>
              <h2 className="heading-xl mt-5 text-4xl md:text-5xl">Why clients work with me</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="card h-full">
                  <span className="font-display text-3xl font-semibold text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES OVERVIEW ---------- */}
      <section className="border-y border-charcoal/10 bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-xl">
              <span className="eyebrow">What I do</span>
              <h2 className="heading-xl mt-5 text-4xl md:text-5xl">How I help brands stand out</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/services" className="btn-outline">
                View all services →
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70}>
                <Link
                  href="/services"
                  className="group flex h-full flex-col bg-white p-7 transition-colors hover:bg-offwhite"
                >
                  <span className="font-display text-sm font-semibold text-brown">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-charcoal opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- RESULTS ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">The payoff</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              What happens when positioning is right?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Positioning isn&apos;t a deliverable that sits in a folder. It quietly makes every
              other part of your business work better.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {RESULTS.map((r) => (
                <li
                  key={r}
                  className="flex items-center gap-3 rounded-xl border border-charcoal/10 bg-white px-5 py-4"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-charcoal">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-medium">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- THOUGHT LEADERSHIP PREVIEW ---------- */}
      <section className="border-t border-charcoal/10 bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-xl">
              <span className="eyebrow">The Positioning Lab</span>
              <h2 className="heading-xl mt-5 text-4xl md:text-5xl">Latest insights</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/positioning-lab" className="btn-outline">
                Read the Lab →
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ARTICLES.slice(0, 3).map((a, i) => (
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
                  <span className="mt-5 text-sm font-medium text-charcoal">Read article →</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-charcoal text-offwhite">
        <div className="container-x py-24 text-center md:py-32">
          <Reveal>
            <h2 className="heading-xl mx-auto max-w-4xl text-4xl md:text-6xl">
              Stop competing for attention.
              <span className="mt-2 block text-gold">Start owning your position.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <Link href="/contact" className="btn-gold text-base">
                Book a Discovery Call
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
