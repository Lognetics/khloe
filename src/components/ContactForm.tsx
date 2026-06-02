"use client";

import { useState } from "react";

const REVENUE_STAGES = [
  "Pre-revenue / just starting",
  "Early revenue (<$10k/mo)",
  "Growing ($10k–$50k/mo)",
  "Established ($50k+/mo)",
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
        <h3 className="mt-6 font-display text-2xl font-semibold">Thank you — message received.</h3>
        <p className="mt-3 max-w-md text-muted">
          I&apos;ll be in touch within two business days to find a time. In the meantime, your
          biggest competitor for attention is a blurry version of yourself.
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
        setSubmitted(true);
      }}
      className="rounded-[2rem] border border-charcoal/10 bg-white p-7 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" required />
        <Field label="Company" name="company" placeholder="Company name" required />
        <Field label="Industry" name="industry" placeholder="e.g. Fintech, SaaS, Retail" />
        <Field label="Website" name="website" type="url" placeholder="https://" />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
        <div>
          <Label>Revenue stage</Label>
          <select
            name="revenue"
            defaultValue=""
            className="w-full rounded-xl border border-charcoal/15 bg-offwhite px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
          >
            <option value="" disabled>
              Select a stage
            </option>
            {REVENUE_STAGES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <Label>Your biggest challenge</Label>
        <textarea
          name="challenge"
          rows={3}
          placeholder="Where does your brand feel unclear, generic, or hard to explain?"
          className="w-full rounded-xl border border-charcoal/15 bg-offwhite px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>

      <div className="mt-5">
        <Label>Goals</Label>
        <textarea
          name="goals"
          rows={2}
          placeholder="What would success look like in the next 6–12 months?"
          className="w-full rounded-xl border border-charcoal/15 bg-offwhite px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>

      <button type="submit" className="btn-primary mt-7 w-full text-base">
        Request my strategy session →
      </button>
      <p className="mt-4 text-center text-xs text-muted">
        Prefer to book directly? A calendar will be embedded here once scheduling is connected.
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
