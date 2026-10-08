import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/daniel-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home", icon: "⌂" },
    { name: "About", href: "/#about", icon: "◌" },
    { name: "Skills", href: "/#skills", icon: "⌘" },
    { name: "Experience", href: "/#experience", icon: "◫" },
    { name: "Projects", href: "/#projects", icon: "▧" },
  ];

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${hasScrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo / Brand */}
        <a
          href="/#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Daniel Boateng"
            className="navbar-logo"
          />

          <div className="navbar-brand-text">
            <span className="navbar-name">
              DANIEL BOATENG
            </span>

            <span className="navbar-subtitle">
              ENGINEERING PORTFOLIO
            </span>
          </div>
        </a>


        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-item"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a className="navbar-cta" href="/#contact">GET IN TOUCH</a>


        {/* Mobile Button */}
        <button
          className={`mobile-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* Mobile Navigation */}
      <nav
        className={`mobile-nav ${
          menuOpen ? "show" : ""
        }`}
      >
        <div className="mobile-drawer-header"><span>MENU</span><button type="button" onClick={closeMenu} aria-label="Close navigation">×</button></div>
        <span className="mobile-nav-label">MAIN</span>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-nav-item"
            onClick={closeMenu}
          >
              <span><span className="mobile-nav-icon" aria-hidden="true">{item.icon}</span>{item.name}</span><span aria-hidden="true">→</span>
          </a>
        ))}
        <a href="/#contact" className="mobile-nav-item" onClick={closeMenu}><span><span className="mobile-nav-icon" aria-hidden="true">✉</span>Contact</span><span aria-hidden="true">→</span></a>
        <span className="mobile-nav-label mobile-nav-label-more">MORE</span>
        <a href="/gallery" className="mobile-nav-item" onClick={closeMenu}><span><span className="mobile-nav-icon" aria-hidden="true">▤</span>Gallery</span><span aria-hidden="true">→</span></a>
        <a href="/#contact" className="mobile-nav-cta" onClick={closeMenu}>GET IN TOUCH</a>
      </nav>
      {menuOpen && <button type="button" className="mobile-nav-backdrop" aria-label="Close navigation" onClick={closeMenu} />}
    </header>
  );
}

export default Navbar;
