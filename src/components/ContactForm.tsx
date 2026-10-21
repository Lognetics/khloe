"use client";

import { useState } from "react";
import { SITE } from "@/lib/content";

const STAGES = [
  "Pre-launch",
  "Launched, few or no paying customers",
  "Some revenue, not yet repeatable",
  "Growing, but something's stuck",
];

const FIELDS: [string, string][] = [
  ["name", "Name"],
  ["company", "Product"],
  ["website", "Website"],
  ["email", "Email"],
  ["stage", "Stage"],
  ["challenge", "What I'm working through"],
  ["tried", "What I've tried"],
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-[2rem] border border-charcoal/10 bg-white p-10 text-center md:p-14">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-charcoal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold">Your email is ready to send.</h3>
        <p className="mt-3 max-w-md text-muted">
          Your email app should have opened with everything filled in — just hit send. If it
          didn&apos;t, email me at{" "}
          <a href={`mailto:${SITE.email}`} className="font-medium text-charcoal underline">
            {SITE.email}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn-outline mt-7">
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = FIELDS.map(([key, label]) => `${label}: ${data.get(key) ?? ""}`).join("\n\n");
        const subject = `What I'm working through — ${data.get("company") || data.get("name")}`;
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSubmitted(true);
      }}
      className="rounded-[2rem] border border-charcoal/10 bg-white p-7 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" required />
        <Field label="Product" name="company" placeholder="What you're building" required />
        <Field label="Website" name="website" type="url" placeholder="https://" />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
      </div>

      <div className="mt-5">
        <div>
          <Label>Where are you right now?</Label>
          <select
            name="stage"
            defaultValue=""
            className="w-full rounded-xl border border-charcoal/15 bg-offwhite px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
          >
            <option value="" disabled>
              Select a stage
            </option>
            {STAGES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <Label>What are you working through?</Label>
        <textarea
          name="challenge"
          rows={4}
          required
          placeholder="People aren't buying, users aren't activating, customers are leaving, sales aren't repeatable…"
          className="w-full rounded-xl border border-charcoal/15 bg-offwhite px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>

      <div className="mt-5">
        <Label>What have you tried so far?</Label>
        <textarea
          name="tried"
          rows={2}
          placeholder="Channels, experiments, changes — and what happened"
          className="w-full rounded-xl border border-charcoal/15 bg-offwhite px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>

      <button type="submit" className="btn-primary mt-7 w-full text-base">
        Send it over →
      </button>
      <p className="mt-4 text-center text-xs text-muted">
        This opens your email app with your answers filled in.
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="text-brown"> *</span>}
      </Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-charcoal/15 bg-offwhite px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
      />
    </div>
  );
}
