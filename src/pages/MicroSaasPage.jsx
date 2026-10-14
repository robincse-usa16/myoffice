import { useState } from "react";

const microDeliverables = [
  {
    title: "Lean MVP product",
    text: "A focused software idea turned into a clean, useful product that solves one real problem well.",
  },
  {
    title: "Monetization strategy",
    text: "Pricing, onboarding, and value framing shaped to support sustainable recurring revenue.",
  },
  {
    title: "Fast launch execution",
    text: "Quick product validation and reduction of friction so your idea reaches the market faster.",
  },
  {
    title: "Simple product UX",
    text: "A clear workflow that keeps development lean while preserving the premium user experience.",
  },
];

const microProcess = [
  "Choose the strongest niche problem and value proposition",
  "Design the product around a single winning user workflow",
  "Build a clean MVP with a simple and attractive user journey",
  "Launch, learn, and improve carefully for product-market fit",
];

const microUseCases = [
  "Solo founders testing a profitable idea",
  "Small businesses launching niche software services",
  "Teams building a high-margin, focused digital product",
  "Brands wanting a smaller but stronger recurring revenue model",
];

const demoViews = [
  {
    id: "mvp",
    label: "MVP",
    title: "Micro-SaaS demo",
    summary:
      "Focused product value, simple onboarding, and recurring revenue model built for speed.",
    stat: "+18%",
    tag: "Lean growth",
  },
  {
    id: "pricing",
    label: "Pricing",
    title: "Revenue model",
    summary:
      "A simple monetization approach that keeps the product easy to understand and easier to buy.",
    stat: "$49",
    tag: "Low friction",
  },
  {
    id: "launch",
    label: "Launch",
    title: "Early traction",
    summary:
      "Fast product validation and roadmap decisions built around real customer feedback.",
    stat: "7 days",
    tag: "Fast start",
  },
];

export default function MicroSaasPage() {
  const [activeDemo, setActiveDemo] = useState(demoViews[0].id);
  const selectedDemo =
    demoViews.find((item) => item.id === activeDemo) ?? demoViews[0];

  return (
    <section className="content-section page-section">
      <div className="page-hero compact-hero">
        <div>
          <p className="eyebrow">Micro-SaaS</p>
          <h1>Small software products with strong recurring upside.</h1>
        </div>
      </div>

      <div className="split-layout">
        <div>
          <h2>Turn a focused idea into a profitable digital product.</h2>
          <p>
            Micro-SaaS businesses win by solving one clear problem with speed,
            simplicity, and excellent user experience. We help shape the
            product, positioning, and product flow so your idea has a better
            shot at traction and retention.
          </p>
        </div>

        <ul className="feature-list">
          {microUseCases.map((item) => (
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
          <p className="eyebrow">What we focus on</p>
          <h2>
            Lean product design that keeps value clear and revenue focused.
          </h2>
        </div>

        <div className="feature-grid three-column">
          {microDeliverables.map((item) => (
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
          <p className="eyebrow">The product path</p>
          <h2>Focused execution with strong room for growth.</h2>
        </div>

        <div className="check-list">
          {microProcess.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <p className="eyebrow">Have an idea?</p>
        <h3>Turn a focused niche concept into a product people pay for.</h3>
        <p>
          We help build micro-SaaS products that are simple, valuable, and
          structured for measurable recurring growth.
        </p>
        <a className="primary-button" href="/contact">
          Explore a micro-SaaS concept
        </a>
      </div>
    </section>
  );
}
