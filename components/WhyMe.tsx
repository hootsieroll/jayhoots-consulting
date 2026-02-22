const cards = [
  {
    icon: "🏗️",
    title: "Built at real scale",
    body: "From Disney+ streaming infrastructure serving millions to CNN's election night app handling 2M+ concurrent users — I know what production-ready actually means.",
  },
  {
    icon: "🔭",
    title: "Cross-industry perspective",
    body: "Media, aerospace, healthcare, enterprise consulting, e-commerce. That breadth means I bring patterns and solutions from worlds your competitors haven't thought to look in.",
  },
  {
    icon: "🎯",
    title: "Engineer who leads",
    body: "I've managed teams, set architectural standards, and driven hiring decisions — not just written code. I understand the human side of building software.",
  },
  {
    icon: "🎷",
    title: "Trained to improvise",
    body: "A background in jazz performance taught me to listen, adapt, and perform under pressure — skills that translate directly into leading teams and navigating ambiguous technical problems.",
  },
];

export default function WhyMe() {
  return (
    <section id="why" className="bg-bg2 py-24">
      <div className="max-w-5xl mx-auto px-10">
        <div className="section-label">Why Jay</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">What sets me apart</h2>
        <p className="lead text-muted text-lg max-w-[54ch] leading-relaxed mb-12">
          Most consultants specialize in one lane. I&apos;ve spent 20+ years shipping software across industries,
          at scale, under pressure — and leading teams through all of it.
        </p>
        <div
          className="grid gap-px bg-border border border-border rounded-2xl overflow-hidden"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-bg2 hover:bg-bg3 transition-colors p-8"
            >
              <div className="text-2xl mb-4">{card.icon}</div>
              <h3 className="text-base font-bold tracking-tight mb-2">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
