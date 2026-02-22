export default function Hero() {
  const logos = ["Disney+", "ESPN", "Hulu", "CNN", "Deloitte", "Airbus", "Macy's"];

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-20 max-w-5xl mx-auto px-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full w-fit mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
        <span className="text-xs font-semibold text-accent tracking-wider uppercase">Available for new engagements</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tighter mb-6 max-w-[14ch]">
        Engineering leadership,{" "}
        <em className="not-italic text-accent">built for your stage.</em>
      </h1>

      {/* Subheading */}
      <p className="text-muted text-lg max-w-[50ch] leading-relaxed mb-10">
        I help startups and growing companies ship better software, make confident
        architecture decisions, and scale their teams — without the cost of a full-time CTO.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 mb-20">
        <a href="#contact" className="btn-primary">Work With Me</a>
        <a href="#services" className="btn-secondary">See What I Do →</a>
      </div>

      {/* Social proof */}
      <div className="pt-10 border-t border-border">
        <p className="text-xs font-bold tracking-widest uppercase text-muted2 mb-5">
          Engineering experience across
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-bold text-muted2 tracking-tight hover:text-muted transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
