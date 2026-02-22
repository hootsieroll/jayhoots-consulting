const services = [
  {
    num: "01",
    title: "Fractional CTO",
    body: "Ongoing senior technical leadership on a retainer basis. I attend key meetings, advise on roadmap and architecture, help with hiring decisions, and serve as your engineering anchor — without the full-time cost.",
    tag: "Retainer",
  },
  {
    num: "02",
    title: "Architecture & Codebase Audit",
    body: "I assess your current stack, surface risks and bottlenecks, and deliver a clear prioritized roadmap. Whether you're scaling, modernizing, or drowning in technical debt — I'll tell you exactly what to do and in what order.",
    tag: "Project",
  },
  {
    num: "03",
    title: "Design System Build",
    body: "I've built design systems from scratch at Disney+ and Aeroflow that accelerated entire engineering orgs. A great design system is one of the highest-leverage investments a growing product team can make.",
    tag: "Project / Retainer",
  },
  {
    num: "04",
    title: "Team Leadership & Standards",
    body: "I help engineering teams level up — establishing coding standards, reviewing pull requests, mentoring mid-level developers, and creating the culture where good engineers want to stay.",
    tag: "Retainer",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="section-label">Services</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">How I can help</h2>
        <p className="text-muted text-lg max-w-[54ch] leading-relaxed mb-12">
          Engagements are tailored to your needs — from ongoing monthly retainers to focused project sprints.
          No long-term lock-in required.
        </p>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-bg2 border border-border hover:border-border2 hover:bg-bg3 rounded-2xl p-8 transition-all duration-200 flex flex-col"
            >
              <div className="text-xs font-bold text-muted2 tracking-widest mb-5">{s.num}</div>
              <h3 className="text-base font-bold tracking-tight mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">{s.body}</p>
              <span className="inline-block mt-5 text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded w-fit">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
