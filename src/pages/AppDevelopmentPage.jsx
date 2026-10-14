import { useState } from "react";

const appDeliverables = [
  {
    title: "MVP app design",
    text: "Lean product experiences built quickly for testing, validation, and early traction.",
  },
  {
    title: "Custom business apps",
    text: "Operational tools, dashboards, and workflows that improve daily execution and team productivity.",
  },
  {
    title: "User growth systems",
    text: "Experience design focused on onboarding, retention, and conversion-driven product flow.",
  },
  {
    title: "Product iteration",
    text: "Continuous refinement based on user feedback, retention data, and market response.",
  },
];

const appProcess = [
  "Map the user journey and business goal behind the app",
  "Design the interface and interaction flow for clarity and trust",
  "Build the app with scalable architecture and clean performance",
  "Launch, track, refine, and improve based on real user behavior",
];

const appUseCases = [
  "Startups validating a new app idea",
  "Businesses replacing manual workflows with custom tools",
  "Brands launching user-facing mobile products",
  "Teams improving retention, onboarding, and product value",
];

const demoViews = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "Custom app demo",
    summary:
      "Product flow, onboarding, and engagement built to convert and retain.",
    stat: "+42%",
    tag: "Launch-ready",
  },
  {
    id: "workflow",
    label: "Workflow",
    title: "Operations view",
    summary:
      "A clean workflow system that reduces friction and speeds daily decisions.",
    stat: "2.4x",
    tag: "Faster task flow",
  },
  {
    id: "engagement",
    label: "Engagement",
    title: "Customer journey",
    summary:
      "Onboarding and retention moments designed to keep users active and satisfied.",
    stat: "89%",
    tag: "High retention",
  },
];

export default function AppDevelopmentPage() {
  const [activeDemo, setActiveDemo] = useState(demoViews[0].id);
  const selectedDemo =
    demoViews.find((item) => item.id === activeDemo) ?? demoViews[0];

  return (
    <section className="content-section page-section">
      <div className="page-hero compact-hero">
        <div>
          <p className="eyebrow">App development</p>
          <h1>Custom apps that help people act, trust, and stay.</h1>
        </div>
      </div>

      <div className="split-layout">
        <div>
          <h2>From concept to polished mobile product.</h2>
          <p>
            We design and build custom applications that feel premium, work
            smoothly, and support your business goals from day one. Whether you
            need a startup MVP, a customer-facing product, or a business
            operation tool, the experience is shaped around people, clarity, and
            measurable results.
          </p>
        </div>

        <ul className="feature-list">
          {appUseCases.map((item) => (
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
          <p className="eyebrow">What we build</p>
          <h2>Apps designed to earn trust and reduce friction.</h2>
        </div>

        <div className="feature-grid three-column">
          {appDeliverables.map((item) => (
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
          <p className="eyebrow">How we work</p>
          <h2>Clear process. Better product decisions. Stronger adoption.</h2>
        </div>

        <div className="check-list">
          {appProcess.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <p className="eyebrow">Need a custom app?</p>
        <h3>Build a product your users want to return to.</h3>
        <p>
          We create digital tools and customer experiences that are designed to
          look polished, feel natural, and support real business growth.
        </p>
        <a className="primary-button" href="/contact">
          Request a custom app quote
        </a>
      </div>
    </section>
  );
}
