const testimonials = [
  {
    quote:
      "Jay brought clarity to a codebase that had grown beyond our team's ability to reason about. Within two months he'd restructured our architecture and our engineers were shipping twice as fast.",
    name: "— Coming soon",
    title: "Engineering Director, SaaS startup",
  },
  {
    quote:
      "We needed someone who could talk to the board about technology decisions and then sit with engineers to make them happen. Jay did both seamlessly.",
    name: "— Coming soon",
    title: "CEO, Series A company",
  },
  {
    quote:
      "The design system Jay built became the foundation of everything our team shipped for the next three years. We still use it today.",
    name: "— Coming soon",
    title: "Product Lead, Healthcare tech",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="section-label">Testimonials</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">What people say</h2>
        <p className="text-muted text-lg max-w-[50ch] leading-relaxed mb-12">
          Feedback from colleagues, clients, and teams I&apos;ve led.
        </p>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {testimonials.map((t, i) => (
            <div key={i} className="bg-bg2 border border-border rounded-2xl p-8 flex flex-col gap-5">
              <blockquote className="text-sm text-muted leading-relaxed italic">
                <span className="text-2xl text-accent leading-none align-middle mr-1">&ldquo;</span>
                {t.quote}
              </blockquote>
              <div>
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-muted2 mt-0.5">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
