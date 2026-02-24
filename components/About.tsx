export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="grid gap-20 md:grid-cols-2 items-start">
          {/* Text */}
          <div>
            <div className="section-label">About</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
              The person behind the work
            </h2>
            <div className="space-y-4 text-muted text-sm leading-relaxed">
              <p>
                Hey — I&apos;m Jay, founder of{" "}
                <strong className="text-white font-semibold">In Session Co.</strong> Senior engineer, team lead, and technical strategist based in{" "}
                <strong className="text-white font-semibold">Atlanta, GA</strong>, working with clients across the US.
              </p>
              <p>
                Two decades of building software that actually ships — from{" "}
                <strong className="text-white font-semibold">Disney+ streaming infrastructure</strong> to CNN&apos;s
                election night app, from geospatial tools used in hurricane disaster response to healthcare e-commerce
                platforms. I&apos;ve led teams, architected systems, and shipped products across more industries than
                most engineers see in a lifetime.
              </p>
              <p>
                Before software, I was a{" "}
                <strong className="text-white font-semibold">jazz musician</strong> — BA in Jazz Performance from UNC
                Asheville. That background never left me. I listen before I talk, I improvise under pressure, and I find
                creative solutions within real constraints. It shows up in every client engagement.
              </p>
              <p>
                No fluff, no trend-chasing. I&apos;ll tell you what your codebase actually needs, help you build the
                right team, and make sure what you ship is something you&apos;re proud of years from now.
              </p>
            </div>
          </div>

          {/* Aside cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Currently",
                body: "Open to new consulting engagements — retainer and project-based. Based in Atlanta, GA, working fully remote.",
              },
              {
                title: "Core Expertise",
                body: "React ecosystem · Design Systems · Front-end Architecture · Team Leadership · GraphQL · Technical Strategy",
              },
              {
                title: "Education",
                body: "BS, Information Technology — University of Phoenix\nBA, Jazz Performance — UNC Asheville",
              },
              {
                title: "Ideal Clients",
                body: "Startups scaling their first real engineering team. Mid-size companies with technical debt and no clear owner. Product companies that need senior leadership without the full-time hire.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-bg2 border border-border rounded-xl p-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted2 mb-3">{card.title}</h4>
                <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
