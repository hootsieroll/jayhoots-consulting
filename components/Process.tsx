const steps = [
  {
    title: "Discovery Call",
    body: "30 minutes. I listen, ask questions, and get a real picture of where you are and what you need. No sales pitch.",
  },
  {
    title: "Scoped Proposal",
    body: "I put together a clear engagement structure — scope, timeline, and pricing. Retainer, project, or audit format.",
  },
  {
    title: "Fast Start",
    body: "I embed with your team quickly. No long ramp-up. I've seen enough codebases and teams to get up to speed fast.",
  },
  {
    title: "Ongoing or Exit",
    body: "Most clients stick around because it works. But I'm also happy to hand off cleanly when the job is done. No lock-in.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-bg2 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="section-label">Process</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">How we work together</h2>
        <p className="text-muted text-lg max-w-[50ch] leading-relaxed mb-12">
          Simple, low-overhead, and focused on delivering real value from day one.
        </p>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {steps.map((step, i) => (
            <div key={i} className="bg-bg3 border border-border rounded-xl p-6">
              <div className="text-3xl font-extrabold tracking-tighter text-border2 mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-sm font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
