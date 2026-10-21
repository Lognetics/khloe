import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NoteCard from "@/components/NoteCard";
import Photo from "@/components/Photo";
import ReadingProgress from "@/components/ReadingProgress";
import { FIELD_NOTES, readTime, type Block } from "@/lib/content";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return FIELD_NOTES.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const note = FIELD_NOTES.find((n) => n.slug === params.slug);
  if (!note) return {};
  return { title: `${note.series}: ${note.title}`, description: note.dek };
}

export default function FieldNotePage({ params }: Params) {
  const note = FIELD_NOTES.find((n) => n.slug === params.slug);
  if (!note) notFound();

  const others = FIELD_NOTES.filter((n) => n.slug !== note.slug);
  const sections = note.blocks.flatMap((b) => (b.type === "h2" ? [b.text] : []));

  return (
    <>
      <ReadingProgress />
      {/* HEADER */}
      <section className="surface-dark">
        <div className="container-x py-16 md:py-24">
          <Link href="/field-notes" className="text-sm text-white/50 transition-colors hover:text-gold">
            ← All field notes
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/50">
            <span className="rounded-full bg-gold/15 px-2.5 py-1 font-medium text-gold">
              {note.kind}
            </span>
            <span>{readTime(note)}</span>
          </div>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            {note.series}
          </p>
          <h1 className="heading-xl mt-3 max-w-4xl text-4xl md:text-6xl">{note.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{note.dek}</p>
        </div>
      </section>

      {/* COVER */}
      <div className="container-x -mt-px pt-10 md:pt-14">
        <div className="mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-soft-gray/30">
          <Photo src={note.image} alt={note.title} label={note.series} priority />
        </div>
      </div>

      {/* BODY */}
      <div className="container-x py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[13rem_1fr]">
          {sections.length > 1 ? (
            <aside className="hidden lg:block">
              <nav aria-label="In this note" className="sticky top-28">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  In this note
                </p>
                <ol className="mt-4 space-y-3 border-l border-charcoal/10">
                  {sections.map((t) => (
                    <li key={t}>
                      <a
                        href={`#${slugify(t)}`}
                        className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-muted transition-colors hover:border-gold hover:text-charcoal"
                      >
                        {t}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          ) : (
            <div className="hidden lg:block" />
          )}
          <article className="max-w-2xl">
            {note.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </article>
        </div>
      </div>

      {/* CTA */}
      <section className="border-t border-charcoal/10 bg-white py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-xl text-3xl md:text-4xl">
              Navigating the stage between launch and repeatable revenue?
            </h2>
            <p className="mt-4 text-lg text-muted">
              I&apos;m always interested in learning from founders working through it.
            </p>
            <Link href="/work-with-me#contact" className="btn-primary mt-8 text-base">
              Tell me what you&apos;re working through →
            </Link>
          </div>
        </div>
      </section>

      {/* MORE */}
      {others.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-x">
            <span className="eyebrow">Keep reading</span>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((n) => (
                <NoteCard key={n.slug} note={n} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={slugify(block.text)}
          className="heading-xl mb-5 mt-14 scroll-mt-28 text-3xl leading-tight first:mt-0 md:text-[2.1rem]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="mb-3 mt-10 font-display text-xl font-semibold md:text-2xl">{block.text}</h3>;
    case "p":
      return (
        <p className="mb-5 text-lg leading-relaxed text-charcoal/80">
          {block.label && <strong className="font-semibold text-charcoal">{block.label}: </strong>}
          {block.text}
        </p>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-gold pl-6 font-display text-3xl font-medium leading-snug md:text-4xl">
          &ldquo;{block.text}&rdquo;
        </blockquote>
      );
    case "callout":
      return (
        <p className="my-8 rounded-2xl border border-charcoal/10 bg-white px-6 py-5 font-display text-xl font-medium leading-snug">
          {block.text}
        </p>
      );
    case "note":
      return (
        <p className="my-7 rounded-2xl bg-charcoal px-6 py-5 text-offwhite">
          <span className="mr-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">My note</span>
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-charcoal/80">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>
                {item.label && <strong className="font-semibold text-charcoal">{item.label}: </strong>}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
  }
}
