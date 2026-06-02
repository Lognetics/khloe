import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { CASE_STUDIES } from "@/lib/content";

const CASE_IMAGES = ["case-1.jpg", "case-2.jpg", "case-3.jpg"];

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Positioning in action — transformation stories showing the challenge, strategic discovery, positioning solution, and results.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title={
          <>
            Positioning <span className="text-gold">in action</span>
          </>
        }
        subtitle="Real transformation stories. From sounding like everyone else to owning a position the right clients can't ignore."
      />

      <section className="py-20 md:py-28">
        <div className="container-x space-y-20 md:space-y-28">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.slug}>
              <article className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                {/* visual + meta */}
                <div className="lg:sticky lg:top-28">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-charcoal/10 bg-soft-gray/30">
                    <Photo
                      src={CASE_IMAGES[i % CASE_IMAGES.length]}
                      alt={`${cs.client} — ${cs.industry}`}
                      label={cs.client}
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-charcoal px-3 py-1.5 font-medium text-offwhite">
                      {cs.industry}
                    </span>
                    <span className="rounded-full border border-charcoal/15 px-3 py-1.5 font-medium text-muted">
                      Case study {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* content */}
                <div>
                  <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                    {cs.headline}
                  </h2>

                  <div className="mt-8 space-y-7">
                    <Block label="The Challenge" body={cs.challenge} />
                    <Block label="Strategic Discovery" body={cs.discovery} />
                    <Block label="Positioning Solution" body={cs.solution} />
                  </div>

                  <div className="mt-8 rounded-2xl border border-charcoal/10 bg-white p-6">
                    <p className="eyebrow">Results</p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                      {cs.results.map((r) => (
                        <li key={r} className="rounded-xl bg-offwhite px-4 py-4">
                          <span className="font-display text-base font-semibold leading-snug">
                            {r}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-white">
        <div className="container-x py-20 text-center md:py-24">
          <Reveal>
            <h2 className="heading-xl mx-auto max-w-3xl text-3xl md:text-5xl">
              Your story could be the next one here.
            </h2>
            <div className="mt-9 flex justify-center">
              <Link href="/contact" className="btn-primary text-base">
                Start your repositioning →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-gold pl-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="mt-2 text-base leading-relaxed text-charcoal/80">{body}</p>
    </div>
  );
}
