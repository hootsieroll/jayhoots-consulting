"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mjgeaazl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="py-24 border-t border-border text-center">
      <div className="max-w-5xl mx-auto px-10">
        <div className="bg-bg2 border border-border rounded-3xl py-20 px-10 max-w-2xl mx-auto">
          <div className="section-label justify-center">Let&apos;s Talk</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            Ready to build something great?
          </h2>
          <p className="text-muted text-base max-w-[44ch] mx-auto leading-relaxed mb-10">
            Whether you&apos;re pre-product, scaling fast, or tangled in tech
            debt — let&apos;s spend 30 minutes figuring out if I can help.
          </p>

          {formState === "success" ? (
            <div className="bg-accent/10 border border-accent/25 rounded-xl px-8 py-10">
              <div className="text-2xl font-bold text-white mb-2">
                Got it — thanks!
              </div>
              <p className="text-muted text-sm">
                I&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="text-left flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-muted uppercase tracking-widest"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="bg-bg3 border border-border2 rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted2 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="company"
                  className="text-xs font-semibold text-muted uppercase tracking-widest"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Inc. (optional)"
                  className="bg-bg3 border border-border2 rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted2 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-muted uppercase tracking-widest"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="bg-bg3 border border-border2 rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted2 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-muted uppercase tracking-widest"
                >
                  What&apos;s going on?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your situation — team size, what you're building, where you're stuck..."
                  className="bg-bg3 border border-border2 rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted2 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Try emailing me directly at{" "}
                  <a href="mailto:jayhoots@gmail.com" className="underline">
                    jayhoots@gmail.com
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="btn-primary text-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? "Sending…" : "Send Message"}
              </button>

              <span className="block text-xs text-muted2 text-center">
                Or email me at{" "}
                <a
                  href="mailto:jayhoots@gmail.com"
                  className="text-accent hover:underline"
                >
                  jayhoots@gmail.com
                </a>
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
