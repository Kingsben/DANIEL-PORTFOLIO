import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/daniel-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo / Brand */}
        <a
          href="#home"
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


        {/* Mobile Button */}
        <button
          className={`mobile-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
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
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-nav-item"
            onClick={closeMenu}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
