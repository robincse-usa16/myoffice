import { useState } from "react";

const iosDeliverables = [
  {
    title: "iOS UX strategy",
    text: "Clear flows and polished product experiences tailored for Apple users and premium positioning.",
  },
  {
    title: "App UI design",
    text: "Elegant, clean interfaces that feel intuitive, responsive, and premium from the first screen.",
  },
  {
    title: "Product launch systems",
    text: "Feature planning, onboarding, and release structure focused on adoption and retention.",
  },
  {
    title: "Iteration support",
    text: "Continuous product improvement based on user feedback, analytics, and growth needs.",
  },
];

const iosProcess = [
  "Understand the user problem, core value, and brand positioning",
  "Shape the app flow and premium UI language around conversion and clarity",
  "Develop the product with performance, usability, and polish in mind",
  "Refine based on real usage to support long-term product growth",
];

const iosUseCases = [
  "Founders launching premium iPhone products",
  "Brands wanting a stronger mobile identity",
  "Teams building customer-facing apps with high trust",
  "Businesses improving retention through better product UX",
];

const demoViews = [
  {
    id: "app",
    label: "App",
    title: "iOS product demo",
    summary:
      "Premium app experience crafted around user behavior, clarity, and trust.",
    stat: "92%",
    tag: "Apple-ready",
  },
  {
    id: "flow",
    label: "Flow",
    title: "User journey",
    summary:
      "Smooth onboarding and interaction patterns designed to reduce friction and build confidence.",
    stat: "4.3x",
    tag: "Friction-free",
  },
  {
    id: "revenue",
    label: "Revenue",
    title: "Retention view",
    summary:
      "Product architecture focusing on customer loyalty, trust, and long-term growth.",
    stat: "+68%",
    tag: "Higher value",
  },
];

export default function IosDevelopmentPage() {
  const [activeDemo, setActiveDemo] = useState(demoViews[0].id);
  const selectedDemo =
    demoViews.find((item) => item.id === activeDemo) ?? demoViews[0];

  return (
    <section className="content-section page-section">
      <div className="page-hero compact-hero">
        <div>
          <p className="eyebrow">iOS development</p>
          <h1>Premium iOS experiences built to impress and convert.</h1>
        </div>
      </div>

      <div className="split-layout">
        <div>
          <h2>Apple-focused design with real business value.</h2>
          <p>
            We help founders and teams build elegant iOS products that feel
            premium, perform reliably, and support the goals of growth, trust,
            and lasting product value. Good design is not only visual — it
            creates confidence for users and clarity for the business.
          </p>
        </div>

        <ul className="feature-list">
          {iosUseCases.map((item) => (
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
          <p className="eyebrow">What we design</p>
          <h2>Smart product experiences for Apple-first audiences.</h2>
        </div>

        <div className="feature-grid three-column">
          {iosDeliverables.map((item) => (
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
          <p className="eyebrow">How we create value</p>
          <h2>Product polish that supports growth, retention, and trust.</h2>
        </div>

        <div className="check-list">
          {iosProcess.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <p className="eyebrow">Want a premium iOS product?</p>
        <h3>Design an app experience users remember and trust.</h3>
        <p>
          We turn product ideas into polished digital experiences that feel
          premium and work hard for your business.
        </p>
        <a className="primary-button" href="/contact">
          Book an iOS product call
        </a>
      </div>
    </section>
  );
}
