import { SITE } from "@/lib/content";

const LINKS = [
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    icon: (
      <path
        d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.6.1L12 12l7.4-5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    icon: (
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452z"
      />
    ),
  },
  {
    label: "Instagram",
    href: SITE.instagram,
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </>
    ),
  },
];

/** Round icon buttons for email + socials. `tone` matches the section background. */
export default function SocialLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const styles =
    tone === "dark"
      ? "border-white/15 text-white/75 hover:border-gold hover:bg-gold hover:text-charcoal"
      : "border-charcoal/15 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-offwhite";

  return (
    <ul className="flex items-center gap-3">
      {LINKS.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            aria-label={l.label}
            title={l.label}
            target={l.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className={`grid h-11 w-11 place-items-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${styles}`}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden>
              {l.icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
