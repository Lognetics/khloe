import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="heading-xl max-w-xl text-3xl md:text-5xl">
            Ready to stop <span className="text-gold">blending in?</span>
          </h2>
          <Link href="/contact" className="btn-gold text-base">
            Book a Strategy Session
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-charcoal font-display text-sm font-semibold">
              KO
            </span>
            <span className="font-display text-base font-semibold">{SITE.name}</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">{SITE.shortBio}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            The Positioning Journal
          </h3>
          <p className="mt-4 text-sm text-white/60">
            Weekly strategic insights for founders who want to lead, not just exist online.
          </p>
          <form className="mt-4 flex gap-2" action="/contact">
            <input
              type="email"
              required
              placeholder="you@company.com"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-offwhite placeholder:text-white/35 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-gold px-5 py-2.5 text-sm">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.role}.
          </p>
          <p>{SITE.tagline} — clarity before marketing.</p>
        </div>
      </div>
    </footer>
  );
}
