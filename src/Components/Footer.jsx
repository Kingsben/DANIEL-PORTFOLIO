import "./Footer.css";
import logo from "../assets/daniel-logo.png";

function Footer() {
  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="#home" aria-label="Daniel Boateng — back to home">
              <img src={logo} alt="" />
              <span>DANIEL BOATENG</span>
            </a>
            <p>
              Engineering Apprenticeship Candidate<br />
              Manufacturing <span aria-hidden="true">•</span> Mechatronics <span aria-hidden="true">•</span> Automation
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h2>NAVIGATION</h2>
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="footer-connect">
            <h2>CONNECT</h2>
            <a href="https://linkedin.com/in/daniel-b-3668892b0" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/danbuildseng99" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Daniel Boateng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
