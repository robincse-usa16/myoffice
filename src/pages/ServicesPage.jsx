const services = [
  {
    title: "Web Design & Development",
    description:
      "Responsive business websites, sales funnels, landing pages, and product interfaces designed to attract and convert customers.",
  },
  {
    title: "App Development",
    description:
      "Modern mobile and web app experiences designed for user loyalty, product growth, and clear business outcomes.",
  },
  {
    title: "iOS Product Design",
    description:
      "Premium iOS experiences with polished flows, seamless UX patterns, and sleek product presentation for Apple audiences.",
  },
  {
    title: "SaaS Platforms",
    description:
      "Scalable subscription systems with dashboards, automation, user management, and product architecture that supports growth.",
  },
  {
    title: "Micro-SaaS",
    description:
      "Lean, focused software businesses built to solve one strong problem and generate high-margin recurring value.",
  },
  {
    title: "Custom Software",
    description:
      "Tailored tools, internal systems, portals, and workflow software built to improve operations and team productivity.",
  },
];

const outcomes = [
  "Clear product positioning for your target market",
  "Stronger conversion and trust from first impression to final action",
  "Custom systems built around your business workflows and goals",
  "A premium digital presence that helps clients choose you quickly",
];

export default function ServicesPage() {
  return (
    <section className="content-section page-section">
      <div className="section-heading">
        <p className="eyebrow">Our services</p>
        <h2>
          We create digital products that attract client trust and drive
          business action.
        </h2>
      </div>

      <div className="feature-grid three-column">
        {services.map((item) => (
          <article className="service-card" key={item.title}>
            <div className="mini-icon" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="content-section split-layout">
        <div>
          <p className="eyebrow">What clients get</p>
          <h2>Strategy, technology, and design working together.</h2>
        </div>

        <div className="check-list">
          {outcomes.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <p className="eyebrow">Need a custom solution?</p>
        <h3>Build a service experience your customers remember.</h3>
        <p>
          MYOffice helps businesses create digital products and systems that
          feel premium, perform reliably, and move customers toward action.
        </p>
        <a className="primary-button" href="/contact">
          Request a proposal
        </a>
      </div>
    </section>
  );
}
