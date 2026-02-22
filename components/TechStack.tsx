const groups = [
  {
    label: "Frontend",
    tags: [
      { name: "React", featured: true },
      { name: "TypeScript", featured: true },
      { name: "Redux", featured: false },
      { name: "Next.js", featured: false },
      { name: "Gatsby", featured: false },
      { name: "Angular", featured: false },
      { name: "React Native", featured: false },
    ],
  },
  {
    label: "Styling & Design Systems",
    tags: [
      { name: "Tailwind CSS", featured: true },
      { name: "CSS Modules", featured: true },
      { name: "Sass / BEM", featured: false },
      { name: "CSS Grid", featured: false },
      { name: "Flexbox", featured: false },
      { name: "Storybook", featured: false },
      { name: "Figma", featured: false },
    ],
  },
  {
    label: "Data & APIs",
    tags: [
      { name: "GraphQL", featured: true },
      { name: "Apollo", featured: false },
      { name: "REST", featured: false },
      { name: "Node / Express", featured: false },
      { name: "Ruby on Rails", featured: false },
      { name: "Salesforce", featured: false },
    ],
  },
  {
    label: "Tooling & Infrastructure",
    tags: [
      { name: "Webpack", featured: true },
      { name: "Vite", featured: false },
      { name: "Docker", featured: false },
      { name: "Git", featured: false },
      { name: "Jest", featured: false },
      { name: "Cypress", featured: false },
      { name: "RTL", featured: false },
      { name: "d3.js", featured: false },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-bg2 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-10">
        <div className="section-label">Tech Stack</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Tools I work with</h2>
        <p className="text-muted text-lg max-w-[54ch] leading-relaxed mb-12">
          Deep expertise in the modern JavaScript ecosystem, with full-stack range across frameworks,
          build tools, and infrastructure.
        </p>
        <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-muted2 mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) =>
                  tag.featured ? (
                    <span key={tag.name} className="tag-featured">{tag.name}</span>
                  ) : (
                    <span key={tag.name} className="tag">{tag.name}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
