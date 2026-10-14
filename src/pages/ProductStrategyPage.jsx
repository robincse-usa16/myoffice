import { useState } from "react";

const strategyDeliverables = [
  {
    title: "Market clarity",
    text: "Clear understanding of your audience, offer, and what makes your product valuable.",
  },
  {
    title: "Product roadmap",
    text: "A realistic sequence of product priorities that reduces wasted effort and speeds confidence.",
  },
  {
    title: "UX direction",
    text: "Structured thinking for the user journey, flow, and conversion moments that matter most.",
  },
  {
    title: "Growth support",
    text: "Strategy that keeps product decisions aligned with business goals and customer needs.",
  },
];

const strategyProcess = [
  "Research the problem, market, and customer needs",
  "Define the product value proposition and positioning",
  "Build the user flow, roadmap, and priority structure",
  "Support delivery and iteration as the product grows",
];

const strategyUseCases = [
  "Founders validating a new product concept",
  "Teams clarifying a product direction before investing further",
  "Businesses improving the business case behind a digital product",
  "Organizations that need a stronger user and growth strategy",
];

const demoViews = [
  {
    id: "roadmap",
    label: "Roadmap",
    title: "Strategy demo",
    summary:
      "Roadmap, positioning, and product clarity designed to reduce risk and improve decisions.",
    stat: "2x",
    tag: "Clear direction",
  },
  {
    id: "research",
    label: "Research",
    title: "Opportunity map",
    summary:
      "A clearer view of user needs, priorities, and business value to guide the build.",
    stat: "87%",
    tag: "Higher clarity",
  },
  {
    id: "growth",
    label: "Growth",
    title: "Product path",
    summary:
      "Smart prioritization that aligns product work with real customer demand and revenue goals.",
    stat: "3.1x",
    tag: "Better decisions",
  },
];

export default function ProductStrategyPage() {
  const [activeDemo, setActiveDemo] = useState(demoViews[0].id);
  const selectedDemo =
    demoViews.find((item) => item.id === activeDemo) ?? demoViews[0];

  return (
    <section className="content-section page-section">
      <div className="page-hero compact-hero">
        <div>
          <p className="eyebrow">Product strategy</p>
          <h1>Build the right roadmap before you build the product.</h1>
        </div>
      </div>

      <div className="split-layout">
        <div>
          <h2>Great products start with clear direction.</h2>
          <p>
            We help founders and teams define product vision, customer value,
            and the experience needed to turn an idea into something useful,
            credible, and commercially meaningful. Strategy reduces confusion
            and gives every decision stronger purpose.
          </p>
        </div>

        <ul className="feature-list">
          {strategyUseCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="demo-showcase">
        <div className="demo-toggle">
          {demoViews.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === activeDemo ? "active" : ""}
              onClick={() => setActiveDemo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mockup-window">
          <div className="window-bar">
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-dot" />
          </div>
          <div className="mockup-layout">
            <div className="mockup-sidebar">
              <div className="sidebar-item" />
              <div className="sidebar-item" />
              <div className="sidebar-item" />
              <div className="sidebar-item" />
            </div>
            <div className="mockup-main">
              <div className="mockup-chart" />
              <div className="mockup-stats">
                <div className="stat-pill" />
                <div className="stat-pill" />
              </div>
            </div>
          </div>
        </div>

        <div className="mockup-card">
          <h3>{selectedDemo.title}</h3>
          <p>{selectedDemo.summary}</p>
          <span className="mockup-pill">{selectedDemo.tag}</span>
          <div className="floating-mini">
            <span />
            <strong>{selectedDemo.stat}</strong>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="section-heading">
          <p className="eyebrow">What we define</p>
          <h2>Product clarity that helps teams focus on the right work.</h2>
        </div>

        <div className="feature-grid three-column">
          {strategyDeliverables.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="mini-icon" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="content-section split-layout">
        <div>
          <p className="eyebrow">How we guide the process</p>
          <h2>Clear, effective product decisions from idea to launch.</h2>
        </div>

        <div className="check-list">
          {strategyProcess.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <p className="eyebrow">Need a smarter roadmap?</p>
        <h3>
          Build the right product direction before spending on the wrong build.
        </h3>
        <p>
          We help you turn early ideas into a clear digital plan grounded in
          customer value and business priorities.
        </p>
        <a className="primary-button" href="/contact">
          Book a product strategy call
        </a>
      </div>
    </section>
  );
}
