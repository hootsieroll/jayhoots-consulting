const stats = [
  { n: "20+", label: "Years of professional software engineering" },
  { n: "2M+", label: "Concurrent users on CNN election night" },
  { n: "3", label: "Disney streaming platforms using my config system" },
  { n: "6+", label: "Industries: media, aerospace, healthcare, retail, finance, enterprise" },
  { n: "3+", label: "Design systems built and shipped from scratch" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-bg2 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="section-label">By the Numbers</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Impact in numbers</h2>
        <p className="text-muted text-lg max-w-[44ch] leading-relaxed mb-12">
          Experience is one thing. Results are another.
        </p>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {stats.map((s) => (
            <div key={s.n} className="bg-bg3 border border-border2 rounded-2xl p-8">
              <div className="text-5xl font-extrabold tracking-tighter text-accent leading-none mb-3">{s.n}</div>
              <div className="text-xs text-muted leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
