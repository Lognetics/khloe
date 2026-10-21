import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { RESOURCES, SITE, SPRINT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical GTM resources for founders after launch — the Post-Launch GTM Checkup and the Founder Interview Guide.",
};

function requestLink(title: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(title)}`;
}

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Tools for figuring out <span className="text-gold">what to investigate next</span>
          </>
        }
        subtitle="Practical resources for founders in the stage between launch and repeatable revenue."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.slug} delay={i * 80}>
              <div
                id={r.slug}
                className={`flex h-full flex-col rounded-[2rem] border p-8 md:p-10 ${
                  r.paid
                    ? "border-charcoal bg-charcoal text-offwhite"
                    : "border-charcoal/10 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      r.paid ? "bg-gold text-charcoal" : "bg-brown/10 text-brown"
                    }`}
                  >
                    {r.type}
                  </span>
                  <span className={`text-xs font-medium ${r.paid ? "text-white/50" : "text-muted"}`}>
                    {r.paid ? "Paid" : "Free"}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold">{r.title}</h2>
                <p className={`mt-4 text-base leading-relaxed ${r.paid ? "text-white/65" : "text-muted"}`}>
                  {r.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {r.includes.map((x) => (
                    <span
                      key={x}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                        r.paid ? "border-white/15 text-white/75" : "border-charcoal/15 text-charcoal/75"
                      }`}
                    >
                      {x}
                    </span>
                  ))}
                </div>
                {r.note && <p className="mt-6 text-sm italic text-white/45">{r.note}</p>}
                <div className="mt-auto pt-8">
                  <a
                    href={requestLink(r.title)}
                    className={r.paid ? "btn-gold text-base" : "btn-primary text-base"}
                  >
                    {r.paid ? "Get the Checkup" : "Request the guide"} →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="border-t border-charcoal/10 bg-white py-20 md:py-24">
        <div className="container-x grid gap-8 md:grid-cols-[1.2fr_auto] md:items-center">
          <Reveal>
            <span className="eyebrow">Finished the Checkup?</span>
            <h2 className="heading-xl mt-5 text-3xl md:text-4xl">
              Found the problem. Now work through it.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              The {SPRINT.name} is {SPRINT.summary.charAt(0).toLowerCase() + SPRINT.summary.slice(1)}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/work-with-me" className="btn-primary text-base">
              See the {SPRINT.name} →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
