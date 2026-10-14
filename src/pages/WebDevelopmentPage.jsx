import { useState } from "react";

const webDeliverables = [
  {
    title: "Business websites",
    text: "Modern online experiences designed to communicate value clearly and build trust quickly.",
  },
  {
    title: "Landing pages",
    text: "Conversion-focused pages built to turn attention into inquiries, clicks, and revenue.",
  },
  {
    title: "Web apps",
    text: "Interactive product experiences that combine design quality with business logic.",
  },
  {
    title: "Frontend systems",
    text: "Responsive, clean, and scalable front-end architecture built for long-term growth.",
  },
];

const webProcess = [
  "Define your offer, audience, and digital positioning",
  "Design a clear visual structure that builds confidence",
  "Build the website with performance, clarity, and responsiveness in mind",
  "Launch, optimize, and evolve with real audience feedback",
];

const webUseCases = [
  "Service businesses looking for stronger online sales",
  "Startups that need a premium website fast",
  "Brands wanting more qualified leads and conversion action",
  "Companies modernizing their digital presence and product story",
];

const demoViews = [
  {
    id: "hero",
    label: "Hero",
    title: "Website demo",
    summary:
      "Premium landing page structure with trust-building sections and faster conversion flow.",
    stat: "+31%",
    tag: "Conversion-first",
  },
  {
    id: "landing",
    label: "Landing",
    title: "Offer flow",
    summary:
      "Clear value messaging and CTA flow designed to guide visitors toward action.",
    stat: "4.8x",
    tag: "Lead magnet",
  },
  {
    id: "growth",
    label: "Growth",
    title: "Performance view",
    summary:
      "A strong customer journey structure that supports credibility and business conversion.",
    stat: "72%",
    tag: "Higher trust",
  },
];

export default function WebDevelopmentPage() {
  const [activeDemo, setActiveDemo] = useState(demoViews[0].id);
  const selectedDemo =
    demoViews.find((item) => item.id === activeDemo) ?? demoViews[0];

  return (
    <section className="content-section page-section">
      <div className="page-hero compact-hero">
        <div>
          <p className="eyebrow">Web development</p>
          <h1>High-converting web experiences built for trust and growth.</h1>
        </div>
      </div>

      <div className="split-layout">
        <div>
          <h2>Beautiful websites with business impact.</h2>
          <p>
            We build modern web systems that combine premium design with
            practical conversion thinking. Every section is designed to make
            your offer easier to understand, easier to trust, and easier to buy.
          </p>
        </div>

        <ul className="feature-list">
          {webUseCases.map((item) => (
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
          <p className="eyebrow">What you get</p>
          <h2>Web products that feel premium and perform under pressure.</h2>
        </div>

        <div className="feature-grid three-column">
          {webDeliverables.map((item) => (
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
          <p className="eyebrow">Our method</p>
          <h2>Strategy, design, and engineering working together.</h2>
        </div>

        <div className="check-list">
          {webProcess.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <p className="eyebrow">Ready to launch?</p>
        <h3>Turn traffic into trust and trust into qualified business.</h3>
        <p>
          We build websites and product pages that feel confident, modern, and
          strongly aligned with your growth goals.
        </p>
        <a className="primary-button" href="/contact">
          Start your web project
        </a>
      </div>
    </section>
  );
}
