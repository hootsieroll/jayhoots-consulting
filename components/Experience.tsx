const roles = [
  {
    role: "Sr. Software Engineer — Configuration Management Platform",
    company: "Disney+ / ESPN / Hulu",
    period: "3.5 years",
    badge: "Highlight",
    hot: true,
    desc: "Led an internal team that designed and shipped a configuration management system used in production across all three of Disney's major streaming properties. The system gave product teams dynamic control over features, experiments, and platform behavior at massive scale.",
  },
  {
    role: "Sr. Web Developer & Front-End Team Lead",
    company: "Aeroflow Inc — Healthcare E-commerce, Asheville NC",
    period: "2020–Present",
    badge: null,
    hot: true,
    desc: "Architected and built a company-wide React design system adopted across all product lines, cutting development time significantly. Manages a team of front-end developers and sets JavaScript, CSS, and architectural standards across React, WordPress, and Magento properties.",
  },
  {
    role: "Sr. Developer & Engineering Manager",
    company: "Sales Performance International, Asheville NC",
    period: "2018–2020",
    badge: null,
    hot: false,
    desc: "Led a full-stack team building a B2B sales enablement platform integrated with Salesforce. Delivered tools used by large international sales organizations for training, tracking, and closing. Stack: Ruby on Rails, React, GraphQL.",
  },
  {
    role: "Sr. Front-End Developer",
    company: "Airbus Aerial — Geospatial Mapping, Atlanta GA",
    period: "2017–2018",
    badge: null,
    hot: false,
    desc: "Built a real-time, high-resolution 2D/3D geospatial mapping application for enterprise clients. The platform was used during hurricane season for disaster response — dramatically reducing time-to-insight for on-the-ground teams. Stack: Angular, TypeScript, OpenLayers, Docker.",
  },
  {
    role: "Lead Front-End Developer",
    company: "Deloitte, Atlanta GA",
    period: "2016–2017",
    badge: null,
    hot: false,
    desc: "Led front-end for a complex enterprise data visualization dashboard with a multi-layered filtering system, overseeing 6–8 remote developers. Overhauled the codebase from Angular 1 to a modern ES2015 component architecture.",
  },
  {
    role: "Sr. Front-End Developer — CNN Elections App",
    company: "CNN, Atlanta GA",
    period: "2016",
    badge: "2M+ users",
    hot: true,
    desc: "Part of a specialized team that built cnn.com/election as an isomorphic React/Redux/Node progressive web app. On election night, the app handled over 2 million concurrent users without breaking a sweat.",
  },
  {
    role: "Lead UX Developer — Bloomingdale's Mobile CRM",
    company: "Macy's / Bloomingdale's, Atlanta GA",
    period: "2014–2015",
    badge: null,
    hot: false,
    desc: "Lead developer on the Omniclient enterprise mobile CRM for Bloomingdale's, built with AngularJS and Ionic/PhoneGap. Responsible for architecture, custom Sass, and team oversight.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="section-label">Experience</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Where I&apos;ve done it</h2>
        <p className="text-muted text-lg max-w-[54ch] leading-relaxed mb-12">
          A track record across industries and team sizes — from scrappy product teams to infrastructure
          powering some of the world&apos;s most-visited platforms.
        </p>
        <div className="flex flex-col border border-border rounded-2xl overflow-hidden">
          {roles.map((r, i) => (
            <div
              key={i}
              className="grid gap-x-7 items-start p-8 border-b border-border last:border-b-0 bg-bg2 hover:bg-bg3 transition-colors"
              style={{ gridTemplateColumns: "3px 1fr auto" }}
            >
              {/* Accent bar */}
              <div className={`self-stretch w-0.5 rounded-full ${r.hot ? "bg-accent" : "bg-border2"}`} />

              {/* Content */}
              <div>
                <div className="text-sm font-bold tracking-tight mb-1">{r.role}</div>
                <div className="text-sm font-semibold text-accent mb-2">{r.company}</div>
                <div className="text-sm text-muted leading-relaxed">{r.desc}</div>
              </div>

              {/* Meta */}
              <div className="text-right hidden md:block">
                <div className="text-xs text-muted2 whitespace-nowrap">{r.period}</div>
                {r.badge && (
                  <span className="inline-block mt-1.5 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                    {r.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
