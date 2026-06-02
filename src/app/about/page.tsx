import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { BELIEFS } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Khloe Obiegbu — the Nerdy Strategist helping brands find their competitive edge through positioning, research, and consumer psychology.",
};

const NERD_TRAITS = [
  "Strategic thinking",
  "Market research obsession",
  "Consumer psychology",
  "Brand architecture",
  "Competitive analysis",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Meet Khloe Obiegbu
          </>
        }
        subtitle="The Nerdy Strategist helping brands find their competitive edge."
      />

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-charcoal/10 bg-soft-gray/30">
              <Photo src="khloe-about.jpg" alt="Khloe Obiegbu" label="Khloe — about portrait" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">How I got here</span>
            <h2 className="heading-xl mt-5 text-3xl md:text-4xl">
              Brilliant businesses, struggling to explain why they matter
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Working closely with founders, I kept noticing the same pattern. The products were
                excellent. The teams were capable. The ambition was real. And yet, when it came time
                to explain why any of it mattered, the words fell flat — or worse, sounded exactly
                like the competitor down the road.
              </p>
              <p>
                These weren&apos;t marketing problems. More budget, more content, and more channels
                only amplified the confusion. What was missing was a <span className="text-charcoal font-medium">decision</span>:
                a clear, deliberate position the business could own.
              </p>
              <p>
                That observation became the foundation of my work. I help businesses stop competing
                on noise and start competing on meaning — by getting nerdy about research, psychology,
                and the precise reason a customer should choose them.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Work with me →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="border-y border-charcoal/10 bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What I believe</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">My belief system</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BELIEFS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <div className="card h-full">
                  <span className="font-display text-3xl font-semibold text-brown">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACROSS BORDERS */}
      <section className="bg-charcoal text-offwhite">
        <div className="container-x grid items-center gap-12 py-20 md:grid-cols-[1fr_1fr] md:py-28">
          <Reveal className="order-2 md:order-1">
            <span className="eyebrow text-white/50 before:bg-gold">Reach</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              Helping brands across <span className="text-gold">Africa &amp; beyond</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              From fast-moving startups to established growing businesses, I partner with founders
              who are tired of blending into crowded markets — across the continent and in global
              markets. The principles of strong positioning travel; the work is always built around
              your specific market reality.
            </p>
          </Reveal>
          <Reveal delay={120} className="order-1 md:order-2">
            <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10">
              <Photo src="khloe-maroon.jpg" alt="Khloe Obiegbu" label="Khloe — studio portrait" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY "NERDY" */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Personality</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              Why they call me &ldquo;The Nerdy Strategist&rdquo;
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Because I genuinely love the parts most people skip. The research. The patterns. The
              psychology behind why people choose what they choose. That obsession is exactly what
              turns a vague brand into an obvious one.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3">
              {NERD_TRAITS.map((t, i) => (
                <li
                  key={t}
                  className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white px-6 py-5"
                >
                  <span className="font-display text-xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
