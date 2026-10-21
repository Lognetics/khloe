import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="surface-dark">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-2xl">
            <h2 className="heading-xl text-3xl md:text-5xl">
              Built a SaaS product and <span className="text-gold">struggling to get traction?</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/60">
              I&apos;m interested in learning from founders navigating the messy stage between
              launch and repeatable revenue.
            </p>
          </div>
          <Link href="/work-with-me#contact" className="btn-gold shrink-0 text-base">
            Tell me what you&apos;re working through
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
            Say hello
          </h3>
          <p className="mt-4 text-sm text-white/60">
            Building something? I&apos;d love to hear what you&apos;re working through.
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-5 inline-block text-sm text-white/70 underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.role}.
          </p>
          <p>From launch to repeatable revenue.</p>
        </div>
      </div>
    </footer>
  );
}
