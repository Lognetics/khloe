import Link from "next/link";
import { readTime, type FieldNote } from "@/lib/content";
import Photo from "./Photo";

export default function NoteCard({ note }: { note: FieldNote }) {
  return (
    <Link
      href={`/field-notes/${note.slug}`}
      className="card group flex h-full flex-col overflow-hidden p-0"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-soft-gray/30">
        <Photo
          src={note.image}
          alt={note.title}
          label={note.series}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="rounded-full bg-brown/10 px-2.5 py-1 font-medium text-brown">
            {note.kind}
          </span>
          <span>{readTime(note)}</span>
        </div>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {note.series}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug">{note.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{note.dek}</p>
        <span className="mt-5 text-sm font-medium text-charcoal transition-colors group-hover:text-brown">
          Read note →
        </span>
      </div>
    </Link>
  );
}
