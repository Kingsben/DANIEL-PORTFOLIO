import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-copyright">© 2026 Daniel Boateng</p>
        <nav className="footer-nav" aria-label="Footer">
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
          <a href="https://linkedin.com/in/daniel-b-3668892b0" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/danbuildseng99" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
