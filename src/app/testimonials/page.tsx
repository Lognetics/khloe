import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What founders, business owners, CEOs, and marketing leaders say about working with Khloe Obiegbu on brand positioning.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title={
          <>
            What founders <span className="text-gold">say</span>
          </>
        }
        subtitle="The shift founders describe most often: realizing the problem was never marketing — it was positioning."
      />

      <section className="py-20 md:py-28">
        <div className="container-x columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 70}>
              <figure className="card">
                <svg width="28" height="28" viewBox="0 0 24 24" className="text-gold" fill="currentColor">
                  <path d="M10 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2H6v2h2a2 2 0 0 0 2-2v-7Zm10 0h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2h-2v2h2a2 2 0 0 0 2-2v-7Z" />
                </svg>
                <blockquote className="mt-4 text-lg leading-relaxed text-charcoal/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-charcoal font-display text-sm font-semibold text-offwhite">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted">{t.title}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO PLACEHOLDER */}
      <section className="border-y border-charcoal/10 bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">In their words</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">Video testimonials</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="img-ph aspect-video rounded-2xl border border-charcoal/10 bg-gradient-to-br from-soft-gray/40 to-soft-gray/10">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-charcoal/80 text-offwhite">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-offwhite">
        <div className="container-x py-20 text-center md:py-24">
          <Reveal>
            <h2 className="heading-xl mx-auto max-w-3xl text-3xl md:text-5xl">
              Ready to feel this clear about <span className="text-gold">your</span> brand?
            </h2>
            <div className="mt-9 flex justify-center">
              <Link href="/contact" className="btn-gold text-base">
                Book a Strategy Session →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
