export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="grid gap-20 md:grid-cols-2 items-start">
          {/* Text */}
          <div>
            <div className="section-label">About</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
              The engineer behind the work
            </h2>
            <div className="space-y-4 text-muted text-sm leading-relaxed">
              <p>
                I&apos;m Jay Hoots — a senior software engineer, team lead, and technical strategist based in{" "}
                <strong className="text-white font-semibold">Asheville, NC</strong>, working remotely with clients across the US.
              </p>
              <p>
                My career spans two decades of building software that matters — from{" "}
                <strong className="text-white font-semibold">Disney+ streaming infrastructure</strong> to CNN&apos;s election
                night app, from geospatial tools used in hurricane disaster response to healthcare e-commerce platforms.
                I&apos;ve led teams, architected systems, and shipped products across more industries than most engineers
                see in a lifetime.
              </p>
              <p>
                I started my career as a{" "}
                <strong className="text-white font-semibold">jazz musician</strong> — a BA in Jazz Performance from UNC
                Asheville — before pivoting into software. That background shaped how I think: I&apos;m trained to listen
                carefully, improvise under pressure, and find creative solutions within constraints. It shows up every day
                in how I work with clients and teams.
              </p>
              <p>
                My approach is pragmatic and honest. I&apos;ll tell you what your codebase actually needs, not what&apos;s
                trendy. I&apos;ll help you hire the right people, set realistic timelines, and build something you&apos;ll
                be proud of for years.
              </p>
            </div>
          </div>

          {/* Aside cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Currently",
                body: "Open to new consulting engagements — retainer and project-based. Based in Asheville, NC, working fully remote.",
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
