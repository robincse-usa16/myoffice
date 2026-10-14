const serviceHighlights = [
  {
    title: "Web Product Design",
    text: "High-converting websites and SaaS product experiences engineered for growth.",
  },
  {
    title: "Custom Software",
    text: "Automation systems, dashboards, and internal tools for better operational flow.",
  },
  {
    title: "Mobile & iOS Apps",
    text: "Polished user experiences for app businesses, startups, and digital brands.",
  },
  {
    title: "SaaS & Micro-SaaS",
    text: "Scalable product systems built for recurring revenue and product-market fit.",
  },
];

const valueCards = [
  {
    title: "Business-first strategy",
    text: "We focus on product decisions that improve revenue, retention, and operational efficiency.",
  },
  {
    title: "Fast execution",
    text: "From concept to launch, we help move quickly without sacrificing clarity, quality, or user trust.",
  },
  {
    title: "Premium product design",
    text: "Every screen, flow, and structure is built to feel credible, polished, and conversion-ready.",
  },
];

const metrics = [
  { value: "100%", label: "Product focus" },
  { value: "24/7", label: "Business support" },
  { value: "Global", label: "Remote delivery" },
];

const steps = [
  "Understand your business model and target audience",
  "Design a product experience that wins trust quickly",
  "Build the platform, flow, and system with clear ROI in mind",
  "Launch, improve, and scale with measurable business outcomes",
];

export default function HomePage() {
  return (
    <>
      <section className="page-hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">MYOffice • Digital Product Studio</p>
          <h1>Digital products that turn attention into revenue.</h1>
          <p className="lead">
            We help founders, startups, and businesses build modern websites,
            apps, SaaS platforms, micro-SaaS products, and custom software that
            look premium, perform smoothly, and drive real growth worldwide.
          </p>

          <div className="button-row">
            <a className="primary-button" href="/contact">
              Book a strategy call
            </a>
            <a className="secondary-button" href="/services">
              Explore services
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="dashboard-panel">
            <div className="panel-bar" />
            <div className="panel-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Company metrics">
        {metrics.map((item) => (
          <div className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Core services</p>
          <h2>Everything your digital business needs to grow.</h2>
        </div>

        <div className="feature-grid four-column">
          {serviceHighlights.map((item) => (
            <article className="info-card" key={item.title}>
              <div className="icon-box" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Why choose us</p>
          <h2>
            We build products that look premium and perform under pressure.
          </h2>
        </div>

        <div className="value-grid">
          {valueCards.map((item) => (
            <div className="value-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section split-layout">
        <div>
          <p className="eyebrow">How we work</p>
          <h2>Clear process. Smart product decisions. Real business value.</h2>
        </div>

        <div className="check-list">
          {steps.map((step) => (
            <p key={step}>• {step}</p>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <p className="eyebrow">Ready to launch?</p>
        <h3>Turn your idea into a product clients trust and buy.</h3>
        <p>
          Whether you need a SaaS platform, a business website, a custom app, or
          a digital growth system, we help you move from concept to conversion
          with the right strategy.
        </p>
        <a className="primary-button" href="/contact">
          Start your project
        </a>
      </section>
    </>
  );
}
