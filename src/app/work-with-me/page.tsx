import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { SITE, SPRINT } from "@/lib/content";

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
      />

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
                <div className="card h-full">
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
      <section id="contact" className="scroll-mt-20 bg-charcoal text-offwhite">
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
