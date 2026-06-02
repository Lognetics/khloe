import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PROCESS, SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Positioning services designed for growth — brand positioning strategy, messaging, founder positioning, audits, and strategic clarity sessions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Positioning services <span className="text-gold">designed for growth</span>
          </>
        }
        subtitle="Clarity before marketing. Strategy before content. Every engagement is built to make your brand impossible to confuse with anyone else."
      />

      {/* SERVICES LIST */}
      <section className="py-20 md:py-28">
        <div className="container-x space-y-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <div className="grid gap-6 bg-white p-8 transition-colors hover:bg-offwhite md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:p-10">
                <span className="font-display text-4xl font-semibold text-soft-gray md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold md:text-3xl">{s.name}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{s.body}</p>
                </div>
                <Link
                  href="/contact"
                  className="btn-outline shrink-0 justify-self-start md:justify-self-end"
                >
                  Enquire →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-charcoal/10 bg-charcoal text-offwhite">
        <div className="container-x py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-white/50 before:bg-gold">My strategic framework</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              A clear path from confusion to a position you own
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={(i % 3) * 70}>
                <div className="h-full bg-charcoal p-8">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-5xl font-semibold text-white/15">{p.step}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white px-8 py-16 text-center md:px-16">
              <h2 className="heading-xl mx-auto max-w-3xl text-3xl md:text-5xl">
                Not sure which engagement fits?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
                Start with a discovery call. We&apos;ll diagnose the real bottleneck and map the
                right next step — no pressure, no generic pitch.
              </p>
              <div className="mt-9 flex justify-center">
                <Link href="/contact" className="btn-primary text-base">
                  Book a Strategy Session →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
