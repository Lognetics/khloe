import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PositioningQuiz from "@/components/PositioningQuiz";
import Reveal from "@/components/Reveal";
import { RESOURCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Positioning resources for founders — workbooks, checklists, frameworks, and an interactive Brand Positioning Score assessment.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Resources"
        title={
          <>
            Positioning resources <span className="text-gold">for founders</span>
          </>
        }
        subtitle="Practical tools to start sharpening your position today — no fluff, no fee."
      />

      {/* DOWNLOADS */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Downloads</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">Grab a toolkit</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 70}>
                <div className="card group flex h-full flex-col">
                  <span className="w-fit rounded-full bg-brown/10 px-3 py-1 text-xs font-semibold text-brown">
                    {r.type}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{r.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{r.body}</p>
                  <form action="/contact" className="mt-6 flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Email for the download"
                      aria-label={`Email to receive ${r.title}`}
                      className="min-w-0 flex-1 rounded-full border border-charcoal/15 bg-offwhite px-4 py-2.5 text-sm focus:border-charcoal focus:outline-none"
                    />
                    <button type="submit" className="btn-primary px-5 py-2.5 text-sm">
                      Get
                    </button>
                  </form>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE QUIZ */}
      <section className="border-t border-charcoal/10 bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Interactive tool</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              How clear is your positioning, really?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Answer five honest questions and get an instant Positioning Score — plus a read on
              whether your next move is marketing or clarity.
            </p>
            <ul className="mt-7 space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Dot /> Takes about two minutes
              </li>
              <li className="flex items-center gap-2">
                <Dot /> No email required to see your score
              </li>
              <li className="flex items-center gap-2">
                <Dot /> Built from the same diagnostic I use with clients
              </li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <PositioningQuiz />
          </Reveal>
        </div>
      </section>

      {/* PREMIUM TOOLS PREVIEW */}
      <section className="bg-charcoal py-20 text-offwhite md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-white/50 before:bg-gold">Coming soon</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">The Strategy Vault</h2>
            <p className="mt-5 text-lg text-white/60">
              A members-only home for the deeper tools — competitor mapping, the brand clarity
              assessment, the founder positioning analyzer, templates, and training.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Competitor Mapping", d: "See where you sit in the market landscape." },
              { t: "Brand Clarity Assessment", d: "A guided audit of your brand signals." },
              { t: "Founder Analyzer", d: "Pressure-test your personal brand." },
              { t: "Templates & Training", d: "Frameworks and videos in one place." },
            ].map((x) => (
              <div key={x.t} className="bg-charcoal p-7">
                <div className="mb-4 h-2 w-2 rounded-full bg-gold" />
                <h3 className="font-display text-lg font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm text-white/55">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-gold" />;
}
