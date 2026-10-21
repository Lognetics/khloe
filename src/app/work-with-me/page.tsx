import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { SITE, SPRINT, SYMPTOMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work with me",
  description: `${SPRINT.name}: ${SPRINT.summary}`,
};

export default function WorkWithMePage() {
  return (
    <>
      <PageHeader
        eyebrow="Work with me"
        title={
          <>
            The <span className="text-gold">{SPRINT.name}</span>
          </>
        }
        subtitle={SPRINT.summary}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/gtm-revenue-sprint" className="btn-gold text-base">
            See the full Sprint →
          </Link>
          <a href="#contact" className="btn-ghost-light text-base">
            Tell me what you&apos;re working through
          </a>
        </div>
      </PageHeader>

      {/* SOUND FAMILIAR */}
      <section className="surface-grid border-b border-charcoal/10 py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Sound familiar?</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              You launched. <span className="text-muted">Growth didn&apos;t follow the plan.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              A launch is not proof of repeatable demand. The Sprint is for founders who want to
              find out why, and fix the right thing first.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {SYMPTOMS.map((s, i) => (
              <Reveal key={s.stage} delay={i * 70}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-charcoal/10 bg-white p-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-brown">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                      {s.stage}
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold leading-snug">
                      {s.question}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              Not more marketing. The right intervention.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SPRINT.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="card relative h-full">
                  <span className="font-display text-3xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="surface-dark scroll-mt-20">
        <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <span className="eyebrow text-white/50 before:bg-gold">Get in touch</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              Tell me what you&apos;re <span className="text-gold">working through.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
              Built a SaaS product and struggling to get traction? I&apos;m interested in learning
              from founders navigating the messy stage between launch and repeatable revenue.
            </p>
            <p className="mt-6 text-sm text-white/50">
              Or email me directly at{" "}
              <a href={`mailto:${SITE.email}`} className="text-gold underline-offset-4 hover:underline">
                {SITE.email}
              </a>
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
            <div className="mt-10 hidden aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/10 lg:block">
              <Photo src="khloe-work.jpg" alt="Khloe Obiegbu" label="Khloe — portrait" />
            </div>
          </Reveal>

          <Reveal delay={120} className="text-charcoal">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
