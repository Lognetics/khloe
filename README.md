# Khloe Obiegbu — Brand Positioning Strategist

The website for **Khloe Obiegbu, _The Nerdy Strategist_** — built to communicate one
idea: _"You don't need more visibility. You need clearer positioning."_

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Getting started

```bash
npm install      # already done
npm run dev      # start the dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Project structure

```
src/
  app/
    layout.tsx            # root layout, fonts, nav + footer
    globals.css           # design tokens + component classes
    page.tsx              # Home
    about/                # About
    services/             # Services + process framework
    positioning-lab/      # Blog / insights
    case-studies/         # Transformation stories
    speaking/             # Speaking & workshops
    resources/            # Free downloads + interactive Positioning Score quiz
    testimonials/         # Testimonials
    contact/              # Book a Strategy Session (form)
  components/
    Navbar.tsx, Footer.tsx
    PageHeader.tsx        # shared inner-page hero
    Photo.tsx             # image w/ automatic placeholder fallback
    Reveal.tsx            # scroll-in fade-up animation
    PositioningQuiz.tsx   # interactive client-side assessment
    ContactForm.tsx       # booking form with success state
  lib/
    content.ts            # ALL copy/data — edit here to change the site
public/
  images/                 # add photos here (see images/README.md)
```

## Editing content

Almost all copy (services, articles, beliefs, testimonials, case studies, nav)
lives in [`src/lib/content.ts`](src/lib/content.ts). Edit there and it updates
everywhere it's used.

## Adding photos

See [`public/images/README.md`](public/images/README.md). Drop files in with the
expected names and they appear automatically; placeholders show until then.

## Design system

| Token            | Value     | Use                         |
| ---------------- | --------- | --------------------------- |
| `charcoal`       | `#111111` | Primary dark / text         |
| `offwhite`       | `#FAFAFA` | Page background             |
| `lime`           | `#B8FF32` | Primary accent / highlights |
| `soft-gray`      | `#D9D9D9` | Borders / placeholders      |
| `lavender`       | `#A855F7` | Secondary accent            |
| `strategic-blue` | `#2563EB` | Tertiary accent             |

Headings use **Clash Display** (via Fontshare); body uses **Inter** (via
`next/font`).

## Not yet wired (intentional, needs your input/services)

- **Form + newsletter submissions** — currently show a success state client-side.
  Connect to your email/CRM (e.g. Formspree, ConvertKit, Resend) when ready.
- **Calendar booking** — the contact page has a slot for an embedded scheduler
  (e.g. Calendly / Cal.com).
- **Blog/case-study detail pages** — listings are built; individual article pages
  can be added (Markdown/MDX or a CMS) as a next step.
- **Premium tools** (competitor mapping, brand clarity AI audit, Strategy Vault)
  are previewed as designed sections; the Positioning Score quiz is fully working.
