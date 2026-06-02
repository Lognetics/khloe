"use client";

import { useState } from "react";

type Option = { label: string; score: number };
type Question = { q: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    q: "Can you state what makes your business different in one sentence?",
    options: [
      { label: "Yes — and everyone on the team says it the same way", score: 3 },
      { label: "Sort of, but it changes depending on who's asked", score: 1 },
      { label: "Not really — it sounds like our competitors", score: 0 },
    ],
  },
  {
    q: "How clearly defined is your ideal client?",
    options: [
      { label: "Very — we know exactly who we're for and who we're not", score: 3 },
      { label: "Roughly — we have an idea but cast a wide net", score: 1 },
      { label: "We'll take almost anyone who'll pay", score: 0 },
    ],
  },
  {
    q: "Why do customers choose you over alternatives?",
    options: [
      { label: "A specific reason only we can credibly claim", score: 3 },
      { label: "Quality / service / price — the usual reasons", score: 1 },
      { label: "Honestly, we're not sure", score: 0 },
    ],
  },
  {
    q: "How easy is it to create content for your brand?",
    options: [
      { label: "Easy — we know what we stand for", score: 3 },
      { label: "Hit or miss — depends on the week", score: 1 },
      { label: "Hard — we're always starting from scratch", score: 0 },
    ],
  },
  {
    q: "When you raise prices or say no to bad-fit clients, what happens?",
    options: [
      { label: "Right clients stay; we're chosen for value, not price", score: 3 },
      { label: "Some pushback, some understanding", score: 1 },
      { label: "We mostly compete on price and can't risk it", score: 0 },
    ],
  },
];

const MAX = QUESTIONS.length * 3;

function verdict(pct: number) {
  if (pct >= 80)
    return {
      tag: "Sharp",
      headline: "Your positioning is working for you.",
      body: "You have real clarity. The opportunity now is to amplify and defend the position so competitors can't drift into your space.",
    };
  if (pct >= 50)
    return {
      tag: "Emerging",
      headline: "There's a position in here — it just isn't decided yet.",
      body: "The pieces exist but aren't sharpened into one ownable idea. A focused positioning engagement would compound everything else you're doing.",
    };
  return {
    tag: "Blurry",
    headline: "This is a positioning problem, not a marketing one.",
    body: "More visibility right now would amplify the confusion. The highest-leverage move is to decide what you stand for — before spending another naira on reach.",
  };
}

export default function PositioningQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const total = answers.reduce((a, b) => a + b, 0);
  const pct = Math.round((total / MAX) * 100);
  const result = verdict(pct);

  function choose(score: number) {
    const next = [...answers, score];
    setAnswers(next);
    if (step + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  }

  function reset() {
    setStep(0);
    setAnswers([]);
    setDone(false);
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white">
      <div className="border-b border-charcoal/10 bg-charcoal px-7 py-6 text-offwhite md:px-10">
        <p className="eyebrow text-white/50 before:bg-gold">Interactive · 2 minutes</p>
        <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
          Discover your Brand Positioning Score
        </h3>
      </div>

      <div className="p-7 md:p-10">
        {!done ? (
          <div>
            {/* progress */}
            <div className="flex items-center justify-between text-sm text-muted">
              <span>
                Question {step + 1} of {QUESTIONS.length}
              </span>
              <span>{Math.round((step / QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-soft-gray/60">
              <div
                className="h-full rounded-full bg-gold transition-all duration-300"
                style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
              />
            </div>

            <p className="mt-7 font-display text-xl font-semibold leading-snug md:text-2xl">
              {QUESTIONS[step].q}
            </p>

            <div className="mt-6 grid gap-3">
              {QUESTIONS[step].options.map((o) => (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => choose(o.score)}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-charcoal/15 px-5 py-4 text-left text-sm font-medium transition-all hover:border-charcoal hover:bg-offwhite"
                >
                  {o.label}
                  <span className="text-muted transition-transform group-hover:translate-x-1">→</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center text-center">
              <div className="relative grid h-32 w-32 place-items-center">
                <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#DAD0C2" strokeWidth="10" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#C0902C"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={2 * Math.PI * 52 * (1 - pct / 100)}
                    className="transition-all duration-700"
                  />
                </svg>
                <span className="absolute font-display text-3xl font-semibold">{pct}</span>
              </div>
              <span className="mt-5 rounded-full bg-brown/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brown">
                {result.tag} positioning
              </span>
              <h4 className="mt-4 max-w-md font-display text-2xl font-semibold leading-snug">
                {result.headline}
              </h4>
              <p className="mt-3 max-w-md text-muted">{result.body}</p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a href="/contact" className="btn-primary">
                  Discuss your score →
                </a>
                <button type="button" onClick={reset} className="btn-outline">
                  Retake
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
