import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-container">
        <div className="contact-intro">
          <div className="contact-heading">
            <span className="contact-label">05 / CONTACT</span>
            <h2 id="contact-title">
              Let&apos;s talk about the
              <br />
              next opportunity.
            </h2>
          </div>
          <p>
            I&apos;m open to engineering apprenticeship opportunities and
            conversations around mechanical engineering, manufacturing,
            mechatronics, automation and controls.
          </p>
        </div>

        <div className="contact-content">
          <a
            className="contact-cta"
            href="mailto:danielboateng.eng@gmail.com"
            aria-label="Email Daniel Boateng"
          >
            GET IN TOUCH <span aria-hidden="true">→</span>
          </a>

          <address className="contact-details">
            <div className="contact-detail contact-email">
              <span>EMAIL</span>
              <a href="mailto:danielboateng.eng@gmail.com">
                danielboateng.eng@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <span>PHONE</span>
              <a href="tel:+447440515692">07440 515692</a>
            </div>
            <div className="contact-detail">
              <span>LOCATION</span>
              <p>Birmingham, UK</p>
            </div>
          </address>

          <div className="contact-socials" aria-label="Daniel Boateng's professional profiles">
            <a
              href="https://linkedin.com/in/daniel-b-3668892b0"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/danbuildseng99"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
