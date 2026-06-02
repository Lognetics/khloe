import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { SPEAKING_TOPICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Speaking & Workshops",
  description:
    "Helping teams think differently about branding. Keynotes and workshops on brand positioning, strategic marketing, and market differentiation.",
};

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking & Workshops"
        title={
          <>
            Helping teams think <span className="text-gold">differently</span> about branding
          </>
        }
        subtitle="Keynotes, workshops, and team sessions that leave people with a sharper way of seeing their own market — and the courage to take a position in it."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Talk topics</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">What I speak about</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPEAKING_TOPICS.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 80}>
                <div className="card h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 font-display text-lg font-semibold text-charcoal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="border-y border-charcoal/10 bg-white py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-charcoal/10 bg-soft-gray/30">
              <Photo src="speaking.jpg" alt="Khloe Obiegbu speaking" label="Khloe — portrait" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Formats</span>
            <h2 className="heading-xl mt-5 text-3xl md:text-4xl">Ways to work together</h2>
            <div className="mt-8 space-y-4">
              {[
                { title: "Keynotes", body: "Energising talks for conferences and company events." },
                { title: "Workshops", body: "Hands-on sessions where teams leave with a working position." },
                { title: "Team Trainings", body: "Equip marketing and leadership teams to think strategically." },
              ].map((f, i) => (
                <div key={f.title} className="flex gap-5 rounded-2xl border border-charcoal/10 p-6">
                  <span className="font-display text-2xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                    <p className="mt-2 text-muted">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal text-offwhite">
        <div className="container-x py-20 text-center md:py-24">
          <Reveal>
            <h2 className="heading-xl mx-auto max-w-3xl text-3xl md:text-5xl">
              Bringing me in to <span className="text-gold">speak or train?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
              Share your event or team and what you&apos;d like the audience to walk away with.
            </p>
            <div className="mt-9 flex justify-center">
              <Link href="/contact" className="btn-gold text-base">
                Enquire about speaking →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
