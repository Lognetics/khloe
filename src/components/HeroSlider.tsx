"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  /** object-position so the subject stays in frame when cropped */
  focus?: string;
};

const SLIDES: Slide[] = [
  {
    image: "/images/khloe-maroon.jpg",
    alt: "Khloe Obiegbu",
    eyebrow: "Khloe Obiegbu · Building GTM Expertise",
    title: (
      <>
        Exploring what it takes to turn a SaaS launch into{" "}
        <span className="text-gold">repeatable revenue.</span>
      </>
    ),
    subtitle:
      "I'm studying how customers discover, adopt, pay for, and stay with software products and what founders can do when growth doesn't happen as expected.",
    focus: "50% 25%",
  },
  {
    image: "/images/khloe-bw.jpg",
    alt: "Khloe Obiegbu portrait",
    eyebrow: "The founder's reality",
    title: (
      <>
        What really happens <span className="text-gold">after launch?</span>
      </>
    ),
    subtitle:
      "What founders say, what they struggle with, and what happens behind the scenes once the market has to respond.",
    focus: "50% 20%",
  },
  {
    image: "/images/khloe-contact.jpg",
    alt: "Khloe Obiegbu studio portrait",
    eyebrow: "The customer side",
    title: (
      <>
        Why people switch, stay, <span className="text-gold">and pay.</span>
      </>
    ),
    subtitle:
      "Why people hesitate, adopt, or keep using what they already know — and what earns their trust.",
    focus: "50% 18%",
  },
  {
    image: "/images/khloe-hero.jpg",
    alt: "Khloe Obiegbu",
    eyebrow: "The GTM system",
    title: (
      <>
        Find the constraint. <span className="text-gold">Test the fix.</span>
      </>
    ),
    subtitle:
      "How product, market, acquisition, activation, retention, and monetization connect — and where they break.",
    focus: "50% 22%",
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((n: number) => {
    setIndex((prev) => (n + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Khloe Obiegbu highlights"
      className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-charcoal text-offwhite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={i}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className={`h-full w-full object-cover ${active ? "animate-kenburns" : ""}`}
              style={{ objectPosition: slide.focus ?? "50% 20%" }}
            />
            {/* Dark overlays for legibility + theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/30" />
          </div>
        );
      })}

      {/* Content */}
      <div className="container-x relative flex h-full flex-col justify-center">
        <div key={index} className="max-w-2xl">
          <span className="eyebrow animate-slide-in text-white/60 before:bg-gold">
            {SLIDES[index].eyebrow}
          </span>
          <h1
            className="heading-xl mt-5 animate-slide-in text-[2.4rem] leading-[0.98] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "90ms" }}
          >
            {SLIDES[index].title}
          </h1>
          <p
            className="mt-6 max-w-xl animate-slide-in text-lg leading-relaxed text-white/70 md:text-xl"
            style={{ animationDelay: "180ms" }}
          >
            {SLIDES[index].subtitle}
          </p>
          <div
            className="mt-9 flex animate-slide-in flex-wrap items-center gap-3"
            style={{ animationDelay: "270ms" }}
          >
            <Link href="/about" className="btn-gold text-base">
              Explore my journey
              <span aria-hidden>↗</span>
            </Link>
            <Link href="/field-notes" className="btn-ghost-light text-base">
              Read my field notes
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="container-x pointer-events-none absolute inset-x-0 bottom-8 z-10">
        <div className="flex items-center justify-between">
          {/* Dots */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className="group h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "2.25rem" : "0.625rem",
                  backgroundColor: i === index ? "#C0902C" : "rgba(250,247,242,0.35)",
                }}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-offwhite transition-colors hover:border-gold hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-offwhite transition-colors hover:border-gold hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Autoplay progress bar */}
      <div className="absolute left-0 top-0 z-10 h-1 w-full bg-white/10">
        <div
          key={`${index}-${paused}`}
          className="h-full bg-gold"
          style={{
            animation: paused ? "none" : `progress ${AUTOPLAY_MS}ms linear forwards`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
