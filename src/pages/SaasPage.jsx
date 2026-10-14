import { useState } from "react";

const SaaSBenefits = [
  {
    title: "Subscription-ready product",
    text: "Product structures built for onboarding, billing, retention, and long-term recurring value.",
  },
  {
    title: "Smart dashboards",
    text: "Clear analytics and control panels designed to help users take action quickly.",
  },
  {
    title: "Scalable platform design",
    text: "Modular product architecture ready for future modules, growth, and user expansion.",
  },
  {
    title: "User retention focus",
    text: "Simplified flows, intuitive navigation, and a premium experience that encourages adoption.",
  },
];

const saasProcess = [
  "Map the customer journey and core value proposition",
  "Design onboarding, dashboards, and feature structure around usability",
  "Build a clean, scalable product foundation for recurring revenue",
  "Improve performance and retention through analytics and iteration",
];

const saasUseCases = [
  "Teams launching software with recurring revenue goals",
  "Businesses replacing manual systems with scalable platforms",
  "Founders building software products for a clear niche market",
  "Companies needing better product clarity and lifecycle management",
];

const demoViews = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "SaaS platform demo",
    summary:
      "Dashboard, onboarding, and recurring growth flows built around user value.",
    stat: "3.2x",
    tag: "Growth system",
  },
  {
    id: "billing",
    label: "Billing",
    title: "Revenue workflow",
    summary:
      "A smoother billing and customer journey designed for retention and plan upgrades.",
    stat: "91%",
    tag: "Health score",
  },
  {
    id: "users",
    label: "Users",
    title: "Product insight",
    summary:
      "A clear product overview that keeps the offer easy to understand for customers and teams.",
    stat: "+64%",
    tag: "Better insights",
  },
];

export default function SaaSPage() {
  const [activeDemo, setActiveDemo] = useState(demoViews[0].id);
  const selectedDemo =
    demoViews.find((item) => item.id === activeDemo) ?? demoViews[0];

  return (
    <section className="content-section page-section">
      <div className="page-hero compact-hero">
        <div>
          <p className="eyebrow">SaaS platforms</p>
          <h1>Launch software that earns recurring value.</h1>
        </div>
      </div>

      <div className="split-layout">
        <div>
          <h2>Built for retention, growth, and operational scale.</h2>
          <p>
            We design SaaS products that improve user confidence, simplify
            onboarding, and support clear business outcomes. The result is
            software that feels premium, performs smoothly, and can grow with
            your product roadmap.
          </p>
        </div>

        <ul className="feature-list">
          {saasUseCases.map((item) => (
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
          <p className="eyebrow">Core product areas</p>
          <h2>
            Scalable software systems designed for real business momentum.
          </h2>
        </div>

        <div className="feature-grid three-column">
          {SaaSBenefits.map((item) => (
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
          <p className="eyebrow">How we deliver results</p>
          <h2>Design for scale, retention, and long-term product health.</h2>
        </div>

        <div className="check-list">
          {saasProcess.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <p className="eyebrow">Build a software business?</p>
        <h3>Create a SaaS platform your users trust and keep using.</h3>
        <p>
          We help founders and teams shape product experiences that are
          intuitive, scalable, and built for recurring value.
        </p>
        <a className="primary-button" href="/contact">
          Discuss your SaaS idea
        </a>
      </div>
    </section>
  );
}
