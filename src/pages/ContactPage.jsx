export default function ContactPage() {
  return (
    <section className="content-section page-section contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build your next digital product.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Start a project</h3>
          <p>Email: hello@myoffice.example</p>
          <p>Based: Worldwide</p>
          <p>Focus: SaaS, apps, web, custom software</p>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your email" />
          </label>
          <label>
            Project details
            <textarea rows="5" placeholder="Tell us what you want to build" />
          </label>
          <button type="submit" className="primary-button">
            Send request
          </button>
        </form>
      </div>
    </section>
  );
}
