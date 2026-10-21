import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SPRINT, SPRINT_PAGE as P } from "@/lib/content";

export const metadata: Metadata = {
  title: SPRINT.name,
  description:
    "21 days. One bottleneck. One intervention. Find the broken link between your product, customers and revenue.",
};

function ApplyButton({ className = "btn-gold" }: { className?: string }) {
  return (
    <Link href={P.applyHref} className={`${className} text-base`}>
      Apply for the Sprint <span aria-hidden>→</span>
    </Link>
  );
}

export default function SprintPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="surface-dark border-b border-white/5">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-[-2rem] select-none font-display text-[14rem] font-semibold leading-none text-white/[0.03] md:text-[20rem]"
        >
          21
        </span>
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <span className="eyebrow text-white/50 before:bg-gold">{SPRINT.name}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="heading-xl mt-6 max-w-4xl text-4xl md:text-6xl">
              You have a product but are you making{" "}
              <span className="text-gold">consistent revenue</span> month after month?
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-white/65">
              {P.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-display text-xl font-medium text-offwhite md:text-2xl">
              {P.introClose}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ApplyButton />
              <span className="text-sm text-white/50">
                21 days · Starting at {P.price}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- THE BROKEN LINK ---------- */}
      <section className="surface-grid py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">The diagnosis</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">{P.brokenLink}</h2>
            <p className="mt-5 text-lg text-muted">We diagnose the seven stages of your GTM system:</p>
          </Reveal>

          <Reveal delay={100}>
            <ol className="mt-10 flex flex-wrap items-center gap-2 md:gap-3">
              {P.stages.map((s, i) => (
                <li key={s} className="flex items-center gap-2 md:gap-3">
                  <span className="rounded-full border border-charcoal/15 bg-white px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.08em] shadow-sm md:px-5 md:text-base">
                    {s}
                  </span>
                  {i < P.stages.length - 1 && (
                    <span aria-hidden className="text-gold">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {P.constraint.map((c, i) => (
                <p
                  key={c}
                  className={`rounded-2xl p-7 font-display text-xl font-medium leading-snug md:text-2xl ${
                    i === 1 ? "bg-charcoal text-offwhite" : "border border-charcoal/10 bg-white"
                  }`}
                >
                  {c}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 7 QUESTIONS ---------- */}
      <section className="surface-dark py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-white/50 before:bg-gold">What we answer</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              We answer <span className="text-gold">7 questions</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {P.questions.map((q, i) => (
              <Reveal key={q.stage} delay={(i % 4) * 60} className="h-full">
                <div className="h-full bg-charcoal p-7 transition-colors hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                      {q.stage}
                    </span>
                    <span className="font-display text-sm text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 font-display text-xl font-medium leading-snug">{q.question}</p>
                </div>
              </Reveal>
            ))}
            {/* fill the 8th cell with the CTA */}
            <div className="flex h-full flex-col justify-between bg-gold p-7 text-charcoal">
              <p className="font-display text-xl font-semibold leading-snug">
                Then we find the one that matters most right now.
              </p>
              <Link href={P.applyHref} className="mt-6 text-sm font-semibold underline-offset-4 hover:underline">
                Apply for the Sprint →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
              Diagnose. Intervene. <span className="text-muted">Measure.</span>
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {P.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 70}>
                <div className="card h-full">
                  <span className="font-display text-4xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.04em]">
                    {s.title}
                  </h3>
                  <div className="mt-3 space-y-1 text-sm leading-relaxed text-muted">
                    {s.body.map((b) => (
                      <p key={b}>{b}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FIT ---------- */}
      <section className="border-y border-charcoal/10 bg-white py-20 md:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-charcoal/10 bg-offwhite p-8 md:p-10">
              <h2 className="heading-xl text-3xl md:text-4xl">This is for you if:</h2>
              <ul className="mt-7 space-y-3.5">
                {P.forYou.map((t) => (
                  <li key={t} className="flex gap-3 text-lg">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-charcoal">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-[2rem] bg-charcoal p-8 text-offwhite md:p-10">
              <h2 className="heading-xl text-3xl md:text-4xl">This is not for you if:</h2>
              <ul className="mt-7 space-y-3.5">
                {P.notForYou.map((t) => (
                  <li key={t} className="flex gap-3 text-lg text-white/75">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/25 text-white/70">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- RESULT ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">The result</span>
            <h2 className="heading-xl mt-5 text-4xl md:text-5xl">You&apos;ll leave knowing:</h2>
          </Reveal>
          <ol className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            {P.result.map((r, i) => (
              <Reveal as="li" key={i} delay={i * 60} className="flex items-baseline gap-5 py-6">
                <span className="w-28 shrink-0 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-gold md:w-36 md:text-3xl">
                  {r.word}
                </span>
                <span className="font-display text-2xl font-medium md:text-3xl">{r.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- OFFER ---------- */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <Reveal>
            <div className="surface-dark grid gap-10 rounded-[2rem] p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-14">
              <div>
                <span className="eyebrow text-white/50 before:bg-gold">{SPRINT.name}</span>
                <ul className="mt-6 space-y-1.5">
                  {P.offer.map((o, i) => (
                    <li
                      key={o}
                      className={`font-display font-semibold leading-tight ${
                        i === 0 ? "text-5xl text-gold md:text-6xl" : "text-2xl md:text-3xl"
                      }`}
                    >
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  Starting at
                </p>
                <p className="mt-2 font-display text-5xl font-semibold tracking-tight md:text-6xl">
                  {P.price}
                </p>
                <div className="mt-8">
                  <ApplyButton className="btn-gold w-full" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
