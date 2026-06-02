import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book a Strategy Session",
  description:
    "Let's find what makes your brand impossible to ignore. Book a strategy session with brand positioning strategist Khloe Obiegbu.",
};

export default function ContactPage() {
  return (
    <section className="bg-charcoal text-offwhite">
      <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* left: pitch */}
        <Reveal className="lg:sticky lg:top-28">
          <span className="eyebrow text-white/50 before:bg-gold">Book a session</span>
          <h1 className="heading-xl mt-5 text-4xl md:text-5xl">
            Let&apos;s find what makes your brand <span className="text-gold">impossible to ignore.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
            Tell me a little about your business and the clarity you&apos;re after. I&apos;ll come to
            the call having thought about your market — not with a generic pitch.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { t: "A real diagnosis", d: "We name the actual bottleneck — not the symptom." },
              { t: "A clear next step", d: "You leave knowing exactly what to do, with or without me." },
              { t: "No pressure", d: "If it's not a fit, I'll say so and point you somewhere useful." },
            ].map((x) => (
              <li key={x.t} className="flex gap-4">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-charcoal">
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
                <span>
                  <span className="block font-display text-lg font-semibold">{x.t}</span>
                  <span className="block text-sm text-white/55">{x.d}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 hidden aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/10 lg:block">
            <Photo src="khloe-contact.jpg" alt="Khloe Obiegbu" label="Khloe — portrait" />
          </div>
        </Reveal>

        {/* right: form */}
        <Reveal delay={120} className="text-charcoal">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
