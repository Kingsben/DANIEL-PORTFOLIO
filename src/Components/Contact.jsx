import "./Contact.css";
import GithubIcon from "./GithubIcon";

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
              <div className="contact-detail-heading"><span className="contact-detail-icon" aria-hidden="true">✉</span><span>EMAIL</span></div>
              <a href="mailto:danielboateng.eng@gmail.com">
                danielboateng.eng@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-heading"><span className="contact-detail-icon" aria-hidden="true">☎</span><span>PHONE</span></div>
              <a href="tel:+447440515692">07440 515692</a>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-heading"><span className="contact-detail-icon" aria-hidden="true">⌖</span><span>LOCATION</span></div>
              <p>Birmingham, UK</p>
            </div>
          </address>

          <div className="contact-socials" aria-label="Daniel Boateng's professional profiles">
            <a
              href="https://linkedin.com/in/daniel-b-3668892b0"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-social-icon" aria-hidden="true">in</span> LINKEDIN <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/danbuildseng99"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-social-icon contact-social-icon-github" aria-hidden="true"><GithubIcon /></span> GITHUB <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
