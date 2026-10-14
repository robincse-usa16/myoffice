const projects = [
  {
    name: "BrandFlow",
    type: "SaaS dashboard",
    detail: "B2B workflow platform with automation and analytics.",
  },
  {
    name: "LaunchKit",
    type: "Marketing website",
    detail: "Conversion-focused funnel for a startup product launch.",
  },
  {
    name: "VentureTrack",
    type: "Mobile app",
    detail: "Investor tracking app with personalized reports and insights.",
  },
  {
    name: "OpsPilot",
    type: "Internal software",
    detail: "Operational workflow app built for business efficiency.",
  },
];

export default function PortfolioPage() {
  return (
    <section className="content-section page-section">
      <div className="section-heading">
        <p className="eyebrow">Portfolio</p>
        <h2>Selected work built for business growth and digital clarity.</h2>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="portfolio-card" key={project.name}>
            <div className="portfolio-visual" aria-hidden="true" />
            <span>{project.type}</span>
            <h3>{project.name}</h3>
            <p>{project.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
